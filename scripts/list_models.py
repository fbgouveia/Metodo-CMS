import requests
import json

API_KEY = "AIzaSyCBP8fazffYUFoJQAcaCLRYkMVu78osq7w"
URL = f"https://generativelanguage.googleapis.com/v1beta/models?key={API_KEY}"

print(f"🔍 Buscando modelos disponíveis para a chave {API_KEY[:10]}...")

try:
    response = requests.get(URL)
    
    if response.status_code == 200:
        data = response.json()
        print("\n✅ MODELOS DISPONÍVEIS:")
        for model in data.get("models", []):
            if "generateContent" in model.get("supportedGenerationMethods", []):
                print(f"- {model['name']}")
    else:
        print(f"\n❌ ERRO AO LISTAR MODELOS: {response.status_code}")
        print(response.text)

except Exception as e:
    print(f"\n❌ ERRO DE CONEXÃO: {e}")
