import React, { useState, useEffect } from 'react';
import { ChevronRight, Brain, Shield, Heart, AlertTriangle, CloudRain, Zap, UserX, Home, Car, Timer, CheckCircle2, Sparkles } from 'lucide-react';

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
            icon: <Zap className="w-6 h-6 text-amber-500" />
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
            icon: <Home className="w-6 h-6 text-blue-500" />
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
            icon: <Car className="w-6 h-6 text-rose-500" />
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
            icon: <UserX className="w-6 h-6 text-purple-500" />
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
            icon: <Brain className="w-6 h-6 text-emerald-500" />
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
            icon: <CloudRain className="w-6 h-6 text-indigo-500" />
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
            icon: <AlertTriangle className="w-6 h-6 text-orange-500" />
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
            icon: <Heart className="w-6 h-6 text-pink-500" />
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
            icon: <Timer className="w-6 h-6 text-slate-500" />
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
            icon: <Shield className="w-6 h-6 text-green-500" />
        }
    ];

    const handleOption = (option: string) => {
        setAnswers(prev => [...prev, option]);
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
                                className="h-full bg-gradient-to-r from-blue-600 to-rose-500 transition-all duration-700 ease-out"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>

                        <div className="mb-10 flex flex-col items-center text-center">
                            <div className="p-4 bg-white/5 rounded-2xl mb-6 ring-1 ring-white/10">
                                {questions[step].icon}
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-3">Sondagem de Consciência • Etapa {step + 1} de 10</p>
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
                                    className="group flex items-center justify-between p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-blue-500 transition-all text-left"
                                >
                                    <span className="text-slate-300 group-hover:text-white transition-colors text-sm md:text-base">{opt}</span>
                                    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl text-center animate-fade-in-up border-4 border-blue-500/20">
                        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/30">
                            <Sparkles className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4 tracking-tight">O Silêncio está próximo.</h3>
                        <p className="text-slate-500 text-lg mb-10 font-light">Veja como o Método CMS foi desenhado exatamente para o que você está enfrentando:</p>

                        <div className="max-w-2xl mx-auto space-y-6 text-left mb-12">
                            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-blue-600" />
                                    Para o seu Alarme Físico:
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Ao mencionar que sente <strong>{answers[0]?.split(') ')[1]}</strong> e teme <strong>{answers[2]?.split(') ')[1]}</strong>, você confirma que seu sistema nervoso está em hipervigilância. No <strong>Módulo 3</strong>, você vai aprender a técnica de desativação do nervo vago que corta essa descarga de adrenalina em segundos. O curso te ajuda a "reinstalar" o software de segurança do seu corpo.
                                </p>
                            </div>

                            <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Brain className="w-5 h-5 text-blue-600" />
                                    Para o Silêncio Mental:
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    A sua noite marcada por <strong>{answers[5]?.split(') ')[1]}</strong> será tratada no <strong>Módulo 4</strong>. Você vai aprender a técnica de "Diferenciação do Eu", onde você para de ser a refém dos seus pensamentos e passa a ser a observadora. O Método CMS vai calar essa voz que rouba sua paz.
                                </p>
                            </div>

                            <div className="p-8 rounded-[2rem] bg-blue-50 border border-blue-100">
                                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Heart className="w-5 h-5 text-rose-500" />
                                    Para a sua Liberdade:
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    O seu desejo de <strong>{answers[7]?.split(') ')[1]}</strong> é o nosso objetivo final. Através dos exercícios de exposição segura do <strong>Módulo 6</strong>, você vai recuperar a autonomia que a ansiedade te tirou. Você não vai mais precisar fugir; você vai aprender a caminhar livre novamente.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-slate-900 hover:bg-blue-600 text-white rounded-full font-bold text-xl transition-all hover:scale-105 shadow-2xl group"
                            >
                                Iniciar Minha Retomada agora
                                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </a>
                            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                                Presente Exclusivo: Manual de Gestão incluído na Mentoria VIP.
                            </p>
                        </div>
                    </div>
                )}

                <div className="mt-12 text-center">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em]">
                        {step < questions.length ? "Auditoria de Estado Neural em Curso" : "Plano de Resgate Personalizado"}
                    </p>
                </div>

            </div>
        </section>
    );
};
