# YouTube Web Spoofing (Local Redirect)

This project demonstrates a local DNS spoofing setup that redirects traffic from `youtube.com` to a custom-hosted web page. The spoofed site visually replicates the YouTube interface in dark mode and includes a download button styled as a legitimate app prompt. It is intended for use in a fully controlled network environment.

---

## ⚙️ Setup Guide

### 1. Host the Spoofed Website

Use Python’s built-in HTTP server to host the page:

```bash
python -m http.server 80
```

Or use any local server (nginx, Apache, XAMPP) that can serve `index.html` on port 80.

> Ensure your system's firewall or security software allows port 80 traffic.

---

### 2. Redirect YouTube Domains Locally

On your router (e.g., ASUS ROG Rapture GT6), configure DNS spoofing or redirection to reroute `youtube.com` and `www.youtube.com` to your local server’s IP address (e.g., `192.168.1.100`).

> This will affect all devices on your network unless filtered.

---

### 3. Build the Executable

The `youtube.py` script creates a basic GUI message when executed. To compile it into an `.exe`, use [PyInstaller](https://pyinstaller.org/):

```bash
pyinstaller --noconsole --onefile --icon=youtube-logo.ico youtube.py
```

After a successful build, you will find `youtube.exe` inside the `dist/` directory.

> ⚠️ Note: Antivirus software may flag unknown executables. This file is safe and performs no harmful actions.

---

## 🎨 Visual Design Details

- Background: `#0f0f0f` (YouTube’s dark mode tone)
- Text and buttons: `#f0f0f0`
- Minimalist layout, no navigation bar
- Language selection toggle (English, German, Chinese)
- Download button labeled to suggest a desktop YouTube app

The spoofed UI is responsive and made to resemble the genuine YouTube experience in dark mode.

---

## ⚠️ Usage Disclaimer

This project is created **for educational and demonstration purposes only**.

- No part of this tool communicates externally or modifies system behavior beyond what’s shown.
- It must only be deployed in **your own network** and on **devices you control**.
- The executable does **not** contain malware, spyware, or destructive functionality.
- Be sure to inform any affected users if used in real testing environments.

Misuse outside controlled environments may violate ethical or legal boundaries. You are fully responsible for how you apply this software.

---

## 📄 License

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
