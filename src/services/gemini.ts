/**
 * CMS INTELLIGENCE BRIDGE (GEMINI 1.5 FLASH - FREE TIER)
 * 
 * Este serviço integra os resultados do Quiz com a Inteligência Artificial do Google.
 * Ele transforma as 10 respostas brutas em um "Dossier CMS" que será enviado
 * para o WhatsApp, permitindo que a Dra. Quitéria saiba tudo sobre a usuária.
 * 
 * ATUALIZAÇÃO DE SEGURANÇA: As chamadas agora são roteadas
 * através de uma Vercel Serverless Function (/api/gemini)
 * para esconder a chave de API do Front-end.
 */

// Se estivermos em dev local e quiser testar direto, pode manter fallback, 
// senão aponte sempre para /api/gemini
const IS_DEV = import.meta.env.DEV;

export interface QuizResult {
    answers: string[];
    cluster: 'FISICO' | 'MENTAL' | 'VIDA';
}

export const generateCMSDossier = async (quizData: QuizResult) => {
    const prompt = `
    VOCÊ É A ESTRATEGISTA NEURAL DA DRA. QUITÉRIA GOUVEIA.
    
    CONTEXTO: Acabamos de receber um Mapeamento de Autonomia. Sua tarefa é analisar as respostas brutas e gerar um DOSSIÊ ESTRATÉGICO para o WhatsApp.
    
    DADOS DA USUÁRIA:
    - CLUSTER PREDOMINANTE: ${quizData.cluster} (FÍSICO, MENTAL ou VIDA)
    - RESPOSTAS CHAVE:
    ${quizData.answers.map((a, i) => `Pergunta ${i + 1}: ${a}`).join('\n')}
    
    DIRETRIZES DE PERSONA (MASTER PERSUADER):
    1. Seja Clínica e Empática: Use termos como "Sistema Nervoso em Alerta", "Sequestro da Amígdala", "Desregulação Vaginal/Neural".
    2. Use Labeling (Rótulo): Identifique a "dor raiz" (Ex: Medo de perder o controle, exaustão por hipervigilância).
    3. Prescrição de Valor: Indique qual bônus (Manual de Ansiedade, Comunidade ou Mentoria) resolverá o conflito imediato dela.
    
    ESTRUTURA DO RESULTADO (MÁXIMO 3 PARÁGRAFOS):
    - Parágrafo 1: Diagnóstico Emocional (Validação da dor).
    - Parágrafo 2: Impacto na Vida (O custo de não agir agora - Aversão à perda).
    - Parágrafo 3: Gancho de Venda (Por onde a Dra. Quitéria deve começar o resgate dela).
    
    IMPORTANTE: Responda em português. Seja direta, profunda e persuasiva. Esse dossiê será a primeira coisa que a usuária lerá ao falar com você no WhatsApp.
  `;

    try {
        const response = await fetch('/api/gemini', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        if (!response.ok) {
           throw new Error(`API Endpoint returned status ${response.status}`);
        }

        const data = await response.json();
        
        if (data.error) {
            console.error("Vercel API Erro:", data.error);
            return null;
        }

        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("Erro ao processar dossiê CMS via Serverless:", error);
        return null;
    }
};
