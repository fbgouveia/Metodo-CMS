print("1. Importing modules...", flush=True)
import google.generativeai as genai
import os
import time

print("2. Configuring API...", flush=True)
API_KEY = "AIzaSyCBP8fazffYUFoJQAcaCLRYkMVu78osq7w"
genai.configure(api_key=API_KEY)

print("3. Searching for video...", flush=True)
video_path = "./audios/MODULO 1 REVISADO - Aula 4_final.mp4"
if not os.path.exists(video_path):
    print(f"File not found: {video_path}")
    exit(1)

print(f"4. Uploading {video_path}...", flush=True)
try:
    sample_file = genai.upload_file(path=video_path)
    print(f"5. Uploaded: {sample_file.name}", flush=True)
    
    print("6. Waiting for processing...", flush=True)
    while sample_file.state.name == "PROCESSING":
        print(".", end="", flush=True)
        time.sleep(2)
        sample_file = genai.get_file(sample_file.name)
    
    print(f"\n7. State: {sample_file.state.name}", flush=True)
    
    if sample_file.state.name == "FAILED":
        print(f"❌ Failed: {sample_file.uri}")
        exit(1)

    print("8. Generating content...", flush=True)
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(["Transcreva este vídeo.", sample_file])
    
    print(f"9. Response received. Length: {len(response.text) if response.text else 0}", flush=True)
    
    output_file = "transcripts/DEBUG_FULL_Aula4.txt"
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(response.text if response.text else "EMPTY")
    print(f"✨ Saved to {output_file}", flush=True)

except Exception as e:
    print(f"❌ Error: {e}", flush=True)
