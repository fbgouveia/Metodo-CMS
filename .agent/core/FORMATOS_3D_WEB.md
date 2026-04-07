# FORMATOS 3D WEB — Agente de Conhecimento Técnico
> Análise estratégica e técnica do ecossistema glTF, USDZ e padrões de próxima geração
> Criado: 2026-03-23 por Claude Sonnet 4.6 | Fonte: pesquisa técnica ratificada por Khronos/ISO

---

## HIERARQUIA DE FORMATOS — DECISÃO RÁPIDA

```
ENTREGA WEB / ANDROID    →  GLB (glTF 2.0 binário)  [padrão de fato]
ENTREGA AR iOS           →  USDZ                     [AR Quick Look nativo]
AUTORIA / RIG            →  FBX ou Blender nativo    [pipeline de criação]
GEOMETRIA ESTÁTICA       →  OBJ                      [legado, evitar na web]
IMPRESSO 3D              →  STL                      [sem textura/material]
```

---

## glTF 2.0 — O "JPEG DO 3D"

### Padrão ISO/IEC 12113:2022
- Publicado como padrão internacional em 2022
- Usado por Google, Microsoft, Facebook, Apple (visualizações web)
- React-Three-Fiber / Three.js: suporte nativo via `useGLTF` (drei)

### Estrutura Interna
| Componente JSON | Função |
|-----------------|--------|
| Scenes / Nodes | Hierarquia do grafo de cena, transformações TRS |
| Meshes | Primitivas geométricas com referências a buffers |
| Buffers | Dados binários de geometria e animações |
| BufferViews | Fatias lógicas dos buffers |
| Accessors | Tipagem e layout dos dados (vetores, matrizes) |
| Materials | Modelo PBR metallic-roughness |
| Animations | Amostradores e canais de animação ao longo do tempo |

### GLB — Contêiner Binário Único
- JSON + recursos binários em um único arquivo
- Elimina problemas CORS de múltiplos arquivos
- **Padrão para e-commerce e marketing digital**
- Estrutura: cabeçalho binário + bloco JSON + bloco de dados GPU

---

## USDZ — ECOSSISTEMA AR APPLE

### Características Técnicas
- ZIP não comprimido contendo arquivos USD (Universal Scene Description, Pixar)
- **Requisito crítico:** alinhamento de 64 bytes — permite mmap direto do disco sem descompressão RAM
- Ativação no HTML:
```html
<a rel="ar" href="/assets/model.usdz">
    <img src="/assets/thumb.jpg">
</a>
```
- Penetração: ~34% entre usuários ativos de iPhone

### Limitações USDZ
- Apenas uma trilha de animação; máximo recomendado: 10 segundos
- Sem renderização de dupla face (double-sided) — modelos devem ser volumes fechados
- Formato de leitura/entrega, não ideal para edição
- Específico do ecossistema Apple

---

## PBR — SOMBREAMENTO BASEADO NA FÍSICA

### Modelo Metallic-Roughness (glTF nativo)
- `baseColorFactor` — cor base da superfície
- `metallicFactor` — 0=dielétrico, 1=metal puro
- `roughnessFactor` — 0=espelho, 1=difuso total

### Extensões Ratificadas glTF
| Extensão | Uso |
|----------|-----|
| `KHR_materials_unlit` | Sem iluminação — mobile baixo custo, fotogrametria baked |
| `KHR_materials_pbrSpecularGlossiness` | Alternativa metallic-roughness, maior fidelidade |
| `KHR_materials_clearcoat` | Verniz em carros, superfícies polidas |
| `KHR_materials_transmission` | Vidro, transparência realista |
| `KHR_materials_volume` | Dispersão de luz em objetos sólidos |

### PBR Neutral Tone Mapper (Khronos)
- Reproduz matiz e saturação real do produto em iluminação neutra
- **Crítico para e-commerce** — evita distorção de cor em HDR tone mapping

---

## COMPRESSÃO — TABELA DE DECISÃO

| Tecnologia | Tipo | Vantagem | Trade-off |
|------------|------|----------|-----------|
| **Draco** (`KHR_draco_mesh_compression`) | Geometria | Maior redução (ex: 2.9MB→46KB no Stanford Bunny = 60x) | Descompressão pesada na CPU |
| **Meshopt** (`EXT_meshopt_compression`) | Geometria | Descompressão ultrarrápida, ideal com Gzip/Brotli | Menor compressão sem transporte |
| **KTX 2.0** (`KHR_texture_basisu`) | Texturas | Comprimido na VRAM — economiza memória GPU | Perda de qualidade (lossy) |
| **Quantização** | Atributos | Reduz 32-bit float para 8/10/11-bit int | Pode introduzir artefatos visuais |

