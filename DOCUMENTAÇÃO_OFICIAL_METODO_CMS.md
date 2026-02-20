# 🧠 Documentação Master: Ecossistema Método CMS V2 & Clara V3

## 1. 🎯 Visão Estratégica
O **Método Cérebro em Modo Silencioso (CMS)** Versão 2 não é apenas um site institucional; é um **Funil de Vendas Baseado em Neuropersuasão**. Todo o ecossistema foi projetado para reduzir a resistência cognitiva de pessoas com alto nível de ansiedade e pânico, conduzindo-as de um estado de confusão para uma decisão de compra sensata.

### 🧠 Princípios de Neuromarketing Aplicados
- **Escuta Ativa via IA:** O usuário sente-se ouvido e compreendido (vínculo terapêutico).
- **Inversão de Categoria:** O curso é apresentado como "Resgate de Vida", não como "Despesa".
- **Fogg Behavior Model:** Reduzimos a dificuldade da ação (Quiz simples) e aumentamos a motivação com prova social e autoridade da Dra. Quitéria.

---

## 2. �️ Arquitetura Técnica Detalhada

### 💻 Stack de Tecnologia
- **React 18 (Vite):** Framework para uma interface ultra-rápida (essencial para não gerar ansiedade por carregamento).
- **TypeScript:** Garante a integridade dos dados e evita bugs em produção.
- **Tailwind CSS 3.4:** Design totalmente responsivo e customizado.
- **GSAP & Framer Motion:** Micro-animações que guiam o olhar e criam uma sensação de "fluidez neural".
- **Google Gemini 2.0-Flash:** O "Cérebro" por trás da Clara, oferecendo respostas empáticas com latência mínima.

### 📁 Estrutura de Pastas (Principais)
- `/src/components`: Componentes visuais e lógicos.
- `/src/services`: Conectores de API (ex: `gemini.ts`).
- `/public`: Ativos estáticos e o arquivo de configuração do cérebro da IA.
- `/scripts`: Ferramentas de teste e automação para desenvolvedores.

---

## 3. 🤖 O Ecossistema "Clara" (IA Strategist)

A Clara é o coração do projeto. Ela atua em três frentes sincronizadas:

### A. Clara Chat (Site)
- **Componente:** `ClaraChat.tsx`
- **Função:** Atendimento inicial, triagem de emergência e coleta de dossiê.
- **Lógica de "Observação":** Ela monitora o que o usuário faz no Quiz através do `window.sendClaraMessage`.

### B. O Cérebro Mestre (`clara_master_brain.md`)
Este arquivo é o **System Prompt** estendido. Ele define:
- **Identidade:** Diagnosticadora de Almas, assistente da Dra. Quitéria.
- **Protocolo de Segurança:** Se detectar intenções suicidas, trava o chat e redireciona para o CVV (Regra Zero).
- **Protocolo de Transição:** Quando o usuário pede um humano, a Clara prepara o terreno, gerencia a expectativa de tempo e passa o bastão para a Quitéria no WhatsApp.

### C. Script de Resgate WhatsApp (`SCRIPT_WHATSAPP_CLARA_V3.md`)
- Define as sequências de mensagens para converter leads que chegam do site.
- Foca em mensagens de 15min, 6h e 24h para reverter o silêncio do prospect.

---

## 4. 🧬 O Neural Quiz (Máquina de Diagnóstico)

### 📊 Funcionamento
O `NeuralQuiz.tsx` mapeia o usuário em 10 passos. Cada resposta é classificada em um de três clusters:
1.  **FISICO:** Pessoas que sentem a ansiedade no corpo (peito, respiração).
2.  **MENTAL:** Pensamentos que não param, exaustão mental.
3.  **VIDA:** Impacto social, no trabalho e na autonomia.

### 📝 O Dossiê Neural
Ao final, o serviço `gemini.ts` pega as respostas e gera um **Dossiê Personalizado**. Este texto é:
- Mostrado ao usuário como um espelho de sua dor.
- Enviado para a Clara (memória).
- Enviado via WhatsApp no link de conversão.

---

## 5. 🎨 Design Neuroestético & UX

### Elementos Visuais
- **Paleta de Cores:** Tons de Azul Safira e Branco Neve (Serenidade e Limpeza).
- **Tipografia:** Serifas elegantes para títulos (Autoridade) e Sans-serif limpo para leitura (Facilidade).
- **Animações de Blobs:** As manchas azuis no fundo (`App.tsx`) criam um ambiente calmo e "orgânico".

### Componentes de Influência
- `TransformationJourney.tsx`: Linha do tempo que mostra o antes (caos) e o depois (paz).
- `TriplePricing.tsx`: Ancoragem de preço comparativa (Curso vs Mentoria VIP).
- `GuaranteeSection.tsx`: Inversão de risco total (Satisfação ou Reembolso).

---

## 6. 🛡️ Segurança & Manutenção

### Variáveis de Ambiente (`.env.local`)
O projeto utiliza o prefixo `VITE_` para carregar as chaves com o Vite:
- `VITE_GEMINI_API_KEY`: A chave mestre do motor de IA.

### Proteção Anti-Vazamento
O arquivo `.gitignore` bloqueia:
- Arquivos `.env`
- Scripts de teste manuais que contenham chaves fixas.
- Pastas de mídia pesada.

### Como atualizar a Inteligência
Para mudar o comportamento da Clara, basta editar o arquivo `public/clara_master_brain.md`. O componente `ClaraChat.tsx` lê este arquivo dinamicamente a cada sessão.

---

## 7. 📈 Fluxo de Conversão (O Caminho do Cliente)
1. **Entrada:** O usuário chega pela Hero ou IntroHook.
2. **Acolhimento:** A Clara pergunta: "Quer silenciar o medo?"
3. **Mapeamento:** O usuário faz o Neural Quiz.
4. **Verdade:** O Gemini gera o Dossiê e a Clara valida.
5. **Decisão:** O usuário é direcionado para a Mentoria VIP (WhatsApp) ou Curso Completo (Checkout).
6. **Resgate:** Se ele parar em qualquer ponto, os scripts de WhatsApp entram em ação.

---
*Documentação gerada e validada pelo Agente Master Persuader para garantir a máxima intencionalidade de conversão do Método CMS.*
