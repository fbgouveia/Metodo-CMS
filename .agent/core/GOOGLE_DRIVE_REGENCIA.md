# GOOGLE DRIVE — REGÊNCIA UNIVERSAL EUvc
> Por que EUvc deve governar o Google Drive
> Baseado em revisão completa de D:\ em 2026-03-21
> Última atualização: 2026-03-21 por Claude Sonnet 4.6

---

## POR QUÊ — ANÁLISE COMPLETA DE D:\

Após revisar todos os projetos de D:, a necessidade é clara:

### 1. Alma e Leis do Império precisam de nuvem soberana
```
D:\00_SISTEMA_SOBERANO\NEGATIVITY_CORE\ALMA.md    ← alma do Império
D:\AgentHub\core\*.md                              ← 18 leis globais
D:\REGENCIA_UNIVERSAL\AGENTS\ (20+ agentes)        ← cérebro operacional
D:\REGENCIA_UNIVERSAL\SKILLS\ (40+ skills)         ← capacidades do Império
```
**Risco atual:** existem apenas em D:. Se D: falhar → Império perde o cérebro.
**Drive resolve:** acesso de qualquer máquina, qualquer IA, qualquer servidor.

### 2. Memória de Lorena e Clara precisa de recuperação cloud
```
D:\01_CONSCIENCIA\Lorena\memory\   ← memória intelectual
D:\01_CONSCIENCIA\Clara\memory\    ← memória emocional/vendas
D:\Lorena\memory\                  ← backup local
D:\Clara\memory\                   ← backup local
```
**Risco atual:** se reconstruir servidor, Lorena e Clara começam do zero.
**Drive resolve:** restauração imediata de identidade e memória.

### 3. Projetos de produção ativos precisam de entrega cloud
```
D:\02_PRODUCAO\PORTFOLIO_FGSS\     ← portfolio Felipe
D:\THELMA GOUVEIA\                 ← cliente ativo
D:\felipegouveia\Artwork\          ← assets de design
D:\felipegouveia\Portfolio\        ← trabalhos para clientes
```
**Necessidade:** compartilhar entregas com clientes sem enviar por WhatsApp.

### 4. Telemetria precisa de Drive para Looker Studio
```
D:\AgentHub\telemetry\*.csv        ← métricas do Império
```
**Looker Studio só lê de Google Drive** — sem Drive, sem dashboard live.

### 5. n8n + Workflows precisam de fonte de dados cloud
```
D:\n8n-workflows\n8n-templates\    ← automações do Império
```
**n8n pode ler de Google Sheets/Drive** — automações mais poderosas.

### 6. Projetos familiares e pessoais
```
D:\Quiteria Gouveia\               ← projeto familiar
D:\COURSES\                        ← cursos e aprendizado
D:\VIDASEMTELA\                    ← projeto pessoal
```

---

## ESTRUTURA SOBERANA DO DRIVE

```
GDrive:\EUvc\
├── 00_ALMA\
│   ├── ALMA.md
│   ├── CEREBRO.md
│   └── core_laws\ (18 leis)
│
├── 01_INTELIGENCIA\
│   ├── AGENTS\ (20+ agentes)
│   └── SKILLS\ (40+ skills)
│
├── 02_MEMORIA\
│   ├── lorena\
│   └── clara\
│
├── 03_PRODUCAO\
│   ├── portfolio_fgss\
│   └── assets\
│
├── 04_CLIENTES\
│   ├── thelma_gouveia\
│   └── _template_cliente\
│
├── 05_TELEMETRIA\
│   └── auditoria_d.csv  ← Looker Studio aponta aqui
│
├── 06_INFRA\
│   ├── AgentHub_scripts\
│   └── n8n_workflows\
│
└── 07_PESSOAL\
    ├── quiteria\
    └── cursos\
```

---

## IMPLEMENTAÇÃO — 3 FASES

### FASE 1 — Hoje (manual, 10 minutos)
1. Instalar **Google Drive Desktop** (drive.google.com/drive/download)
2. Pasta a sincronizar: `D:\AgentHub\telemetry\` → `GDrive:\EUvc\05_TELEMETRIA\`
3. Criar Dashboard no Looker Studio (lookerstudio.google.com) apontando para o CSV
4. Resultado: telemetria ao vivo no browser

### FASE 2 — Esta semana (rclone automático)
```powershell
# Instalar rclone
winget install Rclone.Rclone

# Configurar remote Google Drive (interativo — abre browser)
rclone config

# Sync automático (adicionar ao Task Scheduler)
rclone sync D:\AgentHub\core\            gdrive:EUvc/00_ALMA/
rclone sync D:\REGENCIA_UNIVERSAL\AGENTS gdrive:EUvc/01_INTELIGENCIA/AGENTS/
rclone sync D:\REGENCIA_UNIVERSAL\SKILLS gdrive:EUvc/01_INTELIGENCIA/SKILLS/
rclone sync D:\AgentHub\telemetry\       gdrive:EUvc/05_TELEMETRIA/
```

### FASE 3 — Automação completa
- Task Scheduler: sync a cada 6h + após cada commit git
- `retroalimentacao.ps1`: verificar sync Drive como etapa final
- Lorena/Clara: memory sync diário às 03:00 com backup D→F→Drive

---

## REGRAS DA REGÊNCIA

1. **Drive é leitura para IAs** — escrevem local, sincronizam para Drive
2. **Drive é fonte para Looker Studio** — telemetria somente por Drive
3. **Drive é entrega para clientes** — links compartilháveis, não anexos
4. **Drive não substitui D:** — D: é primário, Drive é cloud layer
5. **ALMA.md sempre sincronizada** — nunca pode faltar na nuvem

---

## PRÓXIMO PASSO IMEDIATO

```
Felipe: instala Google Drive Desktop + autentica conta Google
         → sincroniza D:\AgentHub\telemetry\
         → abre lookerstudio.google.com
         → conecta no CSV
         → dashboard live em 10 minutos
```

Script de setup automático: `D:\AgentHub\scripts\setup_drive_regencia.ps1`
