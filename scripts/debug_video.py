import google.generativeai as genai
import os
import time

API_KEY = "AIzaSyCBP8fazffYUFoJQAcaCLRYkMVu78osq7w"
genai.configure(api_key=API_KEY)

def debug_video():
    # Target first mp4 file found
    video_path = None
    for f in os.listdir("./audios"):
        if f.lower().endswith(".mp4"):
            video_path = os.path.join("./audios", f)
            break
            
    if not video_path:
        print("No .mp4 file found in ./audios")
        return

    print(f"🎬 Debugging video: {video_path}")
    
    try:
        sample_file = genai.upload_file(path=video_path)
        print(f"✅ Upload done: {sample_file.name}")
        
        while sample_file.state.name == "PROCESSING":
            print(".", end="", flush=True)
            time.sleep(2)
            sample_file = genai.get_file(sample_file.name)
        
        print(f"\n✅ State: {sample_file.state.name}")
        
        if sample_file.state.name == "FAILED":
            print(f"❌ Processing failed: {sample_file.uri}") # Log URI might help
            return

        model = genai.GenerativeModel("gemini-1.5-flash")
        print("🧠 Generating content...")
        
        start_time = time.time()
        response = model.generate_content(["Transcreva este vídeo. Identifique Dra. Quitéria.", sample_file])
        end_time = time.time()
        
        print(f"⏱️ Generation took: {end_time - start_time:.2f}s")
        
        if not response.text:
            print("⚠️ Response text is empty/None!")
        else:
            print(f"📝 Response length: {len(response.text)}")
            print(f"snippet: {response.text[:100]}...")
            
        output_dir = "transcripts"
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
            
        output_file = f"{output_dir}/DEBUG_Aula4.txt"
        with open(output_file, "w", encoding="utf-8") as f:
            f.write(response.text if response.text else "EMPTY RESPONSE")
        print(f"✨ Saved to {output_file}")
        
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    debug_video()
