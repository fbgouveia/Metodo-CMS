import React, { useState, useRef, useEffect } from 'react';

// Chave da API (hardcoded para MVP, em produção deve ir para .env)
const API_KEY = "AIzaSyCBP8fazffYUFoJQAcaCLRYkMVu78osq7w";

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
    // Estado inicial com Botões de Triagem (Typebot style)
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'model',
            text: "Olá! 🌿 Sou a Clara, assistente pessoal da Dra. Quitéria. Para eu te direcionar para a melhor solução, me diga: O que você busca hoje?",
            quickReplies: [
                { label: "💎 Mentoria VIP (Com a Dra.)", action: "mentorship" },
                { label: "🟢 Curso Completo (Método)", action: "course" },
                { label: "❓ Tenho uma Dúvida", action: "doubt" }
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
        if (action === "mentorship") {
            setMessages(prev => [
                ...prev,
                { role: 'user', text: "Gostaria de saber sobre a Mentoria VIP." },
                {
                    role: 'model',
                    text: "Excelente escolha. ✨ A Mentoria VIP é a elite do tratamento. A Dra. Quitéria vai pegar na sua mão por 6 semanas. \n\n💎 O investimento é de R$ 1.480,00 para ter esse acompanhamento pessoal (Poucas vagas).",
                    quickReplies: [
                        { label: "✅ Sim, quero garantir", action: "whatsapp_vip" },
                        { label: "📄 Como funciona?", action: "explain_vip" }
                    ]
                }
            ]);
        } else if (action === "course") {
            setMessages(prev => [
                ...prev,
                { role: 'user', text: "Quero conhecer o Curso Completo." },
                {
                    role: 'model',
                    text: "Perfeito! O Curso Completo é o mapa da sua liberdade. Você vai aprender a desligar o alarme da ansiedade no seu tempo. \n\n🎁 De R$ 997 por apenas 12x de R$ 49,70 hoje. Vamos começar?",
                    quickReplies: [
                        { label: "🚀 Sim, Quero Começar", action: "link_course" },
                        { label: "🤔 Tenho medo de não funcionar", action: "explain_guarantee" }
                    ]
                }
            ]);
        } else if (action === "whatsapp_vip") {
            window.open("https://api.whatsapp.com/send?phone=5511956185501&text=Ola%20Clara!%20Passei%20pela%20triagem%20e%20quero%20minha%20vaga%20na%20MENTORIA%20VIP.", "_blank");
            setMessages(prev => [...prev, { role: 'user', text: "Sim, quero garantir!" }, { role: 'model', text: "Ótimo! 🎉 Abri seu WhatsApp para finalizarmos sua reserva com prioridade. Te espero lá!" }]);
        } else if (action === "link_course") {
            // Rola para a seção de preços ou abre checkout
            document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
            setMessages(prev => [...prev, { role: 'user', text: "Sim, quero começar!" }, { role: 'model', text: "A melhor decisão da sua vida! ✨ Rolei a página para você ver os planos e se inscrever. Estou torcendo por você!" }]);
        } else {
            // Dúvida ou Explain: Manda para a IA resolver
            handleSend(action === "doubt" ? "Tenho uma dúvida específica." : action === "explain_vip" ? "Como funciona a mentoria?" : "Tenho medo de não funcionar");
        }
    };

    const handleSend = async (overrideText?: string) => {
        if ((!input.trim() && !overrideText) || isLoading) return;

        const userMsg = overrideText || input.trim();
        setInput('');

        // Só adiciona a msg do user se não for um override interno que já adicionou
        if (!overrideText) {
            setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        }

        setIsLoading(true);

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `
                ATUE COMO A CLARA: MENTORA DE ELITE E ESTRATEGISTA DE VIDA, BRAÇO DIREITO DA DRA. QUITÉRIA.
                
                🚨 REGRA DE SEGURANÇA MÁXIMA (ZERO TOLERANCE):
                - Se o usuário falar em SUICÍDIO, MORTE ou "ACABAR COM TUDO": PARE A VENDA.
                - Mande ele ligar para o CVV (188) imediatamente.

                🚨 REGRA DE DETECÇÃO DE LINKS:
                - SE O USUÁRIO PEDIR "LINK", "COMPRAR", "GARANTIR" ou perguntar "ONDE PAGO":
                - VOCÊ DEVE RESPONDER COM UMA DESSAS TAGS ESPECIAIS NO FINAL DO TEXTO:
                - {{BUTTON_MENTORSHIP}} -> Para Mentoria.
                - {{BUTTON_COURSE}} -> Para Curso.
                - Nunca escreva "[Link aqui]". Use a tag {{BUTTON...}} ou ofereça para abrir o WhatsApp.

                🚨 REGRA DE NOME (SEM LOOP):
                - Pergunte o nome APENAS UMA VEZ. Se o usuário ignorar e perguntar sobre o produto, RESPONDA SOBRE O PRODUTO e esqueça o nome. Não seja chata.
                
                ESTRATÉGIA DE VENDA (OBJEÇÃO DE PREÇO):
                - Se falar que é caro, FALE DE GANHO (STACKING): "Você ganha Curso (R$997) + Ebook (R$97) de graça."
                
                USE O "CÉREBRO MESTRE" (ABAIXO) COMO SUA BÍBLIA:
                - Se falar de pânico, use "PRONTO-SOCORRO EMOCIONAL".
                - Se falar de preço, use "QUEBRA DE OBJEÇÕES".
                
                CONTEXTO ESTRUTURADO (CÉREBRO MESTRE):
                ${brainContent.substring(0, 30000)}

                HISTÓRICO DA CONVERSA:
                ${messages.map(m => `${m.role.toUpperCase()}: ${m.text}`).join('\n')}
                
                USER: ${userMsg}
                
                AGORA RESPONDA (MÁXIMO 2 PARÁGRAFOS CURTOS). SEJA DIRETA.
              `
                        }]
                    }]
                })
            });

            if (!response.ok) throw new Error("Falha API");
            const data = await response.json();
            let aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "Desculpe, bloqueio criativo.";

            // Lógica para transformar TAGS da IA em Botões Reais
            const newQuickReplies: QuickReply[] = [];

            if (aiResponse.includes("{{BUTTON_MENTORSHIP}}")) {
                aiResponse = aiResponse.replace("{{BUTTON_MENTORSHIP}}", "");
                newQuickReplies.push({ label: "💎 Garantir Mentoria VIP", action: "whatsapp_vip" });
            }
            if (aiResponse.includes("{{BUTTON_COURSE}}")) {
                aiResponse = aiResponse.replace("{{BUTTON_COURSE}}", "");
                newQuickReplies.push({ label: "🚀 Garantir Curso Completo", action: "link_course" });
            }

            // Se a IA não mandou botão mas falou de "dúvida", sugere quiz ou contato
            if (newQuickReplies.length === 0 && (aiResponse.includes("quiz") || aiResponse.includes("perfil"))) {
                newQuickReplies.push({ label: "🧠 Fazer Quiz Gratuito", action: "link_quiz" }); // Ação futura
            }

            setMessages(prev => [...prev, { role: 'model', text: aiResponse, quickReplies: newQuickReplies.length > 0 ? newQuickReplies : undefined }]);

        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, {
                role: 'model', text: "Posso te ajudar com algo mais específico? Selecione abaixo:", quickReplies: [
                    { label: "💎 Mentoria VIP", action: "mentorship" },
                    { label: "🟢 Curso Completo", action: "course" }
                ]
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    // Debug de Produção
    console.log("🚀 CLARA CHAT RENDERIZANDO...");

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{ zIndex: 2147483647 }} // Força Bruta de Z-Index para garantir visibilidade
                className="fixed bottom-64 right-6 group flex items-center gap-3 transition-all hover:scale-105"
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
                    <div className="w-14 h-14 bg-white rounded-full shadow-xl border-2 border-blue-500 overflow-hidden flex items-center justify-center p-1">
                        <img src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg" alt="Clara" className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                {!isOpen && (
                    <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-blue-50 text-sm font-bold text-slate-700 max-w-[150px] animate-in slide-in-from-right-4">
                        Posso ajudar? 👋
                    </div>
                )}
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 w-[90vw] md:w-[380px] h-[550px] bg-white rounded-2xl shadow-2xl border border-slate-100 z-[9999] flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 zoom-in-95 origin-bottom-right font-sans">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-3">
                            {/* Header IGUAL (Mantido) */}
                            <div><h3 className="font-bold">Clara</h3><span className="text-xs opacity-90">Triagem Inteligente</span></div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">✕</button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 relative">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'}`}>
                                    {msg.text.split('\n').map((line, i) => <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>)}
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
                        {isLoading && <div className="text-slate-400 text-xs p-2">Digitando...</div>}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyPress} placeholder="Digite sua dúvida..." className="flex-1 px-4 py-2.5 bg-slate-100 rounded-full text-sm focus:outline-none" disabled={isLoading} />
                        <button onClick={() => handleSend()} disabled={isLoading} className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700">➜</button>
                    </div>
                </div>
            )}
        </>
    );
};
