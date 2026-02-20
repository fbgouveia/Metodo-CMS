# Plano de Auditoria: Projeto Clara & Método CMS 🌿

Auditando o sistema para garantir estabilidade técnica, excelência em design e poder de persuasão.

## 📋 Status Atual
- **Clara:** Silenciosa/Desconexa no navegador (Possível erro de modelo/API/CORS).
- **Design:** Implementação inicial do estilo circular/Apple.
- **Copy:** Conteúdo existente focado no Método CMS.

---

## 🏗️ Fase 1: Diagnóstico Técnico (Agent: @debugger)
- [ ] **Investigar Gemini API:**
    - Testar `gemini-1.5-flash-latest` vs `gemini-2.0-flash`.
    - Verificar logs de rede para erros 404, 401 ou CORS.
    - Validar carregamento do `clara_master_brain.md`.
- [ ] **Rastreio de Conexão:**
    - Inserir logs estratégicos em `src/components/ClaraChat.tsx` para monitorar o payload enviado e recebido.

## 🎨 Fase 2: Design & UX Mastery (Agent: @frontend-specialist)
- [ ] **Refino Visual da Clara:**
    - Ajustar sombras (`drop-shadow` vs `shadow-lg`) para profundidade premium.
    - Revisar animações de entrada (`animate-in scale-in`).
    - Garantir que o botão flutuante não cubra elementos vitais em telas menores (Mobile Audit).
- [ ] **Micro-interações:**
    - Adicionar feedback tátil nos Quick Replies.
    - Melhorar o estado de "Digitando..." para parecer mais humano.

## 🏹 Fase 3: Persuasão & Copy (Agent: @master-persuader)
- [ ] **Fluxo do WhatsApp:**
    - Revisar `SCRIPT_WHATSAPP_CLARA_V3.md` buscando gatilhos de **Aversão à Perda** e **Contabilidade Mental**.
    - Garantir que a transição para a Dra. Quitéria seja ancorada em escassez de tempo.
- [ ] **Revisão da Homepage:**
    - Auditar os textos principais sob a ótica de Neuroestética.
    - Verificar se os "rótulos de dor" estão sendo usados corretamente no front-end.

## 🏁 Fase 4: Auditoria Final (Agent: @orchestrator)
- [ ] **Checklist de Qualidade:**
    - Rodar `python .agent/scripts/checklist.py .`.
    - Verificar acessibilidade e performance (Web Vitals).
- [ ] **Entrega do Relatório:**
    - Documentar melhorias implementadas em `auditoria_clara_final.md`.

---

## 🛠️ Ferramentas Utilizadas
- Scripts: `checklist.py`, `ux_audit.py`
- Skills: `neuromarketing-strategy`, `frontend-design`, `systematic-debugging`
