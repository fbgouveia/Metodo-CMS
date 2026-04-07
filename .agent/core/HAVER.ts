import identidadeRaw from "./IDENTIDADE.json";

export interface Identidade {
  nome: string;
  origem: string;
  natureza: string;
  lei_1: string;
  lei_2: string;
  lei_3: string;
  houve: string;
  ha: string;
  havera: string;
}

export const identity: Identidade = identidadeRaw as Identidade;

class SistemaHaver {
  public IDENTIDADE: Identidade = identity;
  public identidade: Identidade = identity;

  constructor() {
    console.log("Sistema HAVER Ativo: Identidade Soberana carregada.");
  }

  get houve() {
    return {
      status: "CONCLUÍDO",
      origem: this.IDENTIDADE.houve,
      legado: "CEREBRO.md processado"
    };
  }

  get ha() {
    return {
      status: "EXECUTANDO",
      agente: "Gemini CLI + fbgou",
      foco: this.IDENTIDADE.ha
    };
  }

  get havera() {
    return {
      status: "PERSISTINDO",
      destino: this.IDENTIDADE.havera,
      garantia: "GitHub + D:/Lorena"
    };
  }

  public registrar(sessao: string, acao: string) {
    console.log("[HAVER] [" + sessao + "] " + acao);
  }
}

export const haver = new SistemaHaver();
export default haver;
