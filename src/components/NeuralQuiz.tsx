import React, { useState, useEffect } from 'react';

// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol

export const NeuralQuiz: React.FC = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [progress, setProgress] = useState(0);

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

    const handleOption = (option: string) => {
        setAnswers(prev => [...prev, option.split(') ')[1]]);
        setStep(prev => prev + 1);
    };

    useEffect(() => {
        setProgress((step / questions.length) * 100);
    }, [step]);

    return (
        <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
            </div>

            <div className="max-w-3xl mx-auto relative z-10">

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

                        <div className="grid grid-cols-1 gap-4">
                            {questions[step].options.map((opt, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleOption(opt)}
                                    className="group flex items-center justify-between p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-blue-500/50 hover:bg-blue-600/5 transition-all text-left"
                                >
                                    <span className="text-slate-300 group-hover:text-white transition-colors text-sm md:text-base font-light italic">
                                        {opt.split(') ')[1]}
                                    </span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 group-hover:scale-150 transition-all" />
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl text-center animate-fade-in-up border-4 border-blue-500/5">
                        <div className="mb-10">
                            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] block mb-2">Análise de Acolhimento</span>
                            <div className="w-16 h-[1px] bg-blue-100 mx-auto"></div>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 tracking-tight">
                            Querida, o seu <span className="text-blue-600 italic">silêncio</span> começou.
                        </h3>

                        <p className="text-slate-500 text-lg mb-12 font-light leading-relaxed italic border-l-2 border-blue-100 pl-8 text-left max-w-2xl mx-auto">
                            Eu li cada uma das suas respostas. Eu senti a sua dor através delas, e quero que saiba: você não está mais sozinha nessa luta. Veja como o Método CMS vai cuidar de você:
                        </p>

                        <div className="max-w-2xl mx-auto space-y-8 text-left mb-16">
                            {/* Bloco 1: O Alarme do Corpo */}
                            <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative group overflow-hidden">
                                <span className="absolute -top-4 -right-4 text-8xl font-serif text-slate-200/40 select-none">I</span>
                                <h4 className="font-serif text-xl text-slate-900 mb-4 flex items-center gap-3 relative z-10">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                    Para o seu Alarme Físico
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed font-light relative z-10">
                                    Ao me contar que sente <strong className="text-blue-600 italic">"{answers[0]}"</strong> e <strong className="text-blue-600 italic">"{answers[2]}"</strong>, você confirma que seu sistema de sobrevivência está 'travado' no modo de ataque. No <strong className="text-slate-900">Módulo 3</strong>, vamos desativar fisicamente esse alarme através do Nervo Vago, devolvendo a calma que seu corpo esqueceu como ter.
                                </p>
                            </div>

                            {/* Bloco 2: O Silêncio da Mente */}
                            <div className="p-10 rounded-[2.5rem] bg-blue-50/30 border border-blue-100/50 relative group overflow-hidden">
                                <span className="absolute -top-4 -right-4 text-8xl font-serif text-blue-100/40 select-none">II</span>
                                <h4 className="font-serif text-xl text-slate-900 mb-4 flex items-center gap-3 relative z-10">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                                    Para o Silêncio dos Pensamentos
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed font-light relative z-10">
                                    Aquelas noites onde você sente <strong className="text-blue-700 italic">"{answers[5]}"</strong> e teme <strong className="text-blue-700 italic">"{answers[8]}"</strong> são o foco do nosso <strong className="text-slate-900">Módulo 4</strong>. Você vai aprender a 'educar' sua mente para que ela pare de arquitetar tragédias e volte a ser o seu lugar de descanso.
                                </p>
                            </div>

                            {/* Bloco 3: O Resgate da Vida */}
                            <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white relative group overflow-hidden shadow-2xl">
                                <span className="absolute -top-4 -right-4 text-8xl font-serif text-white/5 select-none">III</span>
                                <h4 className="font-serif text-xl text-white mb-4 flex items-center gap-3 relative z-10">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                    O Seu Ponto de Virada
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed font-light relative z-10 italic">
                                    Você me disse que o preço real foi <strong className="text-blue-300">"{answers[6]}"</strong>. Saiba que o Método CMS foi feito para que o seu desejo de <strong className="text-blue-300">"{answers[7]}"</strong> se torne a sua nova realidade amanhã.
                                </p>

                                <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                                    <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-2 font-sans">Recomendação Profissional:</p>
                                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                                        Dada a profundidade da sua dor, a <strong className="text-white">Mentoria VIP</strong> é o caminho onde eu estarei ao seu lado, 'segurando sua mão' em cada descoberta, para garantir que você não desista até estar livre.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <a
                                href="#pricing"
                                className="group relative inline-flex items-center justify-center gap-10 px-14 py-6 bg-slate-900 text-white rounded-full font-bold text-xl transition-all shadow-2xl hover:scale-105 active:scale-95 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                <span className="relative z-10 uppercase tracking-widest text-sm">Iniciar Minha Retomada</span>
                                <div className="w-12 h-[1px] bg-white relative overflow-hidden z-10 group-hover:bg-cyan-100">
                                    <div className="absolute inset-0 bg-blue-200 -translate-x-full group-hover:animate-shimmer"></div>
                                </div>
                            </a>

                            {/* Safety Notice */}
                            <div className="max-w-md mx-auto py-4 border-t border-slate-100 mt-4">
                                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight leading-relaxed">
                                    Atenção: Este quiz é uma ferramenta educacional. Se você encontra-se em uma situação de perigo imediato, por favor, acesse <a href="https://cvv.org.br/" target="_blank" className="text-blue-500 underline">cvv.org.br</a> ou ligue para <strong className="text-slate-600">188</strong>. Sua vida é preciosa.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-12 text-center">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em] italic">
                        {step < questions.length ? "Mapeando sua rota de fuga..." : "Seu Diagnóstico de Liberdade está pronto."}
                    </p>
                </div>

            </div>
        </section>
    );
};
