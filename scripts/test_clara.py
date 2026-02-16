import requests
import json

API_KEY = "AIzaSyCBP8fazffYUFoJQAcaCLRYkMVu78osq7w"
# Mudando para gemini-pro (Free Tier garantido)
URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key={API_KEY}"

payload = {
    "contents": [{
        "parts": [{
            "text": "Sou um cliente ansioso. Me convença a comprar o Método CMS em 1 frase curta."
        }]
    }]
}

print("🔄 Testando API GEMINI-PRO...")

try:
    response = requests.post(URL, headers={"Content-Type": "application/json"}, data=json.dumps(payload))
    
    if response.status_code == 200:
        data = response.json()
        print("\n✅ SUCESSO! GEMINI-PRO RESPONDEU:\n")
        print(data["candidates"][0]["content"]["parts"][0]["text"])
    else:
        print(f"\n❌ ERRO NA API: {response.status_code}")
        print(response.text)

except Exception as e:
    print(f"\n❌ ERRO DE CONEXÃO: {e}")
