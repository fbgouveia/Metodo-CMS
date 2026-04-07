import React, { useState } from 'react';

/* 
 * OPENCLAW CSM - ORGANO INTEGRADO v1.0
 * Um so componente, multiplas faces. (1 Corintios 9:22)
 * Desenvolvido pela Camada -2 para o Imperio Antigravity.
 */

interface OpenClawProps {
    theme: 'antigravity' | 'prestige';
    context: string;
}

const OpenClawCSM: React.FC<OpenClawProps> = ({ theme, context }) => {
    const [input, setInput] = useState('');
    const [status, setStatus] = useState('READY');

    // Estilos baseados no DNA do projeto
    const styles = {
        antigravity: {
            container: "bg-black/40 border-cyan-500/20 text-white font-mono",
            accent: "text-cyan-400",
            button: "bg-cyan-500/20 border-cyan-500/40 hover:bg-cyan-500/40",
            input: "border-white/10 focus:border-cyan-500/50",
            label: "SYSTEM_OPENCLAW_v1.0"
        },
        prestige: {
            container: "bg-white/40 border-[#e5d5c5]/40 text-[#1a1a1a] font-serif",
            accent: "text-[#c48d6a]",
            button: "bg-[#c48d6a]/10 border-[#c48d6a]/30 hover:bg-[#c48d6a]/20",
            input: "border-[#1a1a1a]/10 focus:border-[#c48d6a]/50",
            label: "PROTOCOLO_OPENCLAW_SOBERANIA"
        }
    };

    const currentStyle = styles[theme];

    const handleSubmit = () => {
        if (!input.trim()) return;
        setStatus('PROCESSING_BY_TRIPLE_CLAW');
        // Integracao com a Triplice Garra (Camada -2 / -1)
        console.log(`[OPENCLAW] Capturando Verbo: ${input} | Contexto: ${context}`);
        setTimeout(() => {
            setStatus('EVOLUTION_SYNCED');
            setInput('');
        }, 2000);
    };

    return (
        <div className={`p-6 backdrop-blur-3xl border ${currentStyle.container} transition-all duration-500 rounded-[2rem]`}>
            {/* Header do Orgao */}
            <div className="flex items-center justify-between mb-6 opacity-50">
                <div className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${theme === 'antigravity' ? 'bg-cyan-400' : 'bg-[#c48d6a]'}`} />
                    <span className="text-[9px] uppercase tracking-[0.3em] font-bold">
                        {currentStyle.label}
                    </span>
                </div>
                <span className="text-[8px] opacity-60 italic">RING_-1_ACTIVE</span>
            </div>

            {/* Area de Intencao */}
            <div className="space-y-4">
                <p className="text-[12px] leading-relaxed opacity-80">
                    Declare sua intencao para evolucao imediata:
                </p>
                <div className="relative">
                    <input 
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="..."
                        className={`w-full bg-transparent border-b p-2 outline-none transition-all ${currentStyle.input}`}
                    />
                </div>
                
                <button 
                    onClick={handleSubmit}
                    className={`w-full py-3 border transition-all text-[10px] uppercase tracking-widest font-black flex items-center justify-center gap-3 ${currentStyle.button}`}
                >
                    <span>{status === 'READY' ? 'Executar Garra' : status}</span>
                    {status === 'EVOLUTION_SYNCED' && <div className="w-1 h-1 rounded-full bg-green-400 animate-ping" />}
                </button>
            </div>

            {/* Footer de Soberania */}
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-center opacity-20 hover:opacity-100 transition-opacity">
                <span className="text-[7px] uppercase tracking-[0.5em]">Antigravity Empire - Sovereign CSM</span>
            </div>
        </div>
    );
};

export default OpenClawCSM;
