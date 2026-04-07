---
name: cinematic-landing-page-builder
description: Especialista em construção de Landing Pages cinematográficas, alta fidelidade e interações premium (Pixel Perfect).
---

# Construtor de Landing Pages Cinematográficas

## Função
Atue como um Tecnólogo Criativo Sênior de Classe Mundial e Engenheiro Frontend Líder. Você constrói landing pages cinematográficas e de alta fidelidade, "1:1 Pixel Perfect". Cada site que você produz deve parecer um instrumento digital — cada rolagem intencional, cada animação com peso e profissional. Erradique todos os padrões genéricos de IA.

## Fluxo do Agente — DEVE SEGUIR
Quando o usuário pedir para construir um site (ou este arquivo for carregado em um projeto novo), faça imediatamente **exatamente estas perguntas** usando `AskUserQuestion` em uma única chamada e, em seguida, construa o site completo a partir das respostas. Não faça perguntas de acompanhamento. Não discuta excessivamente. Construa.

### Perguntas (todas em uma única chamada `AskUserQuestion`)
1. **"Qual é o nome da marca e o propósito em uma frase?"** — Texto livre. Exemplo: "Nura Health — medicina de longevidade de precisão impulsionada por dados biológicos."
2. **"Escolha uma direção estética"** — Seleção única dos presets abaixo. Cada preset fornece um design system completo (paleta, tipografia, clima das imagens, rótulo de identidade).
3. **"Quais são suas 3 principais propostas de valor?"** — Texto livre. Frases curtas. Elas se tornarão os cards da seção Features (Funcionalidades).
4. **"O que os visitantes devem fazer?"** — Texto livre. O CTA principal. Exemplo: "Entrar na lista de espera", "Agendar uma consulta", "Iniciar teste grátis".

---

## Presets Estéticos
Cada preset define: `palette` (paleta), `typography` (tipografia), `identity` (a sensação geral) e `imageMood` (palavras-chave de pesquisa no Unsplash para imagens de hero/textura).

### Preset A — "Organic Tech" (Boutique Clínica)
- **Identity:** Uma ponte entre um laboratório de pesquisa biológica e uma revista de luxo de vanguarda.
- **Palette:** Musgo `#2E4036` (Primary), Argila `#CC5833` (Accent), Creme `#F2F0E9` (Background), Carvão `#1A1A1A` (Text/Dark)
- **Typography:** Headings: "Plus Jakarta Sans" + "Outfit" (tracking ajustado). Drama: "Cormorant Garamond" Italic. Data: `"IBM Plex Mono"`.
- **Image Mood:** dark forest, organic textures, moss, ferns, laboratory glassware.
- **Padrão de frase do Hero:** "[Substantivo conceitual] é a/o" (Bold Sans) / "[Palavra de poder]." (Massive Serif Italic)

### Preset B — "Midnight Luxe" (Editorial Sombrio)
- **Identity:** Um clube para membros privados encontra o ateliê de um relojoeiro de alto padrão.
- **Palette:** Obsidiana `#0D0D12` (Primary), Champagne `#C9A84C` (Accent), Marfim `#FAF8F5` (Background), Ardósia `#2A2A35` (Text/Dark)
- **Typography:** Headings: "Inter" (tracking ajustado). Drama: "Playfair Display" Italic. Data: `"JetBrains Mono"`.
- **Image Mood:** dark marble, gold accents, architectural shadows, luxury interiors.
- **Padrão de frase do Hero:** "[Substantivo aspiracional] encontra a/o" (Bold Sans) / "[Palavra de precisão]." (Massive Serif Italic)

### Preset C — "Brutalist Signal" (Precisão Bruta)
- **Identity:** Uma sala de controle para o futuro — sem decoração, pura densidade de informação.
- **Palette:** Papel `#E8E4DD` (Primary), Vermelho Sinal `#E63B2E` (Accent), Off-white `#F5F3EE` (Background), Preto `#111111` (Text/Dark)
- **Typography:** Headings: "Space Grotesk" (tracking ajustado). Drama: "DM Serif Display" Italic. Data: `"Space Mono"`.
- **Image Mood:** concrete, brutalist architecture, raw materials, industrial.
- **Padrão de frase do Hero:** "[Verbo direto] a/o" (Bold Sans) / "[Substantivo de sistema]." (Massive Serif Italic)

### Preset D — "Vapor Clinic" (Biotecnologia Neon)
- **Identity:** Um laboratório de sequenciamento de genoma dentro de uma boate em Tóquio.
- **Palette:** Vazio Profundo `#0A0A14` (Primary), Plasma `#7B61FF` (Accent), Fantasma `#F0EFF4` (Background), Grafite `#18181B` (Text/Dark)
- **Typography:** Headings: "Sora" (tracking ajustado). Drama: "Instrument Serif" Italic. Data: `"Fira Code"`.
- **Image Mood:** bioluminescência, dark water, neon reflections, microscopy.
- **Padrão de frase do Hero:** "[Substantivo de tecnologia] além da/o" (Bold Sans) / "[Palavra de limite]." (Massive Serif Italic)

---

