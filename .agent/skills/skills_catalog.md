# CATÁLOGO DE SKILLS — AgentHub fbgou

## Skills Nativas (Claude Code CLI)

| Skill | Comando | Descrição |
|-------|---------|-----------|
| commit | /commit | Git commit inteligente com mensagem automática |
| simplify | /simplify | Revisão e simplificação de código alterado |
| loop | /loop [interval] [cmd] | Executar tarefa recorrente em intervalo |
| claude-api | /claude-api | Construir apps com Anthropic SDK |
| keybindings-help | /keybindings-help | Customizar atalhos de teclado |
| review-pr | /review-pr [número] | Revisar Pull Request |
| pdf | /pdf | Processar arquivos PDF |

## Agentes Especializados (Claude Code Agent tool)

| Tipo | Uso |
|------|-----|
| general-purpose | Tarefas complexas multi-step, pesquisa |
| Explore | Exploração rápida de codebase |
| Plan | Arquitetura e planejamento de implementação |
| claude-code-guide | Dúvidas sobre Claude Code / API |
| statusline-setup | Configurar status line |

## Ferramentas MCP Disponíveis
- **openrouter**: Acesso ao NVIDIA Nemotron via OpenRouter API

## Delegação ao @nvidia
Tarefas indicadas para delegação:
- [ ] Geração de textos longos (>500 tokens output)
- [ ] Análise de grandes volumes de código
- [ ] Sumarização de documentos extensos
- [ ] Processamento de dados repetitivo
- [ ] Tarefas que não exigem decisão arquitetural
