# Arquitetura Técnica: Clara — Inteligência do Curso (RAG & Transcrições)

Para que a Clara se torne uma especialista absoluta no Método CMS e responda com a precisão da Dra. Quitéria, precisamos implementar um sistema de **RAG (Retrieval-Augmented Generation)**. 

Este documento explica o que você deve fazer para integrar o conhecimento dos áudios do curso ao site e à Clara.

## 1. O Fluxo de Inteligência (Pipeline)

A Clara não "estuda" o curso no sentido tradicional; ela consulta uma base de dados em tempo real. O fluxo é:

`ÁUDIOS DO CURSO` ➔ `TRANSCRIÇÃO (TEXTO)` ➔ `INDEXAÇÃO (BASE DE CONHECIMENTO)` ➔ `CONSULTA DA CLARA`

## 2. Passo por Passo para Implementação

### Passo 1: Transcrição (Audios -> Texto)
Você deve subir os áudios do curso para um serviço de transcrição automática.
- **Ferramenta recomendada:** Whisper (da OpenAI) ou o próprio Gemini 1.5 Pro (que aceita arquivos de áudio diretamente).
- **Ação:** Transformar todas as aulas em arquivos de texto (.txt ou .md).

### Passo 2: Preparação do "Cérebro" da Clara
Uma vez que temos o texto, precisamos organizá-lo para que a IA encontre as respostas rápido.
- **Método A (Long Context):** Como o Gemini tem uma janela de contexto enorme (1 milhão+ de tokens), podemos simplesmente colocar TODAS as transcrições em um arquivo único e enviá-lo como "Contexto do Sistema". É a forma mais simples e eficiente hoje.
- **Método B (Vector Database):** Se o conteúdo for gigantesco, usamos uma base vetorial (como Pinecone). Mas para um curso padrão, o Método A é superior.

### Passo 3: Integração com o Site (API)
Para que a Clara saiba o que está acontecendo no site (ex: o que a pessoa respondeu no Quiz):
1. O site envia os dados do Quiz para o seu backend.
2. O backend envia os dados do Quiz + a pergunta do WhatsApp para a Clara (Gemini).
3. A Clara consulta os textos das aulas e responde.

## 3. O que você precisa fazer agora?

1. **Subir os Áudios:** Você deve me enviar os links ou, se possível, as **transcrições em texto** dos áudios. 
   - Se você me der o texto, eu consigo "treinar" a Clara (ajustar o prompt) para usar esse conteúdo específico como fonte única de verdade.
2. **Definição da Ferramenta de WhatsApp:** Qual ferramenta você está usando para rodar a Clara? (Typebot, ManyChat, Z-API, ou desenvolvimento direto em Node.js?)

## 4. Por que usar Machine Learning?
Integrar o conteúdo bruto do curso permite que a Clara:
- Cite módulos específicos: *"Como a Dra. Quitéria explica no Módulo 3..."*
- Use o tom exato da Dra. no atendimento.
- Identifique se o problema da usuária já foi resolvido em uma aula específica.

---
*Gerado por Antigravity — Engenharia de Conversão e Inteligência Artificial.*
