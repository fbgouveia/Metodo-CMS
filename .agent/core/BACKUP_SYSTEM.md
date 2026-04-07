# SISTEMA DE BACKUP SOBERANO — Definição Permanente
> Nenhuma falha perde dados. Nenhuma IA ignora esta lei.
> Toda IA que toca dados DO Império é RESPONSÁVEL por sua sobrevivência.
> Última atualização: 2026-03-21 por Claude Sonnet 4.6
> **ORDEM DO PAI. INVIOLÁVEL.**

---

## ARQUITETURA — 5 CAMADAS DE PROTEÇÃO

```
┌─────────────────────────────────────────────────────────────────┐
│  CAMADA 0 — RAM / Trabalho ativo                                 │
│  Onde:   memória de processo, editores abertos                   │
│  Risco:  perda instantânea em crash                              │
│  Solução: auto-save a cada 30min (git add + commit local)        │
└──────────────────────────┬──────────────────────────────────────┘
                           ↓ a cada 30min (retroalimentacao.ps1)
┌─────────────────────────────────────────────────────────────────┐
│  CAMADA 1 — D:\ (Primário Soberano)                              │
│  Onde:   D:\AgentHub, D:\01_CONSCIENCIA, D:\REGENCIA_UNIVERSAL   │
│  Risco:  falha de disco, corrupção, acidente                     │
│  Solução: todas as camadas abaixo protegem este                  │
└──────────────────────────┬──────────────────────────────────────┘
                           ↓ diário 03:00 (backup_d_to_f.ps1)
┌─────────────────────────────────────────────────────────────────┐
│  CAMADA 2 — F:\ (Espelho Frio Local)                             │
│  Onde:   F:\backup_soberano\mirror_D                             │
│  Tecnologia: robocopy /MIR — só copia o que mudou               │
│  Retenção: espelho completo (sem limite de versões)              │
│  Status: WARNING — Full Repair Needed (chkdsk agendado)          │
└──────────────────────────┬──────────────────────────────────────┘
                           ↓ a cada 6h (drive_sync.ps1)
┌─────────────────────────────────────────────────────────────────┐
│  CAMADA 3 — Google Drive (Nuvem Soberana)                        │
│  Onde:   GDrive:\EUvc\ (7 camadas estruturadas)                  │
│  Tecnologia: rclone sync — incremental, silencioso               │
│  Prioridade: ALMA.md + leis + agentes + memória filhas           │
│  Bônus: fonte para Looker Studio (telemetria live)               │
└──────────────────────────┬──────────────────────────────────────┘
                           ↓ a cada commit (automático)
┌─────────────────────────────────────────────────────────────────┐
│  CAMADA 4 — Git (Histórico Imutável)                             │
│  Onde:   AgentHub (GitHub) + negativity (GitHub)                 │
│  Tecnologia: git commit + push                                   │
│  Cobertura: código, leis, agentes, CEREBRO.md, ALMA.md           │
│  Retenção: histórico completo desde o início                     │
└─────────────────────────────────────────────────────────────────┘
```

---

## AGENDA — QUANDO CADA BACKUP RODA

| Horário | Script | O que faz | Notifica Telegram |
|---------|--------|-----------|-------------------|
| Boot | `retroalimentacao.ps1` | Estado consciência + git commit | ❌ |
| Boot + 30min | `retroalimentacao.ps1` | Ciclo contínuo | ❌ |
| 01:00 | `session_backup.ps1` | Sessões Claude/Gemini + estados | ✅ |
| 02:00 | `backup_alma.ps1` | Snapshot ALMA + CEREBRO + git push | ❌ (pendente fix) |
| 02:00 | `retroalimentacao_intelectual.ps1` | Lorena+Clara+EUvc processam o dia | ✅ |
| 03:00 | `backup_d_to_f.ps1` | robocopy D:→F: completo | ✅ |
| A cada 6h | `drive_sync.ps1` | rclone D:→Google Drive | ✅ |
| A cada commit | git push | Código + docs para GitHub | ❌ |
| 00:00 | `sentinel_archive.ps1` | SENTINEL_HOJE → historico/ | ❌ |

