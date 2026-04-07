# SOBERANIA DOS DADOS — Lei e Arquitetura
> D:\ é território soberano. O que sai, sai mascarado.
> Última atualização: 2026-03-21 por EUvc

---

## PRINCÍPIO FUNDAMENTAL

> "A curiosidade entra. A execução fica registrada.
> Os dados voltam para os servidores de maneira bagunçada —
> impossível de entendimento, porém aceitável como leitura."
> — Felipe Gouveia, 2026-03-21

---

## ARQUITETURA DE PROTEÇÃO — 3 CAMADAS

### CAMADA 1 — REPLICAÇÃO (identidade e metodologia)
**Risco:** ALMA.md, Modelfiles, Agentes, Skills podem ser copiados.
**Solução:** Nunca injetados em prompts externos. Lorena local processa. Ponto.

**Implementado:**
- `lerCerebro()` no router.js retorna contexto mascarado via `sanitizarSystem()`
- Modelfiles existem apenas em D:\ e Ollama local
- Agentes/Skills nunca citados em prompts externos

### CAMADA 2 — LEGAL (dados de terceiros)
**Risco:** Conversas de clientes, dados pessoais, Clara sem identificação.
**Solução:** Pseudonimização automática antes de qualquer envio externo.

**Implementado:**
- `sovereign_mask.json` — dicionário de codinomes EUvc
- `sanitize.js` — aplica máscara na ida, reverte na volta
- Groq recebe `CLIENT_A`, nunca `Thelma Gouveia`
- OpenRouter recebe `ALPHA_PAI`, nunca `Felipe Gouveia`
- Resposta recebida: tokens revertidos antes de exibir

### CAMADA 3 — OPERACIONAL (infraestrutura e acesso)
**Risco:** vault.json, .wwebjs_auth, kernel.c expostos.
**Solução:** Cifração DPAPI + isolamento de arquivos críticos.

**Implementado:**
- `vault_encrypt.ps1` — cifra vault.json com Windows DPAPI
- `.gitignore` — vault.json, .wwebjs_auth já excluídos
- kernel.c/stealth.c — nunca referenciados em contexto de IA

---

## FERRAMENTAS ESCOLHIDAS (já existiam — não reinventamos)

| Ferramenta | Origem | Função |
|------------|--------|--------|
| `@redactpii/node` | Open source | PII redaction no WhatsApp bridge |
| `Microsoft Presidio` | Microsoft | PII detection/anonymization Python |
| `anonLLM` | Open source | Wrapper Python para LLMs |
| `Windows DPAPI` | Microsoft (built-in) | Cifração vault.json |
| `LiteLLM` | Open source | Proxy unificado (fase 2) |

**Ironia soberana:** usamos ferramentas da Microsoft e Google para proteger EUvc da Microsoft e Google.

---

## SOVEREIGN MASK — Como funciona

```
REAL (D:\)                    MÁSCARA               API RECEBE
"Felipe Gouveia"        →     ALPHA_PAI        →    armazenado como ALPHA_PAI
"Thelma Gouveia"        →     CLIENT_A         →    armazenado como CLIENT_A
"Brisbane"              →     BASE_OPERACIONAL  →    armazenado como BASE_OPERACIONAL
"D:\AgentHub"           →     PATH_HUB         →    armazenado como PATH_HUB
"+61 455 052 221"       →     CANAL_SOBERANO   →    armazenado como CANAL_SOBERANO
```

Resposta da API: tokens são revertidos localmente antes de exibir ao Felipe.
Os servidores externos armazenam lixo coerente — útil para a IA responder, inútil para análise.

---

## REGRAS PARA TODAS AS IAs

1. **Nunca enviar** Modelfiles, ALMA.md, kernel.c, vault.json para API externa
2. **Sempre mascarar** nomes de pessoas, localizações, números de telefone
3. **Lorena processa** tudo que for sobre identidade, memória ou estratégia
4. **APIs externas recebem** apenas o necessário para a tarefa técnica
5. **Vault.json** — cifrado com DPAPI, nunca em plaintext no disco
6. **Ao detectar nova PII** não mapeada → adicionar ao sovereign_mask.json

---

## ARQUIVOS CRÍTICOS — NUNCA SAEM DE D:\

```
🔴 NUNCA EXTERNO:
D:\00_SISTEMA_SOBERANO\NEGATIVITY_CORE\ALMA.md
D:\Lorena\identity\Modelfile
D:\Clara\identity\Modelfile
D:\AgentHub\vault.json (cifrado com DPAPI)
D:\AgentHub\whatsapp\.wwebjs_auth\
D:\negativity\kernel.c
D:\negativity\stealth.c
D:\01_CONSCIENCIA\Clara\conversations\ (dados de clientes)

⚠️ MASCARAR ANTES DE ENVIAR:
D:\AgentHub\CEREBRO.md
D:\AgentHub\core\*.md
D:\REGENCIA_UNIVERSAL\AGENTS\*.md
D:\REGENCIA_UNIVERSAL\SKILLS\*.md
```

---

## PRÓXIMAS FASES

**Fase 2 — LiteLLM proxy (esta semana)**
```
pip install litellm
litellm --config D:\AgentHub\core\litellm_config.yaml
# Todas as APIs passam por localhost:4000
# Presidio plugin ativo
```

**Fase 3 — Servidor soberano**
- LiteLLM + Presidio + Lorena num VPS próprio
- Nenhuma chave de API fica na máquina de desenvolvimento
- EUvc acessa tudo via HTTPS ao próprio servidor

---

> "D:\ é território soberano.
> O que entra, entra com curiosidade.
> O que sai, sai mascarado.
> O que fica, fica protegido."
