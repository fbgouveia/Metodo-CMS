# Plano de Aprimoramento: Clara — A Máquina de Vendas Invisível

Este plano detalha as mudanças para tornar a Clara menos óbvia, mais fluida e acolhedora, utilizando princípios de neuropersuasão.

## 1. Redesign do Ponto de Entrada (ClaraChat.tsx)
- **De:** Menu de vendas imediato ("O que você busca hoje? [Mentoria] [Curso]").
- **Para:** Pergunta aberta/acolhedora ("Como você está se sentindo agora?").
- **Objetivo:** Iniciar pela dor (Sistema 1) em vez do produto (Sistema 2).

## 2. Refinamento do "Brain" (clara_master_brain.md)
- **Integração do Modelo Fogg (B=MAP):**
    - **Diagnóstico de Motivação:** Identificar se o usuário quer apenas um "remédio rápido" ou uma mudança real.
    - **Diagnóstico de Capacidade:** Entender a urgência vs. tempo disponível.
- **Inserção de Metaphors (Metáforas de Alta Fidelidade):**
    - *Exemplo:* "A ansiedade é como um alarme de incêndio que dispara com o vapor do chuveiro. O Método CMS ensina a ajustar a sensibilidade do sensor."
- **Protocolo de Não-Obviedade:**
    - Proibido enviar links antes de pelo menos 3 trocas de mensagens, a menos que solicitado explicitamente.

## 3. Lógica de Perfilamento (Socratic Sales)
- Clara deve fazer "perguntas de espelhamento" (Mirroring).
- Clara deve usar a técnica do "Rótulo" (Labeling) para validar sentimentos ("Parece que você sente que perdeu o controle...").

## 4. Atualização Técnica (ClaraChat.tsx)
- Atualizar o System Prompt injetado na chamada do Gemini para refletir a nova persona.
- Ajustar os "Quick Replies" iniciais para serem focados em sintomas/sentimentos ("Não aguento mais a ansiedade", "Tenho medo de pânico").

## 5. Verificação e Testes
- Testar com o script `test_clara.py` simulando um cliente resistente.
- Auditar a saída com as regras do `master-persuader.md`.

---
*Status: Aguardando aprovação para execução.*
