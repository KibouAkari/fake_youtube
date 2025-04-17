const texts = {
  de: {
    headline: "YouTube Web wird nicht mehr unterstützt",
    message:
      "Um weiterhin YouTube zu nutzen, laden Sie bitte die offizielle YouTube App herunter.",
    button: "YouTube App herunterladen",
  },
  en: {
    headline: "YouTube Web is no longer supported",
    message:
      "To continue using YouTube, please download the official YouTube App.",
    button: "Download YouTube App",
  },
  zh: {
    headline: "YouTube 网页版已不再支持",
    message: "请下载官方 YouTube 应用程序以继续使用。",
    button: "下载 YouTube 应用程序",
  },
};

function setLang(lang) {
  document.getElementById("headline").textContent = texts[lang].headline;
  document.getElementById("message").textContent = texts[lang].message;
  document.getElementById("btn-text").textContent = texts[lang].button;
}

window.onload = () => setLang("de");
