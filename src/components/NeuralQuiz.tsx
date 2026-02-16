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
                        {/* Quiz Progress and Questions (Keep existing logic) */}
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
                            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] block mb-2 font-sans">Mapeamento de Autonomia Concluído</span>
                            <div className="w-16 h-[1px] bg-blue-100 mx-auto"></div>
                        </div>

                        <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tight">
                            Querida, o seu <span className="text-blue-600 italic">silêncio</span> começou.
                        </h3>

                        <p className="text-slate-500 text-lg mb-12 font-light leading-relaxed italic border-l-2 border-blue-100 pl-8 text-left max-w-2xl mx-auto">
                            Eu li cada uma das suas <span className="text-blue-600 font-bold">10 escolhas</span>. Eu senti a sua dor através delas, e agora entendo exatamente onde o seu medo está escondido. Veja abaixo a análise detalhada baseada no seu perfil:
                        </p>

                        <div className="max-w-2xl mx-auto space-y-12 text-left mb-16">

                            {/* CLUSTER 1: SENSORIAL/FÍSICO (Análise de Q1, Q3, Q5) */}
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-blue-50/50 rounded-[3rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex items-start gap-6">
                                    <span className="text-5xl font-serif text-blue-100">01</span>
                                    <div className="space-y-4">
                                        <h4 className="font-serif text-2xl text-slate-900 italic">O Alarme do seu Corpo</h4>
                                        <p className="text-slate-600 text-base leading-relaxed font-light">
                                            Seus sintomas físicos de <span className="text-blue-600 font-medium">"{answers[0]}"</span> e a sensação de <span className="text-blue-600 font-medium">"{answers[2]}"</span> indicam um sistema nervoso em hiper-vigilância constante. Você sente que <span className="text-slate-900 font-medium">"{answers[4]}"</span>, o que é o sinal mais claro de que seu corpo não é mais um porto seguro. No <strong className="text-blue-600">Módulo 3</strong>, vamos desativar esse alarme biológico para que você volte a habitar seu corpo com paz.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="h-[1px] w-full bg-slate-100"></div>

                            {/* CLUSTER 2: MENTAL/PROJETIVO (Análise de Q2, Q6, Q9) */}
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-cyan-50/50 rounded-[3rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex items-start gap-6">
                                    <span className="text-5xl font-serif text-cyan-100">02</span>
                                    <div className="space-y-4">
                                        <h4 className="font-serif text-2xl text-slate-900 italic">O Labirinto dos Pensamentos</h4>
                                        <p className="text-slate-600 text-base leading-relaxed font-light">
                                            Quando você precisa sair de casa, o pensamento de <span className="text-cyan-600 font-medium">"{answers[1]}"</span> domina sua mente. Isso se agrava no silêncio da noite, onde <span className="text-cyan-600 font-medium">"{answers[5]}"</span>. O seu maior temor para o futuro, que é <span className="text-slate-900 font-medium">"{answers[8]}"</span>, é o centro do nosso <strong className="text-cyan-600">Protocolo de Reativação Neural</strong>. Vamos reconstruir sua rota de fuga mental.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="h-[1px] w-full bg-slate-100"></div>

                            {/* CLUSTER 3: IMPACTO DE VIDA/LIBERDADE (Análise de Q4, Q7, Q8, Q10) */}
                            <div className="p-10 rounded-[3rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>
                                <div className="relative z-10 space-y-6">
                                    <h4 className="font-serif text-3xl italic">Sua Retomada</h4>
                                    <p className="text-slate-300 text-base leading-relaxed font-light italic">
                                        O preço que você pagou — <span className="text-blue-300 font-medium">"{answers[6]}"</span> — foi alto demais, e ter que <span className="text-blue-300 font-medium">"{answers[3]}"</span> é uma ferida que precisa ser curada. O seu desejo profundo de <span className="text-blue-300 font-medium">"{answers[7]}"</span> é a meta do nosso trabalho. Ao escolher que <span className="text-white font-bold italic">"{answers[9]}"</span>, você acaba de dar o passo mais importante da sua vida nos últimos anos.
                                    </p>

                                    <div className="pt-6 border-t border-white/10">
                                        <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-3">Plano de Ação Sugerido:</p>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            A <strong className="text-white">Mentoria VIP</strong> é a minha recomendação direta para o seu caso. Lá, eu mesma cuidarei de cada detalhe para que o silêncio que você busca se torne permanente.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <a
                                href="#pricing"
                                className="group relative inline-flex items-center justify-center gap-10 px-14 py-8 bg-blue-600 text-white rounded-full font-bold text-xl transition-all shadow-2xl hover:scale-105 active:scale-95 overflow-hidden"
                            >
                                <span className="relative z-10 uppercase tracking-[0.3em] text-sm">Iniciar Minha Cura Agora</span>
                                <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 opacity-20"></div>
                            </a>

                            <div className="max-w-md mx-auto py-4">
                                <p className="text-[9px] text-slate-400 font-medium uppercase tracking-[0.1em] leading-relaxed">
                                    Atenção: Este mapeamento é uma ferramenta educacional baseada em sua auto-avaliação. Sua vida é preciosa. Para suporte imediato, ligue 188 (CVV).
                                </p>
                            </div>
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
