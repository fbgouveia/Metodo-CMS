import google.generativeai as genai
import os
import time

# CONFIGURAÇÃO: Pegue sua chave grátis em https://aistudio.google.com/
API_KEY = "AIzaSyCBP8fazffYUFoJQAcaCLRYkMVu78osq7w"
genai.configure(api_key=API_KEY)

def transcribe_audio(file_path):
    print(f"🎬 Iniciando upload: {file_path}")
    
    try:
        # Upload do arquivo para o Google (temporário)
        sample_file = genai.upload_file(path=file_path)
        print(f"✅ Upload concluído. Aguardando processamento da IA...")

        # Aguarda o processamento do arquivo
        while sample_file.state.name == "PROCESSING":
            time.sleep(5)
            sample_file = genai.get_file(sample_file.name)

        if sample_file.state.name == "FAILED":
            raise Exception("Falha no processamento do arquivo pelo Gemini.")

        # Cria o modelo
        model = genai.GenerativeModel("gemini-1.5-flash")
        
        # Prompt para transcrição técnica e fiel
        prompt = """
        Você é um transcritor especialista. 
        Transcreva este áudio INTEGRALMENTE para texto. 
        Identifique os tópicos principais e a estrutura da aula.
        
        FORMATO DE SAÍDA:
        ---
        TÍTULO: [Título Sugerido]
        RESUMO: [Resumo em 3 linhas]
        TÓPICOS: 
        - [Tópico 1]
        - [Tópico 2]
        ---
        TRANSCRICÃO COMPLETA:
        [Texto completo aqui]
        """

        response = model.generate_content([prompt, sample_file])
        
        # Limpeza (opcional, mas boa prática para não lotar o storage do Gemini)
        try:
            sample_file.delete()
        except:
            pass

        return response.text

    except Exception as e:
        print(f"❌ Erro na API do Gemini: {e}")
        return None

# Caminho da pasta de áudios
audio_folder = "./audios"
output_folder = "./transcripts"

if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Formatos suportados
SUPPORTED_EXTENSIONS = (".mp3", ".wav", ".m4a", ".mp4", ".mov", ".mpeg", ".avi")

# Lista todos os arquivos suportados
files_to_process = []
for filename in os.listdir(audio_folder):
    if filename.lower().endswith(SUPPORTED_EXTENSIONS):
        files_to_process.append(filename)

# ORDENAÇÃO INTELIGENTE: Processar menores primeiro (MP3s rápidos) -> depois os vídeos gigantes
# Isso garante que a Clara tenha conteúdo rápido, mesmo se os vídeos demorarem horas.
files_to_process.sort(key=lambda f: os.path.getsize(os.path.join(audio_folder, f)))

print(f"🚀 Fila de processamento otimizada: {len(files_to_process)} arquivos (Menores primeiro)")

for filename in files_to_process:
    audio_path = os.path.join(audio_folder, filename)
    output_filename = filename.replace(".", "_") + ".txt"
    output_path = os.path.join(output_folder, output_filename)

    # PULA se já existe
    if os.path.exists(output_path):
        print(f"⏭️  Pulando (já existe): {filename}")
        continue

    try:
        print(f"👉 Processando: {filename} ({os.path.getsize(audio_path) / 1024 / 1024:.2f} MB)")
        text = transcribe_audio(audio_path)
        
        if text:
            with open(output_path, "w", encoding="utf-8") as f:
                f.write(text)
            print(f"✨ Transcrição salva com sucesso: {output_filename}\n")
        else:
            print(f"⚠️  Falha ao obter texto para: {filename}\n")

    except Exception as e:
        print(f"❌ Erro crítico em {filename}: {e}\n")

print("\n🎉 Processamento concluído! A Clara agora tem cérebro.")