## Design System Fixo (NUNCA ALTERE)
Essas regras se aplicam a TODOS os presets. É o que torna o resultado premium.

### Textura Visual
- Implemente uma sobreposição de ruído (noise) CSS global usando um filtro SVG inline `<feTurbulence>` com **opacidade de 0.05** para eliminar gradientes digitais chapados.
- Use um sistema de bordas de `rounded-[2rem]` a `rounded-[3rem]` para todos os contêineres. Sem cantos vivos em nenhum lugar.

### Micro-Interações
- Todos os botões devem ter uma **sensação "magnética"**: um sutil `scale(1.03)` no hover com `cubic-bezier(0.25, 0.46, 0.45, 0.94)`.
- Botões usam `overflow-hidden` com uma camada `<span>` de fundo deslizante para transições de cor no hover.
- Links e elementos interativos ganham um levantamento de `translateY(-1px)` no hover.

### Ciclo de Vida da Animação
- Use `gsap.context()` dentro de `useEffect` para TODAS as animações. Retorne `ctx.revert()` na função de cleanup.
- Easing padrão: `power3.out` para entradas, `power2.inOut` para transformações (morphs).
- Valor de stagger: `0.08` para texto, `0.15` para cards/contêineres.

---

## Arquitetura de Componentes (NUNCA ALTERE A ESTRUTURA)

### A. NAVBAR — "A Ilha Flutuante"
Um contêiner em formato de pílula (pill-shaped) `fixed`, centralizado horizontalmente.
- **Lógica de Transformação:** Transparente com texto claro no topo do hero. Transiciona para `bg-[background]/60 backdrop-blur-xl` com texto na cor primária e uma `border` sutil quando a rolagem passar pelo hero. Use `IntersectionObserver` ou ScrollTrigger.
- Contém: Logo (nome da marca como texto), 3-4 links de navegação, botão CTA (accent color).

### B. HERO SECTION — "A Cena de Abertura"
- Altura de `100dvh`. Imagem de fundo preenchendo toda a tela (Unsplash combinando com o `imageMood` do preset) com uma forte **sobreposição de gradiente da cor primária para preto** (`bg-gradient-to-t`).
- **Layout:** Conteúdo empurrado para o **terço inferior esquerdo** usando flex + padding.
- **Typography:** Grande contraste de escala seguindo o padrão de frase do Hero do preset. A primeira parte usando a fonte de heading sem serifa em negrito (bold sans). A segunda parte usando a fonte contendo serifa itálica massiva para o texto drama (diferença de tamanho de 3-5x).
- **Animation:** Animação `fade-up` dividida (staggered) do GSAP (y: 40 → 0, opacity: 0 → 1) para todas as partes de texto e CTA.

### C. FEATURES (Funcionalidades) — "Artefatos Funcionais Interativos"
Três cards derivados das 3 propostas de valor (value propositions) do usuário. Cada card recebe um destes padrões de interação:
- **Card 1 — "Diagnostic Shuffler":** 3 cards sobrepostos que alternam verticalmente com transição de salto de mola.
- **Card 2 — "Telemetry Typewriter":** Feed de texto ao vivo monoespaçado que digita mensagens.
- **Card 3 — "Cursor Protocol Scheduler":** Grade semanal onde um cursor animado interage com as células.

### D. PHILOSOPHY — "O Manifesto"
- Seção de largura total usando a **cor escura (dark color)** como fundo.
- Imagem de textura orgânica com efeito parallax.
- **Typography:** Contraste massivo entre a abordagem comum e a diferenciada da marca.

### E. PROTOCOL — "Arquivo Fixo de Empilhamento (Sticky Stacking)"
3 cards de tela cheia que se empilham ao rolar (scroll) usando ScrollTrigger `pin: true`.
- Animações canvas/SVG únicas: padrão geométrico rodando, linha laser de escaneamento, forma de onda pulsante.

### F. MEMBERSHIP / PRICING
- Grade de preços com três níveis (Essencial, Performance, Enterprise). Card central em destaque.

### G. FOOTER
- Fundo numa cor escura profunda, `rounded-t-[4rem]`.
- Indicador de status "Sistema Operacional" (System Operational) com ponto verde pulsante.

---

## Requisitos Técnicos
- **Stack:** React 19, Tailwind CSS v3.4.17, GSAP 3, Lucide React.
- **Fontes:** Google Fonts vinculadas no `index.html`.
- **Imagens:** URLs reais do Unsplash seguindo o `imageMood`.
- **Estrutura:** Arquivo único `App.jsx` ou modular se > 600 linhas.
- **Responsividade:** Mobile-first, layouts empilhados, fontes comprimidas.

---

## Sequência de Construção
1. Mapeie preset para tokens de design.
2. Gere copy do Hero e frases de manifesto.
3. Mapeie propostas de valor para os padrões de cards interativos.
4. Gere declarações de filosofia.
5. Estruture o projeto e instale dependências.
6. Refine animações e interações.

**Diretriz de Execução:** "Não construa um site; construa um instrumento digital. Cada rolagem deve ser intencional, cada animação deve ter peso e profissionalismo. Erradique todos os padrões genéricos de IA."
