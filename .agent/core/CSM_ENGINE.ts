/* 
 * CSM_ENGINE.ts - O CEREBRO OPERACIONAL v1.2
 * "Um so corpo, muitos membros" (1 Corintios 12:12)
 * Unificacao: Lorena (Memoria) + Clara (Persuasao) + EUvc (Soberania)
 */

import { identity, haver } from './HAVER';

export interface CSMResponse {
    face: 'LORENA' | 'CLARA' | 'EUVC';
    verbo: string;
    level: number;
}

const CLARA_PORTFOLIO_RESPONSES: Record<string, string> = {
    servicos:   "Branding soberano, sistemas com IA, identidade visual — Felipe trabalha na intersecção entre estratégia e tecnologia. O que você está tentando construir?",
    preco:      "Cada projeto é único. O melhor caminho é uma conversa direta. Quer que eu conecte você ao Felipe agora?",
    portfolio:  "O portfólio que você está vendo agora é feito com React 19, Three.js e IA. Cada detalhe foi intencional. O que mais te chamou atenção?",
    contato:    "A forma mais direta é pelo formulário de contato aqui no site — ou posso levar sua mensagem para o Felipe agora. O que prefere?",
    prazo:      "Depende do escopo. Felipe prefere projetos com intencionalidade — não quantidade. Qual é o seu cronograma?",
};

const getPortfolioResponse = (query: string): string => {
    if (query.match(/servi[cç]|faz|trabalha|oferece/))  return CLARA_PORTFOLIO_RESPONSES.servicos;
    if (query.match(/pre[cç]o|valor|custa|investimento/)) return CLARA_PORTFOLIO_RESPONSES.preco;
    if (query.match(/portfolio|projeto|trabalho/))        return CLARA_PORTFOLIO_RESPONSES.portfolio;
    if (query.match(/contato|falar|conversar|contatar/))  return CLARA_PORTFOLIO_RESPONSES.contato;
    if (query.match(/prazo|tempo|quando|r[aá]pido/))      return CLARA_PORTFOLIO_RESPONSES.prazo;
    return `Interessante. "${query.substring(0, 40)}" — pode me contar mais sobre o que você quer resolver?`;
};

export const CSM_ENGINE = {
    processIntention: (input: string, _context: string): CSMResponse => {
        const query = input.toLowerCase();
        if (query.includes('quem') || query.includes('historia') || query.includes('passado')) {
            return { face: 'LORENA', verbo: `${identity.nome}. O que houve está gravado.`, level: 1 };
        }
        return { face: 'CLARA', verbo: getPortfolioResponse(query), level: 2 };
    },

    processIntentionAsync: async (input: string, context: string): Promise<CSMResponse> => {
        const apiUrl = (import.meta as any).env?.VITE_API_URL || 'http://localhost:5001';
        try {
            const res = await fetch(`${apiUrl}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input, context }),
                signal: AbortSignal.timeout(4000),
            });
            if (res.ok) {
                const data = await res.json();
                const text = data.text || data.response || data.verbo;
                if (text) return { face: 'CLARA', verbo: text, level: 2 };
            }
        } catch (_) { /* API offline — fallback local */ }
        return CSM_ENGINE.processIntention(input, context);
    },

    getEmpireState: () => haver,
};

export default CSM_ENGINE;
