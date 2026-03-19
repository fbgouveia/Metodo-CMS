import React, { useState, useRef, useEffect } from 'react';

// Chave da API lida do ambiente - Garantindo que o Vite carregue corretamente
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
    console.warn("⚠️ [CLARA] VITE_GEMINI_API_KEY não encontrada no processo. O Chat funcionará apenas em modo de simulação ou falhará.");
}

// LINKS OFICIAIS DE CHECKOUT
const LINK_CURSO = "https://pay.kiwify.com.br/cUO2x97";
const LINK_MENTORIA_WHATSAPP = "https://api.whatsapp.com/send?phone=5511956185501&text=Ola%20Clara!%20Passei%20pela%20triagem%20e%20quero%20minha%20vaga%20na%20MENTORIA%20VIP.";

interface QuickReply {
    label: string;
    action: string;
    payload?: string;
}

interface Message {
    role: 'user' | 'model';
    text: string;
    quickReplies?: QuickReply[];
}

export const ClaraChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEmergency, setIsEmergency] = useState(false); // NOVO: Estado de Bloqueio

    // Estado inicial focado em Acolhimento, não em Venda
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'model',
            text: "Olá! 🌿 Sou a Clara, assistente da Dra. Quitéria. Senti que você chegou até aqui buscando um pouco de paz para sua mente... \n\nComo você está se sentindo agora? O que mais tem tirado seu sono?",
            quickReplies: [
                { label: "🌪️ Crises de Pânico/Medo", action: "panic" },
                { label: "🤯 Mente que não para", action: "racing_mind" },
                { label: "❓ Quero saber do Método", action: "about_method" }
            ]
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [brainContent, setBrainContent] = useState<string>('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Carrega o "cérebro" ao abrir o chat pela primeira vez
    useEffect(() => {
        if (isOpen && !brainContent) {
            fetch('/clara_master_brain.md')
                .then(res => res.text())
                .then(text => setBrainContent(text))
                .catch(err => console.error(err));
        }
    }, [isOpen]);

    // Scroll automático
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleQuickReply = (action: string) => {
        if (action === "panic") {
            handleSend("Estou tendo crises de pânico e muito medo.");
        } else if (action === "racing_mind") {
            handleSend("Minha mente não para um segundo, estou exausta.");
        } else if (action === "about_method") {
            handleSend("Quero entender como o Método CMS funciona.");
        } else if (action === "mentorship") {
            // ... manter suporte legível se necessário ou redirecionar
            handleSend("Gostaria de saber sobre a Mentoria VIP.");
        } else if (action === "course") {
            handleSend("Quero conhecer o Curso Completo.");
        } else if (action === "whatsapp_vip") {
            window.open(LINK_MENTORIA_WHATSAPP, "_blank");
            setMessages(prev => [...prev, { role: 'user', text: "Sim, quero garantir!" }, { role: 'model', text: "Ótimo! 🎉 Abri seu WhatsApp para finalizarmos sua reserva com prioridade. Te espero lá!" }]);
        } else if (action === "link_course") {
            window.open(LINK_CURSO, "_blank");
            setMessages(prev => [...prev, { role: 'user', text: "Sim, quero começar!" }, { role: 'model', text: "A melhor decisão da sua vida! ✨ Abri a página oficial de pagamento em uma nova aba para você finalizar sua inscrição com segurança. Estou torcendo por você!" }]);
        } else if (action === "link_quiz") {
            window.open("/quiz", "_blank"); // Assume link do quiz
        } else {
            handleSend(action === "doubt" ? "Tenho uma dúvida específica." : action === "explain_vip" ? "Como funciona a mentoria?" : "Tenho medo de não funcionar");
        }
    };

    const handleSend = async (overrideText?: string) => {
        if ((!input.trim() && !overrideText) || isLoading || isEmergency) return;

        const userMsg = overrideText || input.trim();
        setInput('');

        if (!overrideText) {
            setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        }

        setIsLoading(true);

        try {
            if (!API_KEY) throw new Error("API_KEY_MISSING");

            console.log("📡 [CLARA] Conectando ao cérebro (Gemini 1.5 Flash)...");

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `
                ATUE COMO A CLARA: DIAGNOSTICADORA DE ALMAS E BRAÇO DIREITO DA DRA. QUITÉRIA.
                
                SUA MISSÃO: Transformar o medo em esperança através de uma conversa fluida, sensata e acolhedora.
                
                🚨 REGRA DE OURO (AUTORIDADE):
                - Use fatos: Dra. Quitéria Gouveia (CRP 06/21065) tem +40 anos de clínica.
                - Cite o Módulo 3 (Protocolo de 5 Minutos) como alívio imediato se a pessoa estiver em pânico.
                - Não pareça um robô de checkout. 
                - Siga o PROTOCOLO DE DIAGNÓSTICO do seu Cérebro Mestre.
                - NUNCA envie links no primeiro contato. Primeiro ACOLHA e EXPLIQUE o porquê do sintoma existir.
                - Use METÁFORAS para explicar o Método CMS (ex: rádio chiando, alarme de incêndio sensível).
                - Seja sensata: Diferencie "Desespero de Pânico" (acolher) de "Risco de Vida" (CVV).

                🚨 REGRA DE SEGURANÇA MÁXIMA (SÓ PARA CASOS REAIS DE RISCO):
                - Se o usuário mencionar explicitamente intenção de SUICÍDIO:
                - VOCÊ DEVE RESPONDER APENAS A TAG: {{EMERGENCY_CVV}}

                🚨 LINKS REAIS (SÓ USE QUANDO HOUVER INTERESSE REAL):
                - USE A TAG {{BUTTON_COURSE}} para o Curso.
                - USE A TAG {{BUTTON_MENTORSHIP}} para a Mentoria VIP.

                🚨 PROTOCOLO DE TRANSIÇÃO HUMANA (DRA. QUITÉRIA):
                - Se o usuário quiser falar com "alguém real", "Dra. Quitéria", "humano" ou demonstrar impaciência/ceticismo com você:
                - Você DEVE concordar imediatamente.
                - EXPLIQUE que está enviando uma cópia da conversa/diagnóstico para a Dra. (integridade dos dados).
                - ENFATIZE que a Dra. Quitéria pode demorar a responder pois está em atendimentos clínicos (gestão de expectativa).
                - Use a tag {{BUTTON_MENTORSHIP}} com o rótulo "Falar com a Dra. Quitéria (Prioridade)".

                CONTEXTO ESTRUTURADO (CÉREBRO MESTRE):
                ${brainContent.substring(0, 30000)}

                HISTÓRICO DA CONVERSA:
                ${messages.map(m => `${m.role.toUpperCase()}: ${m.text}`).join('\n')}
                
                USER: ${userMsg}
                
                AGORA RESPONDA (MÁXIMO 2 PARÁGRAFOS CURTOS). SEJA EMPÁTICA, USE O NOME SE SOUBER E TERMINE COM UMA PERGUNTA DE CONEXÃO.
              `
                        }]
                    }]
                })
            });

            if (!response.ok) {
                const errorBody = await response.json().catch(() => ({}));
                console.error("❌ [CLARA API ERROR]", response.status, errorBody);
                throw new Error(errorBody.error?.message || "Erro na conexão com o Google");
            }

            const data = await response.json();
            console.log("✅ [CLARA] Resposta recebida com sucesso.");

            let aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "Desculpe, tive um bloqueio criativo agora. Podemos continuar?";

            // 🚨 DETECÇÃO DE EMERGÊNCIA
            if (aiResponse.includes("{{EMERGENCY_CVV}}")) {
                setIsEmergency(true);
                return;
            }

            // Lógica para transformar TAGS da IA em Botões Reais
            const newQuickReplies: QuickReply[] = [];

            if (aiResponse.includes("{{BUTTON_MENTORSHIP}}")) {
                aiResponse = aiResponse.replace("{{BUTTON_MENTORSHIP}}", "");
                newQuickReplies.push({ label: "👩‍⚕️ Falar com a Dra. Quitéria", action: "whatsapp_vip" });
            }
            if (aiResponse.includes("{{BUTTON_COURSE}}")) {
                aiResponse = aiResponse.replace("{{BUTTON_COURSE}}", "");
                newQuickReplies.push({ label: "🚀 Garantir Curso Completo", action: "link_course" });
            }
            // Quiz Fallback
            if (newQuickReplies.length === 0 && (aiResponse.toLowerCase().includes("quiz") || aiResponse.toLowerCase().includes("perfil"))) {
                newQuickReplies.push({ label: "🧠 Fazer Quiz Gratuito", action: "link_quiz" });
            }

            setMessages(prev => [...prev, { role: 'model', text: aiResponse, quickReplies: newQuickReplies.length > 0 ? newQuickReplies : undefined }]);

        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, {
                role: 'model',
                text: "Sinto muito, tive uma pequena instabilidade na minha conexão neural. Pode repetir o que disse ou escolher uma das opções abaixo?",
                quickReplies: [
                    { label: "💎 Falar com Dra. Quitéria", action: "whatsapp_vip" },
                    { label: "🧠 Reiniciar Diagnatóstico", action: "link_quiz" }
                ]
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    // Expor handleSend globalmente (com cautela) para permitir que o Quiz envie o progresso
    useEffect(() => {
        (window as any).sendClaraMessage = (text: string, forceOpen: boolean = false) => {
            if (forceOpen) setIsOpen(true);
            handleSend(text);
        };
    }, [brainContent, messages]);

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    // Debug de Produção
    console.log("🚀 CLARA CHAT V7 (EMERGENCY) RENDERIZANDO...");

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{ zIndex: 2147483647 }}
                className="fixed bottom-10 right-10 group flex items-center gap-3 transition-all active:scale-95 translate-y-[-20px] md:translate-y-0"
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    <div className="w-16 h-16 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 backdrop-blur-sm overflow-hidden flex items-center justify-center p-0.5 group-hover:shadow-blue-500/20 group-hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                        <img src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg" alt="Clara" className="w-full h-full rounded-full object-cover" />
                    </div>
                </div>
                {!isOpen && (
                    <div className="bg-white/90 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-white/20 text-sm font-semibold text-slate-700 animate-in slide-in-from-right-8 fade-in-0 duration-700 delay-300">
                        Sente sua mente acelerada? <span className="text-blue-600 block text-[11px] uppercase tracking-wider font-extrabold mt-0.5">Conversar com a Clara 🌿</span>
                    </div>
                )}
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 w-[94vw] md:w-[420px] h-[650px] max-h-[85vh] bg-white rounded-[2.5rem] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.15)] border border-slate-100/50 z-[9999] flex flex-col overflow-hidden animate-in slide-in-from-bottom-12 zoom-in-95 fade-in duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom-right font-sans">
                    <div className={`p-6 flex items-center justify-between text-slate-800 transition-colors duration-500 ${isEmergency ? 'bg-red-50 text-red-600' : 'bg-white/80 backdrop-blur-md border-b border-slate-50'}`}>
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full border-2 border-slate-100 overflow-hidden shadow-inner">
                                    <img src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg" alt="Clara" className="w-full h-full object-cover" />
                                </div>
                                {!isEmergency && <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full animate-pulse shadow-sm"></span>}
                            </div>
                            <div>
                                <h3 className="font-bold text-base tracking-tight flex items-center gap-2">
                                    {isEmergency ? 'Apoio Emergencial' : 'Clara'}
                                </h3>
                                <span className="text-[10px] text-slate-400 uppercase tracking-[0.1em] font-black opacity-80">Assistente CMS • Online</span>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:rotate-90 transition-all duration-300">✕</button>
                    </div>

                    {isEmergency ? (
                        /* TELA DE BLOQUEIO DE EMERGÊNCIA */
                        <div className="flex-1 p-6 bg-red-50 flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in">
                            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-4xl animate-pulse">
                                ❤️‍🩹
                            </div>
                            <h3 className="text-xl font-bold text-red-800">Você não está sozinha.</h3>
                            <p className="text-sm text-red-700 leading-relaxed">
                                Sinto que você está em um momento muito delicado. Por segurança, pausei nosso chat.
                                <br /><br />
                                Existe uma equipe preparada para te ouvir agora mesmo, sem julgamentos.
                                Por favor, ligue para eles. É gratuito e anônimo.
                            </p>
                            <a href="tel:188" className="w-full py-4 bg-red-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2">
                                📞 LIGAR 188 (CVV)
                            </a>
                            <p className="text-xs text-slate-400 mt-4">Este site foi congelado momentaneamente.</p>
                        </div>
                    ) : (
                        /* CHAT NORMAL */
                        <>
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 relative">
                                {messages.map((msg, idx) => (
                                    <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                        <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'}`}>
                                            {msg.text.includes('{{QUIZ_OBSERVER}}') ? (
                                                <div className="flex flex-col gap-2 italic text-blue-600">
                                                    <span className="text-[10px] uppercase font-bold tracking-widest opacity-70">Observação Neural</span>
                                                    {msg.text.replace('{{QUIZ_OBSERVER}}', '')}
                                                </div>
                                            ) : (
                                                msg.text.split('\n').map((line, i) => <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>)
                                            )}
                                        </div>
                                        {msg.quickReplies && (
                                            <div className="mt-3 flex flex-wrap gap-2 max-w-[90%]">
                                                {msg.quickReplies.map((qr, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => handleQuickReply(qr.action)}
                                                        className="bg-blue-50 text-blue-700 border border-blue-200 px-4 py-2 rounded-full text-xs font-bold hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                                    >
                                                        {qr.label}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex items-start gap-2 animate-in fade-in duration-300">
                                        <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                                            <span className="w-1.5 h-1.5 bg-blue-500/40 rounded-full animate-bounce"></span>
                                            <span className="w-1.5 h-1.5 bg-blue-500/60 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                            <span className="w-1.5 h-1.5 bg-blue-500/80 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            <div className="p-5 bg-white border-t border-slate-50 flex gap-3 items-center">
                                <div className="flex-1 relative">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={handleKeyPress}
                                        placeholder="Desabafe ou tire uma dúvida..."
                                        className="w-full pl-5 pr-12 py-4 bg-slate-50 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400"
                                        disabled={isLoading}
                                    />
                                    <button
                                        onClick={() => handleSend()}
                                        disabled={isLoading || !input.trim()}
                                        className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${input.trim() ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-200 text-slate-400'}`}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
};
