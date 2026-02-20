import React, { useState, useEffect, useRef } from 'react';
import { generateClaraDossier } from '../services/gemini';

export const NeuralQuiz: React.FC = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [progress, setProgress] = useState(0);
    const [dossier, setDossier] = useState<string | null>(null);

    const questions = [
        {
            id: 1,
            text: "Quando você acorda, qual é a primeira sensação que invade seu corpo?",
            options: [
                "a) Um aperto no peito, como se algo ruim fosse acontecer.",
                "b) Uma exaustão profunda, por já ter acordado ansiosa.",
                "c) O medo imediato de como será o meu dia hoje.",
                "d) A vontade de continuar na cama para me sentir segura.",
                "e) Taquicardia antes mesmo de abrir os olhos."
            ],
            number: "01",
            cluster: "PHYSICAL"
        },
        {
            id: 2,
            text: "Imagine que você precisa sair de casa agora. O que passa pela sua cabeça?",
            options: [
                "a) 'E se eu passar mal no meio do caminho?'",
                "b) 'Onde fica o hospital ou local seguro mais próximo?'",
                "c) 'Vou inventar uma desculpa para não ir.'",
                "d) 'Sinto que minhas pernas vão falhar.'",
                "e) 'Não consigo ir sem alguém de confiança do lado.'"
            ],
            number: "02",
            cluster: "MIND"
        },
        {
            id: 3,
            text: "Como você se sente quando está em um engarrafamento ou lugar onde não pode sair rápido?",
            options: [
                "a) Como se o ar estivesse acabando aos poucos.",
                "b) Uma agonia insuportável de estar 'presa'.",
                "c) Começo a suar frio e tremer.",
                "d) Penso que vou perder o controle e gritar.",
                "e) Sinto que vou desmaiar a qualquer momento."
            ],
            number: "03",
            cluster: "PHYSICAL"
        },
        {
            id: 4,
            text: "Quantas vezes você já cancelou planos com amigos ou família por causa do medo?",
            options: [
                "a) Tantas vezes que eles pararam de me convidar.",
                "b) Sinto que perdi os melhores momentos dos últimos anos.",
                "c) Cancelo sempre na última hora por crise súbita.",
                "d) Sinto uma culpa enorme, mas o medo é maior.",
                "e) Prefiro nem marcar nada para não decepcionar."
            ],
            number: "04",
            cluster: "LIFE"
        },
        {
            id: 5,
            text: "Qual é a sua relação com o seu próprio corpo hoje?",
            options: [
                "a) Meu corpo é uma armadilha que me ataca do nada.",
                "b) Vivo monitorando cada batida do meu coração.",
                "c) Tenho medo de qualquer sensação diferente.",
                "d) Me sinto desconectada, como se não fosse eu.",
                "e) Sinto vergonha por não conseguir me controlar."
            ],
            number: "05",
            cluster: "PHYSICAL"
        },
        {
            id: 6,
            text: "A noite chega e o silêncio da casa aumenta. O que acontece com seus pensamentos?",
            options: [
                "a) Começa a maratona do 'E se...?'",
                "b) O medo de dormir e acordar passando mal.",
                "c) Repasso todos os erros e medos do dia.",
                "d) Sinto um vazio e uma solidão profunda.",
                "e) Preciso de algum barulho (TV/Celular) para não ouvir minha mente."
            ],
            number: "06",
            cluster: "MIND"
        },
        {
            id: 7,
            text: "Qual é o 'preço' mais alto que a ansiedade te cobrou até agora?",
            options: [
                "a) Minha carreira e meu crescimento profissional.",
                "b) Minha autoconfiança de ser uma mulher independente.",
                "c) O afastamento das pessoas que eu mais amo.",
                "d) A alegria de simplesmente viver sem medo.",
                "e) Minha saúde física e mental."
            ],
            number: "07",
            cluster: "LIFE"
        },
        {
            id: 8,
            text: "Se você pudesse apertar um botão e silenciar o medo por apenas 5 minutos, o que faria?",
            options: [
                "a) Morreria de saudade de apenas... respirar em paz.",
                "b) Iria até a esquina sem olhar para trás.",
                "c) Abraçaria meus filhos sem estar agitada.",
                "d) Choraria de alívio por me sentir eu mesma de novo.",
                "e) Dirigiria o meu carro para qualquer lugar."
            ],
            number: "08",
            cluster: "LIFE"
        },
        {
            id: 9,
            text: "Como você imagina que será seu futuro se nada mudar nos próximos 12 meses?",
            options: [
                "a) Presa no mesmo quarto, com o medo ainda maior.",
                "b) Mais dependente de remédios e de outras pessoas.",
                "c) Perdendo ainda mais oportunidades de felicidade.",
                "d) Sinto que minha vida vai simplesmente parar.",
                "e) Tenho medo de nem estar mais aqui para contar."
            ],
            number: "09",
            cluster: "MIND"
        },
        {
            id: 10,
            text: "Você está disposta a dar um passo para construir sua própria rota de fuga hoje?",
            options: [
                "a) Sim, não aguento mais essa tortura.",
                "b) Tenho medo, mas preciso de ajuda.",
                "c) Quero ser a mulher forte que eu era antes.",
                "d) Quero meu silêncio de volta a qualquer custo.",
                "e) Estou pronta para seguir o método da Dra. Quitéria."
            ],
            number: "10",
            cluster: "LIFE"
        }
    ];

    const reportedRef = useRef(false);

    const handleOption = (option: string) => {
        const answer = option.split(') ')[1];
        setAnswers(prev => [...prev, answer]);
        setStep(prev => {
            const nextStep = prev + 1;
            // Reportar progresso para a Clara de forma sutil
            if (nextStep === 3) {
                (window as any).sendClaraMessage?.(`ESTOU NO MEIO DO QUIZ. Pergunta 3: Respondi que sinto "${answer}". O que isso diz sobre mim? (Responda com a tag {{QUIZ_OBSERVER}})`);
            } else if (nextStep === 7) {
                (window as any).sendClaraMessage?.(`ESTOU AVANÇANDO NO QUIZ. Pergunta 7: O preço mais alto que paguei foi "${answer}". (Responda com a tag {{QUIZ_OBSERVER}})`);
            }
            return nextStep;
        });
    };

    useEffect(() => {
        setProgress((step / questions.length) * 100);

        if (step === questions.length && !reportedRef.current) {
            reportedRef.current = true;

            // Lógica de cluster
            const counts = { PHYSICAL: 0, MIND: 0, LIFE: 0 };
            questions.forEach((q, idx) => {
                if (answers[idx]) counts[q.cluster]++;
            });

            let dominant: 'FISICO' | 'MENTAL' | 'VIDA' = 'FISICO';
            if (counts.MIND >= counts.PHYSICAL && counts.MIND >= counts.LIFE) dominant = 'MENTAL';
            else if (counts.LIFE >= counts.PHYSICAL && counts.LIFE >= counts.MIND) dominant = 'VIDA';

            generateClaraDossier({ answers, cluster: dominant })
                .then(res => {
                    setDossier(res);
                    // Força a Clara a abrir e falar
                    (window as any).sendClaraMessage?.(`FINALIZEI O MAPEAMENTO. Meu perfil é ${dominant}. Aqui está meu dossiê: ${res}.`, true);
                })
                .catch(err => {
                    setDossier("Dossiê processado.");
                    (window as any).sendClaraMessage?.(`FINALIZEI O MAPEAMENTO. Meu perfil é ${dominant}. Por favor, me acolha.`, true);
                });
        }
    }, [step, answers, questions.length]);

    const handleWhatsApp = () => {
        const baseMsg = "Olá Clara! Acabei de fazer o Mapeamento no site e quero meu silêncio de volta.";
        const aiContext = dossier ? `\n\nMEU DOSSIÊ NEURAL:\n${dossier}` : "";
        const encodedMsg = encodeURIComponent(baseMsg + aiContext);
        window.open(`https://api.whatsapp.com/send?phone=5511956185501&text=${encodedMsg}`, '_blank');
    };

    return (
        <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
                <div className="text-center mb-16 space-y-6">
                    <span className="text-blue-500 font-black tracking-[0.4em] text-[10px] uppercase block">Resgate sua Identidade</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white leading-[1.1] max-w-3xl mx-auto">
                        Descubra o nível de <span className="text-blue-500 italic text-nowrap">aprisionamento da sua&nbsp;mente.</span>
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base font-light italic max-w-2xl mx-auto leading-relaxed">
                        Este não é um teste comum. É o primeiro passo do seu mapeamento de autonomia para identificar os gatilhos que travam sua vida e silenciar o&nbsp;medo.
                    </p>
                    <div className="w-12 h-[1px] bg-blue-500/30 mx-auto"></div>
                </div>

                {step < questions.length ? (
                    <div className="bg-white/5 backdrop-blur-2xl p-8 md:p-14 rounded-[3rem] shadow-2xl border border-white/10 animate-fade-in transition-all duration-500">
                        <div className="w-full h-1 bg-white/5 rounded-full mb-12 overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-700 ease-out"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>

                        <div className="mb-10 flex flex-col items-center text-center">
                            <span className="text-6xl font-serif text-white/10 select-none mb-4 leading-none">{questions[step].number}</span>
                            <div>
                                <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-3 italic">Diálogo Interior • Etapa {step + 1} de 10</p>
                                <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight">
                                    {questions[step].text}
                                </h3>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3 md:gap-4">
                            {questions[step].options.map((opt, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleOption(opt)}
                                    className="group relative w-full flex items-center justify-between p-5 md:p-6 rounded-2xl border border-white/10 bg-white/5 active:bg-blue-600/20 active:border-blue-500/50 hover:border-blue-500/30 transition-all text-left touch-manipulation min-h-[72px] active:scale-[0.98] duration-200"
                                >
                                    <span className="text-slate-200 group-active:text-white transition-colors text-base md:text-lg font-light leading-snug w-[90%]">
                                        {opt.split(') ')[1]}
                                    </span>
                                    <div className="w-4 h-4 rounded-full border border-slate-600 group-active:bg-blue-500 group-active:border-blue-400 transition-all flex-shrink-0" />
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="bg-white p-6 md:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl text-center animate-fade-in-up border-4 border-blue-500/5 max-w-[95vw] mx-auto">
                        <div className="mb-8 md:mb-10">
                            <span className="text-[10px] md:text-[11px] font-black text-blue-600 uppercase tracking-[0.3em] block mb-2 font-sans">Mapeamento Concluído</span>
                            <div className="w-12 h-[1px] bg-blue-100 mx-auto"></div>
                        </div>

                        <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 md:mb-8 tracking-tight text-center leading-tight">
                            Querida, o seu <br /><span className="text-blue-600 italic">silêncio</span> começou agora.
                        </h3>

                        <p className="text-slate-500 text-base md:text-lg mb-8 md:mb-12 font-light leading-relaxed italic border-l-2 border-blue-100 pl-6 md:pl-8 text-left max-w-2xl mx-auto">
                            Eu li cada uma das suas <span className="text-blue-600 font-bold">10 escolhas</span>. Eu senti a sua dor através delas, e agora entendo onde o medo se esconde.
                        </p>

                        <div className="max-w-2xl mx-auto space-y-8 md:space-y-12 text-left mb-10 md:mb-16">

                            {/* Card 1 */}
                            <div className="relative group p-4 md:p-0">
                                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                                    <span className="text-4xl md:text-5xl font-serif text-blue-100 leading-none">01</span>
                                    <div className="space-y-2 md:space-y-4">
                                        <h4 className="font-serif text-xl md:text-2xl text-slate-900 italic">Seu corpo pede socorro</h4>
                                        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light bg-slate-50 md:bg-transparent p-4 md:p-0 rounded-2xl">
                                            Sintomas como <span className="text-blue-600 font-bold">"{answers[0]}"</span> não são defeitos. São pedidos de ajuda do seu sistema nervoso exausto.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="relative group p-4 md:p-0">
                                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                                    <span className="text-4xl md:text-5xl font-serif text-cyan-100 leading-none">02</span>
                                    <div className="space-y-2 md:space-y-4">
                                        <h4 className="font-serif text-xl md:text-2xl text-slate-900 italic">O roubo da liberdade</h4>
                                        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light bg-slate-50 md:bg-transparent p-4 md:p-0 rounded-2xl">
                                            Quando <span className="text-cyan-600 font-bold">"{answers[1]?.substring(0, 40)}..."</span> acontece, sua autonomia é sequestrada. É hora de pagar o resgate.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden mx-[-10px] md:mx-0">
                                <div className="relative z-10 space-y-4 md:space-y-6">
                                    <h4 className="font-serif text-2xl md:text-3xl italic">Sua Nova Rota</h4>
                                    <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light italic">
                                        Você disse que deseja <span className="text-blue-300 font-bold">"{answers[7]}"</span>. A Clara já tem o mapa para isso.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-6 px-2 md:px-0">
                            <button
                                onClick={handleWhatsApp}
                                className="group relative w-full flex items-center justify-center gap-4 px-6 py-5 md:py-8 bg-green-600 text-white rounded-full transition-all shadow-xl active:scale-[0.98] overflow-hidden"
                            >
                                <span className="relative z-10 uppercase tracking-[0.2em] text-xs md:text-sm font-sans font-black">Resgatar Minha Vida no WhatsApp</span>
                            </button>
                            <a
                                href="#pricing"
                                className="text-slate-400 hover:text-blue-600 transition-colors text-[10px] md:text-xs uppercase tracking-widest text-center font-bold py-4 block"
                            >
                                Ver opções de tratamento no site
                            </a>
                        </div>
                    </div>
                )}

                <div className="mt-12 text-center">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em] italic">
                        {step < questions.length ? "Mapeando sua rota de fuga..." : "Sua Rota de Liberdade está pronta."}
                    </p>
                </div>
            </div>
        </section>
    );
};