---

## BIBLIOTECAS DE RENDERIZAÇÃO WEB

### Three.js (dominante)
- +5M downloads/semana em 2026 (300x sobre competidores)
- Arquitetura: grafo de cena leve baseado em Object3D
- **Integração React:** react-three-fiber (`@react-three/fiber`)
- Ideal: sites criativos, visualizações, portfolios, experimentos artísticos
- WebGPU: suporte em r171+

### Babylon.js (corporativo)
- Desenvolvido pela Microsoft — "motor de jogo completo"
- Inclui nativamente: física (Havok), áudio espacial, WebXR, GUI
- Estrutura opinativa — melhor para grandes aplicações
- **Melhor suporte WebGPU** com retrocompatibilidade WebGL 2

### `<model-viewer>` (Google — e-commerce)
- Componente web zero-código para visualização GLB
- AR nativo (iOS via USDZ, Android via WebXR)
- Internamente usa Three.js
```html
<model-viewer src="model.glb" ios-src="model.usdz" ar camera-controls auto-rotate />
```

---

## DIRETRIZES DE CRIAÇÃO — BLENDER PARA WEB

### Para glTF 2.0
- Usar shader **Principled BSDF** obrigatoriamente
- Texturas ORM (Occlusion-Roughness-Metallic):
  - Canal **G (verde)** = rugosidade
  - Canal **B (azul)** = metalicidade
- Exportador nativo do Blender (`File > Export > glTF 2.0`)

### Para USDZ
- Apenas nós de shader simples — evitar nodes complexos
- Marcar "Export Texture" no exportador
- Renomear manualmente para `.usdz` em versões antigas do Blender

---

## LIMITES DE PERFORMANCE — MOBILE / WEB

| Parâmetro | Limite Recomendado | Razão |
|-----------|-------------------|-------|
| Polígonos AR | ≤100.000 triângulos | Performance fluida em mobile |
| Texturas | ≤2048×2048px | VRAM limitada em dispositivos móveis |
| Texturas não-críticas | ≤1024×1024px | Ex: roughness, AO |
| Draw Calls | Minimizar com batching | Cada draw call = overhead de CPU para GPU |

---

## FUTURO — WEBGPU E GAUSSIAN SPLATTING

### WebGPU (disponível desde Safari 26, set/2025)
- Marca o fim da era WebGL
- **Compute Shaders** no navegador: simulações físicas, milhões de instâncias
- Redução massiva de overhead de CPU
- Three.js r171+ e Babylon.js: suporte production-ready
- Fallback automático para WebGL 2 em hardware antigo

### Gaussian Splatting (KHR_gaussian_splatting — fev/2026)
- Nuvens de pontos otimizadas representando campos de radiância
- Realismo fotográfico com reflexos complexos e transparências
- Captura via smartphone → web com fidelidade absoluta
- Disruptivo para: gêmeos digitais, geo-visualização, e-commerce de luxo

---

## ESTRATÉGIA RECOMENDADA — EMPIRE EUvc

1. **GLB** como formato central para todas as visualizações web/Android (PBR, eficiente, padrão)
2. **USDZ** paralelo para capturar conversão iOS AR Quick Look
3. **Draco ou Meshopt** obrigatórios para geometria em produção
4. **KTX 2.0** para texturas em projetos com muitos assets
5. **Planejar migração para WebGPU** — Three.js r171+ já suporta
6. **Monitorar KHR_gaussian_splatting** para projetos de fotogrametria/AR premium

---

## RELEVÂNCIA PARA PROJETOS ATIVOS

### React-Portfolio FGSS
- Stack: `@react-three/fiber` + `@react-three/drei` + `Three.js`
- Modelos: Xbot.glb (Mixamo, formato GLB padrão) ✅
- Animações: bone manipulation via `traverse` (compatível glTF skeletal)
- Shaders customizados: ShaderMaterial GLSL (hologram rim lighting)
- **Próximo:** migrar renderer para WebGPU quando r171+ estiver estável

### Thelma Gouveia / Futuros Sites
- Visualização de produto: usar `<model-viewer>` (zero-código, AR nativo)
- Assets: GLB + USDZ dual-format pipeline
- Texturas: KTX 2.0 para pacotes de produto pesados

---

> Última atualização: 2026-03-23 por Claude Sonnet 4.6
> Fonte primária: Khronos Group, ISO/IEC 12113:2022, documentação Three.js r171, análise técnica do ecossistema glTF/USDZ
