import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()  # 👈 THIS IS REQUIRED

api_key = os.getenv("OPENAI_API_KEY")

print("KEY FOUND:", bool(api_key))  # debug line

client = OpenAI(api_key=api_key)

res = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "Say hello"}]
)

print(res.choices[0].message.content)
