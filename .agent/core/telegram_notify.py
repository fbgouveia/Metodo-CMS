# TELEGRAM NOTIFY — nucleo Python
# Uso: from D:\AgentHub\core\telegram_notify import notify
# ou:  import sys; sys.path.insert(0, r'D:\AgentHub\core'); from telegram_notify import notify

import requests, datetime, os

TOKEN   = "8628162112:AAHSQMmDL_P6sFzUgvQ3DGX5Rv2QjFRq9xU"
CHAT_ID = "6431944169"
LOG     = r"D:\AgentHub\logs\notificacoes.log"

ICONES = {"Sucesso": "OK", "Erro": "ERRO", "Alerta": "AVISO", "Info": "INFO"}

def notify(mensagem: str, nivel: str = "Info"):
    icone = ICONES.get(nivel, "INFO")
    ts    = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    texto = f"[{icone}] {mensagem}"

    try:
        requests.post(f"https://api.telegram.org/bot{TOKEN}/sendMessage",
                      json={"chat_id": CHAT_ID, "text": texto}, timeout=8)
    except:
        pass

    try:
        with open(LOG, "a", encoding="utf-8") as f:
            f.write(f"[{ts}] [{nivel}] {mensagem}\n")
    except:
        pass
