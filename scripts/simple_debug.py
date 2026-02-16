import os
import sys

print("Hello world", flush=True)
try:
    files = os.listdir("./audios")
    mp4s = [f for f in files if f.lower().endswith(".mp4")]
    if mp4s:
        print(f"Found mp4: {mp4s[0]}", flush=True)
    else:
        print("No mp4 found", flush=True)
except Exception as e:
    print(f"Error: {e}", flush=True)
