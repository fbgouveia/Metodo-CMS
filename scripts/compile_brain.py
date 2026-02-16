import os
import json

# Paths
TRANSCRIPTS_DIR = "./transcripts"
OUTPUT_FILE = "./public/clara_brain.txt"

def compile_brain():
    print("🧠 Compilando o cérebro da Clara...")
    
    if not os.path.exists("./public"):
        os.makedirs("./public")

    brain_content = "VOCÊ É A CLARA, ASSISTENTE DA DRA. QUITÉRIA.\n"
    brain_content += "Abaixo está todo o conhecimento que você tem sobre o Método CMS (Cérebro em Modo Silencioso):\n\n"

    files = [f for f in os.listdir(TRANSCRIPTS_DIR) if f.endswith(".txt")]
    
    if not files:
        print("⚠️  Nenhum arquivo de transcrição encontrado em ./transcripts. A Clara nascerá vazia.")
        brain_content += "(Nenhum módulo processado ainda. Responda com base no conhecimento geral sobre ansiedade e o método CMS descrito no site.)\n"
    else:
        print(f"📚 Processando {len(files)} módulos...")
        for filename in files:
            filepath = os.path.join(TRANSCRIPTS_DIR, filename)
            try:
                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()
                    # Adiciona um cabeçalho para cada módulo
                    brain_content += f"\n--- CONTEÚDO DO ARQUIVO: {filename} ---\n"
                    brain_content += content
                    brain_content += "\n-----------------------------------\n"
            except Exception as e:
                print(f"❌ Erro ao ler {filename}: {e}")

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(brain_content)

    print(f"✅ Cérebro compilado em: {OUTPUT_FILE}")
    print(f"📊 Tamanho total: {os.path.getsize(OUTPUT_FILE) / 1024:.2f} KB")

if __name__ == "__main__":
    compile_brain()
