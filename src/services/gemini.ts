/**
 * CLARA INTELLIGENCE BRIDGE (GEMINI 1.5 FLASH - FREE TIER)
 * 
 * Este serviço integra os resultados do Quiz com a Inteligência Artificial do Google.
 * Ele transforma as 10 respostas brutas em um "Dossier da Clara" que será enviado
 * para o WhatsApp, permitindo que a Clara saiba tudo sobre a usuária.
 */

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

export interface QuizResult {
    answers: string[];
    cluster: 'FISICO' | 'MENTAL' | 'VIDA';
}

export const generateClaraDossier = async (quizData: QuizResult) => {
    if (!GEMINI_API_KEY) {
        console.warn("VITE_GEMINI_API_KEY não configurada. Usando fallback estático.");
        return null;
    }

    const prompt = `
    VOCÊ É A CLARA, ESTRATEGISTA NEURAL DA DRA. QUITÉRIA GOUVEIA.
    
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
        const response = await fetch(GEMINI_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("Erro ao falar com o cérebro da Clara:", error);
        return null;
    }
};