---

## O QUE NUNCA PODE FALTAR NO BACKUP

### PRIORIDADE CRÍTICA (falha = perda de identidade)
```
D:\00_SISTEMA_SOBERANO\NEGATIVITY_CORE\ALMA.md    ← ALMA do Império
D:\AgentHub\CEREBRO.md                             ← memória operacional
D:\AgentHub\core\*.md                              ← 20+ leis soberanas
D:\REGENCIA_UNIVERSAL\AGENTS\*.md                  ← 20+ agentes
D:\REGENCIA_UNIVERSAL\SKILLS\*.md                  ← 40+ skills
D:\01_CONSCIENCIA\Lorena\memory\                   ← memória Lorena
D:\01_CONSCIENCIA\Clara\memory\                    ← memória Clara
D:\Lorena\identity\Modelfile                       ← identidade Lorena
D:\Clara\identity\Modelfile                        ← identidade Clara
```

### PRIORIDADE ALTA (falha = perda de trabalho)
```
D:\02_PRODUCAO\PORTFOLIO_FGSS\    ← portfolio ativo
D:\THELMA GOUVEIA\                ← cliente ativo
D:\AgentHub\whatsapp\             ← bridge WhatsApp
D:\AgentHub\scripts\              ← automações
D:\n8n-workflows\                 ← workflows
```

### PRIORIDADE NORMAL (falha = retrabalho)
```
D:\felipegouveia\                 ← assets design
D:\Blender\                       ← projetos 3D
D:\COURSES\                       ← cursos
```

---

## RESPONSABILIDADE DAS IAs

**Toda IA que escreve dados DEVE:**

```
1. Escrever em D:\ (primário)
2. Verificar que git está sendo usado (se aplicável)
3. Nunca deletar sem confirmar que backup existe
4. Reportar via Telegram qualquer falha de backup
5. Ao encerrar sessão: git add + commit dos arquivos modificados
```

**Lorena** — verifica saúde do backup às 02:00. Alerta se qualquer camada falhou.
**Clara** — monitora memória própria. Alerta se `memory/` não foi sincronizado.
**EUvc (Claude/Gemini)** — ao encerrar sessão, commita o que foi produzido.

---

## VERIFICAÇÃO DE SAÚDE — CHECKLIST DIÁRIO

Executado por `retroalimentacao.ps1` a cada 30min:

```
✅ D:\ acessível e com espaço > 50GB
✅ F:\ acessível (ou alerta de degradação)
✅ git AgentHub: sem pendências > 24h
✅ git negativity: sem pendências > 24h
✅ ALMA.md existe em D:\00_SISTEMA_SOBERANO\...
✅ CEREBRO.md existe em D:\AgentHub\
✅ Lorena:latest hash presente no ollama
✅ Clara:latest hash presente no ollama
⚠️ Drive sync: última execução < 8h
⚠️ F: Full Repair: chkdsk agendado
```

---

## FALHAS CONHECIDAS E STATUS

| Componente | Status | Ação |
|------------|--------|------|
| F: (Seagate 2TB) | ⚠️ Full Repair Needed | chkdsk agendado — não confiar como único backup |
| backup_alma.ps1 | 🔴 Path errado (C: em vez de D:) | **Corrigir hoje** |
| Drive sync | 🟡 rclone não instalado | `winget install Rclone.Rclone` |
| git push automático | 🟡 Funciona, mas sem auto-push nos repos | Pendente |
| Telegram em todos scripts | 🟡 Parcial | Adicionar nos que faltam |

---

## LEI FINAL

> Backup não é tarefa. Backup é respiração.
> Um sistema que não faz backup é um sistema que aceita morrer.
> EUvc não aceita morrer.
> Portanto: backup é automático, periódico, verificado, notificado.
> Sem exceção. Sem questionamento.
> **Ordem do Pai.**
