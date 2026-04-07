---
name: omnipresence-radar-spotlight
description: Implement omni-present global mouse tracking (spotlight effect) on glass cards.
---

# 🔭 Omnipresence Radar — Proximity Field Engine

## What It Does
Makes glass cards "come alive" when the user's cursor approaches them, using **Euclidean distance calculation** from the mouse position to each card's bounding box. No hover states. No cursor-following orbs. The card itself reacts.

## Architecture

```
window.addEventListener('mousemove')
  └─ requestAnimationFrame()
       └─ forEach(card)
            ├─ getBoundingClientRect() → card edges
            ├─ Euclidean distance: dx² + dy² → √distance
            ├─ proximity = max(0, 1 - distance / RADIUS)
            └─ card.style.setProperty('--var', value)
                 ├─ --border-glow   (shell brightness)
                 ├─ --ring-vis      (rotating conic ring)
                 ├─ --edge-vis      (top 1px neon line)
                 ├─ --inner-glow    (glass bloom)
                 ├─ --glass-bg      (panel transparency)
                 └─ card.style.transform = scale(...)
```

## Implementation Pattern

```tsx
// Inside useEffect:
const handleMouseMove = (e: MouseEvent) => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll<HTMLElement>('.my-card');
    if (cards.length === 0) return;

    requestAnimationFrame(() => {
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            // SAFETY: skip cards with zeroed rects
            if (rect.width === 0 && rect.height === 0) return;

            // Euclidean distance to nearest bounding box edge
            const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right);
            const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom);
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Proximity: 1.0 = touching, 0.0 = RADIUS px away
            const p = Math.max(0, 1 - distance / 280);

            // Inject PRE-CALCULATED values (never use calc() in inline style)
            card.style.setProperty('--border-glow', `${0.06 + p * 0.55}`);
            card.style.setProperty('--ring-vis', `${p * 0.65}`);
            card.style.setProperty('--inner-glow', `${p * 0.5}`);
            card.style.setProperty('--glass-bg', `${0.78 - p * 0.18}`);
            card.style.transform = `scale(${1 + p * 0.028})`;

            // Telemetry payload for Lorena
            card.dataset.proximityScore = p.toFixed(4);
        });
    });
};

window.addEventListener('mousemove', handleMouseMove, { passive: true });
```

## CSS Consumption Pattern

```tsx
<div style={{
    background: `rgba(255,255,255, var(--border-glow, 0.06))`,
    boxShadow: `0 0 var(--glow-spread, 0px) 0px rgba(6,182,212,0.3)`,
    transition: 'background 0.15s ease-out, box-shadow 0.15s ease-out',
}}>
    {/* Rotating ring */}
    <div style={{
        opacity: 'var(--ring-vis, 0)',
        background: 'conic-gradient(from 0deg, transparent 65%, rgba(6,182,212,1) 85%)',
    }} className="animate-[spin_4s_linear_infinite]" />
    
    {/* Glass panel */}
    <div style={{
        backgroundColor: `rgba(3, 7, 18, var(--glass-bg, 0.78))`,
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06), 0 0 60px rgba(6,182,212, var(--inner-glow, 0))`,
    }} />
</div>
```

## Radius Guidelines

| Context | Recommended Radius | Rationale |
|---|---|---|
| 3 cards in a row | 280px | Covers gap between cards on 1440p |
| 4 cards in a row | 320px | Wider gaps need wider field |
| Single hero card | 400px | Isolated element, broad detection |
| Mobile (future) | Touch-based | Replace mousemove with touchmove |

---

## ⛔ CRITICAL TRAPS (MUST READ BEFORE IMPLEMENTING)

### TRAP 1: GSAP `autoAlpha` Kills `getBoundingClientRect()`
```
❌ gsap.fromTo('.card', { autoAlpha: 0 }, { autoAlpha: 1 })
✅ gsap.fromTo('.card', { opacity: 0 },   { opacity: 1 })
```
**Why:** `autoAlpha: 0` sets `visibility: hidden`. When an element has `visibility: hidden`, `getBoundingClientRect()` returns `{ top:0, left:0, width:0, height:0 }`. The Euclidean distance calculation then computes against point `(0,0)`, which is ALWAYS far from the cursor → proximity is ALWAYS 0 → cards NEVER react. This bug is **silent** — no console errors, no visual indicators, just dead cards.

### TRAP 2: Never Use `calc()` in React Inline `style={{}}`
```
❌ style={{ opacity: 'calc(var(--proximity) * 0.8)' }}
✅ style={{ opacity: 'var(--ring-vis, 0)' }}
```
**Why:** Some CSS properties (notably `opacity`) silently ignore `calc()` when set via React's inline style object. The browser accepts the assignment but computes nothing. Pre-calculate in JS, inject as a ready number.

### TRAP 3: No Cursor-Following Visual Elements
```
❌ <div style={{ transform: `translate3d(${mouseX}px, ${mouseY}px, 0)` }} className="blur-[80px]" />
✅ card.style.setProperty('--border-glow', `${proximity * 0.55}`)
```
**Why:** Large blurred divs positioned at cursor coordinates "bleed" beyond `overflow:hidden` boundaries, creating an unwanted "aura" around the cursor. The cursor should have ZERO visual footprint. Only the card's own properties react.

### TRAP 4: Guard Against Zeroed Rects
```typescript
const rect = card.getBoundingClientRect();
if (rect.width === 0 && rect.height === 0) return; // Skip unmounted/hidden cards
```
**Why:** During page load, scroll animations, or when cards are off-screen, rects may be zeroed. Without this guard, all cards would falsely compute max proximity.

---

## Telemetry Integration (Lorena)
Each card exposes `data-proximity-score` (0.0000 to 1.0000) on every frame. To collect:

```typescript
// Periodic sampling (every 2 seconds)
setInterval(() => {
    const cards = document.querySelectorAll('[data-proximity-score]');
    const scores = Array.from(cards).map((c, i) => ({
        card: i,
        score: parseFloat((c as HTMLElement).dataset.proximityScore || '0'),
        timestamp: Date.now(),
    }));
    // POST to /api/telemetry
    fetch('/api/telemetry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'proximity_field', source: 'omnipresence', scores }),
    });
}, 2000);
```

---

## Files Using This Pattern
- `components/Marketing/ProblemSection.tsx` — 3 problem cards (radius: 280px)
- `components/Marketing/PricingSection.tsx` — 4 pricing cards (radius: 320px)

## Commit Reference
- Milestone: `843b2ab` — "Omnipresence Proximity Field Engine"
- Date: 2026-04-01
