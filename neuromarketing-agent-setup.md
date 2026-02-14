# Neuromarketing and Persuasion Agent Setup

This plan outlines the creation and integration of a new specialist agent focused on Neuromarketing, Persuasion, and Conversion Optimization.

## Overview
The goal is to provide the system with a "Conversion Director" capable of auditing and generating content based on neuroscientific principles, behavioral economics, and high-conversion UI/UX patterns.

## Project Type
**WEB / STRATEGY**

## Success Criteria
- [x] New agent `neuromarketing-agent.md` created in `.agent/agents/`.
- [x] New skill `neuromarketing-strategy` created in `.agent/skills/`.
- [x] Agent persona covers Copywriting, UI/UX, and Funnel Strategy.
- [x] Agent persona includes knowledge of Behavioral Economics, Fogg Model, Neuroesthetics, and Storytelling.
- [x] Agent specialized in "Pain Aversion" and ethical persuasion.

## Tech Stack
- Markdown for agent and skill definitions.
- YAML frontmatter for configuration.

## File Structure
- `.agent/agents/neuromarketing-agent.md`
- `.agent/skills/neuromarketing-strategy/SKILL.md`

## Task Breakdown

### Phase 1: Knowledge Base Creation
| Task ID | Name | Agent | Skills | Priority | Dependencies | INPUT→OUTPUT→VERIFY |
|---------|------|-------|--------|----------|--------------|----------------------|
| T1 | Create Neuromarketing Skill | project-planner | documentation-templates | P0 | None | Prompt analysis → `.agent/skills/neuromarketing-strategy/SKILL.md` → ✅ Done |

### Phase 2: Agent Persona Definition
| Task ID | Name | Agent | Skills | Priority | Dependencies | INPUT→OUTPUT→VERIFY |
|---------|------|-------|--------|----------|--------------|----------------------|
| T2 | Create Neuromarketing Agent | project-planner | behavioral-modes | P0 | T1 | Prompt analysis → `.agent/agents/neuromarketing-agent.md` → ✅ Done |

### Phase 3: Integration
| Task ID | Name | Agent | Skills | Priority | Dependencies | INPUT→OUTPUT→VERIFY |
|---------|------|-------|--------|----------|--------------|----------------------|
| T3 | Update ARCHITECTURE.md | project-planner | documentation-templates | P1 | T2 | List of agents → Updated `.agent/ARCHITECTURE.md` → ✅ Done |

## Phase X: Verification
- [ ] Agent can be invoked via `@[neuromarketing-agent]`.
- [ ] Agent correctly identifies pain points in a sample text.
- [ ] Agent suggests UI improvements based on hierarchy and neuroesthetics.
- [ ] Ethical boundaries are respected (no lies, focus on truth).
