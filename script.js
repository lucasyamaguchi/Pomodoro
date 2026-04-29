const i18n = {
  pt: {
    titleSettings: "Ajustes de Tempo",
    titleHistory: "Histórico",
    titleThemes: "Temas",
    statusReady: "Pronto para Focar",
    statusFocus: "Foco",
    statusShort: "Pausa Curta",
    statusLong: "Pausa Longa",
    statusReadyShort: "Pronto: Pausa Curta",
    statusReadyLong: "Pronto: Pausa Longa",
    paused: "(Pausado)",
    btnFinish: "Concluir Ciclo",
    btnPip: "📌 Janela Flutuante",
    lblFocus: "Foco:",
    lblShort: "Pausa Curta:",
    lblLong: "Pausa Longa:",
    lblCycles: "Ciclos p/ Pausa Longa:",
    min: "min",
    themeTomato: "Tomate",
    themeSaffron: "Açafrão",
    themeOregano: "Orégano",
    themeBlueberry: "Mirtilo",
    themeHerbs: "Ervas Secas",
    themePepper: "Pimenta<br>do Reino",
    msgFocusDone: "Foco Finalizado! Hora da pausa.",
    msgBreakDone: "Pausa Finalizada! Hora de focar.",
    logFocus: "✅ Foco concluído",
    logBreak: "☕ Pausa finalizada",
    months: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    modalTitle: "Me mande uma mensagem",
    modalEmail: "Seu E-mail ou Telefone",
    modalMsg: "Sua Mensagem",
    modalCancel: "Cancelar",
    modalSend: "Enviar",
    modalSuccess: "Mensagem Enviada!",
    lblPortfolio: "Portfólio",
    lblCoffee: "Me pague um café",
    lblEmail: "E-mail",
    msgMaxFocus: "Aviso: O tempo de foco não pode exceder 60 minutos!",
  },
  en: {
    titleSettings: "Time Settings",
    titleHistory: "History",
    titleThemes: "Themes",
    statusReady: "Ready to Focus",
    statusFocus: "Focus",
    statusShort: "Short Break",
    statusLong: "Long Break",
    statusReadyShort: "Ready: Short Break",
    statusReadyLong: "Ready: Long Break",
    paused: "(Paused)",
    btnFinish: "Finish Cycle",
    btnPip: "📌 Floating Window",
    lblFocus: "Focus:",
    lblShort: "Short Break:",
    lblLong: "Long Break:",
    lblCycles: "Cycles to Long Break:",
    min: "min",
    themeTomato: "Tomato",
    themeSaffron: "Saffron",
    themeOregano: "Oregano",
    themeBlueberry: "Blueberry",
    themeHerbs: "Dried Herbs",
    themePepper: "Black<br>Pepper",
    msgFocusDone: "Focus finished! Time for a break.",
    msgBreakDone: "Break finished! Time to focus.",
    logFocus: "✅ Focus completed",
    logBreak: "☕ Break finished",
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    modalTitle: "Send me a message",
    modalEmail: "Your Email or Phone",
    modalMsg: "Your Message",
    modalCancel: "Cancel",
    modalSend: "Send",
    modalSuccess: "Message Sent!",
    lblPortfolio: "Portfolio",
    lblCoffee: "Buy me a coffee",
    lblEmail: "E-mail",
    msgMaxFocus: "Warning: Focus time cannot exceed 60 minutes!",
  },
  es: {
    titleSettings: "Ajustes de Tiempo",
    titleHistory: "Historial",
    titleThemes: "Temas",
    statusReady: "Listo para Enfocar",
    statusFocus: "Enfoque",
    statusShort: "Pausa Corta",
    statusLong: "Pausa Larga",
    statusReadyShort: "Listo: Pausa Corta",
    statusReadyLong: "Listo: Pausa Larga",
    paused: "(Pausado)",
    btnFinish: "Concluir Ciclo",
    btnPip: "📌 Ventana Flotante",
    lblFocus: "Enfoque:",
    lblShort: "Pausa Corta:",
    lblLong: "Pausa Larga:",
    lblCycles: "Ciclos p/ Pausa Larga:",
    min: "min",
    themeTomato: "Tomate",
    themeSaffron: "Azafrán",
    themeOregano: "Orégano",
    themeBlueberry: "Arándano",
    themeHerbs: "Hierbas Secas",
    themePepper: "Pimienta<br>Negra",
    msgFocusDone: "¡Enfoque terminado! Hora de una pausa.",
    msgBreakDone: "¡Pausa terminada! Hora de enfocar.",
    logFocus: "✅ Enfoque completado",
    logBreak: "☕ Pausa finalizada",
    months: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    modalTitle: "Envíame un mensaje",
    modalEmail: "Tu Email o Teléfono",
    modalMsg: "Tu Mensaje",
    modalCancel: "Cancelar",
    modalSend: "Enviar",
    modalSuccess: "¡Mensaje Enviado!",
    lblPortfolio: "Portafolio",
    lblCoffee: "Cómprame un café",
    lblEmail: "Email",
    msgMaxFocus:
      "Aviso: ¡El tiempo de enfoque no puede exceder los 60 minutos!",
  },
};

let currentLang = "pt";
function t(key) {
  return i18n[currentLang][key];
}

function changeLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[currentLang][key]) {
      el.innerHTML = i18n[currentLang][key];
    }
  });
  updateStatusText();
  updateDisplay();
}

// FUNÇÕES DO MODAL DE CONTATO
const modal = document.getElementById("contact-modal");
function toggleModal(show) {
  if (show) {
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
    document.getElementById("contact-form").reset();
  }
}

modal.addEventListener("click", function (e) {
  if (e.target === modal) toggleModal(false);
});

document
  .getElementById("contact-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = e.target;

    if (form.action.includes("SEU_LINK_AQUI")) {
      alert(
        "Para o envio funcionar, insira o seu link do Formspree no código HTML (linha 226).",
      );
      return;
    }

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        showNotification(t("modalSuccess"));
        toggleModal(false);
      } else {
        alert("Ocorreu um erro ao enviar. Tente novamente mais tarde.");
      }
    } catch (error) {
      alert("Erro de conexão ao enviar a mensagem.");
    }
  });

// LÓGICA DO SINO (Web Audio API)
function playBellSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();

    // Oscilador Principal (Tom base)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(880, ctx.currentTime); // Nota A5

    // Oscilador Secundário (Harmonia para som de sino)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(1760, ctx.currentTime); // Nota A6

    // Envelope de volume (Ataque rápido, queda suave)
    gain1.gain.setValueAtTime(1, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2);

    gain2.gain.setValueAtTime(0.5, ctx.currentTime);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);

    osc1.connect(gain1);
    gain1.connect(ctx.destination);

    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + 2);
    osc2.stop(ctx.currentTime + 2);
  } catch (e) {
    console.log("Áudio bloqueado ou não suportado no navegador.");
  }
}

// LÓGICA DO POMODORO
let timeRemaining = 25 * 60;
let timerInterval = null;
let isRunning = false;
let currentMode = "focus";
let totalFocusCycles = 0;
let pipWindow = null;
let currentThemeClass = "theme-tomato";

let settings = { focus: 25, short: 5, long: 15, cyclesToLong: 4 };

const elTimer = document.getElementById("timer");
const elStatus = document.getElementById("status");
const elBody = document.body;
const elHistory = document.getElementById("history");
const elNotification = document.getElementById("page-notification");
let notificationTimeout;

function setTheme(themeName, btnElement) {
  elBody.classList.remove(
    "theme-tomato",
    "theme-saffron",
    "theme-oregano",
    "theme-blueberry",
    "theme-herbs",
    "theme-pepper",
  );
  elBody.classList.add(themeName);
  currentThemeClass = themeName;

  document
    .querySelectorAll(".theme-btn")
    .forEach((btn) => btn.classList.remove("active"));
  btnElement.classList.add("active");

  if (pipWindow) {
    pipWindow.document.body.className =
      themeName + (elBody.classList.contains("dark-mode") ? " dark-mode" : "");
  }
}

// NOVO: Recebe o modo alterado para atualizar em tempo real sem pausar
function updateSettings(modeChanged = null) {
  settings.focus = parseInt(document.getElementById("set-focus").value) || 25;
  settings.short = parseInt(document.getElementById("set-short").value) || 5;
  settings.long = parseInt(document.getElementById("set-long").value) || 15;
  settings.cyclesToLong =
    parseInt(document.getElementById("set-cycles").value) || 4;

  document.getElementById("val-focus").textContent = settings.focus;
  document.getElementById("val-short").textContent = settings.short;
  document.getElementById("val-long").textContent = settings.long;
  document.getElementById("val-cycles").textContent = settings.cyclesToLong;

  if (!isRunning) {
    resetTimer();
  } else if (modeChanged === currentMode) {
    // Se o timer estiver rodando, ele só altera a contagem
    // caso você esteja movendo a barra do modo ativo no momento
    timeRemaining = settings[currentMode] * 60;
    updateDisplay();
  }
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function getFormattedDate() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const monthStr = t("months")[now.getMonth()];
  return `${day}/${monthStr} ${now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}`;
}

function updateStatusText() {
  if (isRunning) {
    elStatus.textContent =
      currentMode === "focus"
        ? t("statusFocus")
        : currentMode === "short"
          ? t("statusShort")
          : t("statusLong");
  } else {
    if (timeRemaining === settings.focus * 60)
      elStatus.textContent = t("statusReady");
    else if (timeRemaining === settings.short * 60)
      elStatus.textContent = t("statusReadyShort");
    else if (timeRemaining === settings.long * 60)
      elStatus.textContent = t("statusReadyLong");
    else
      elStatus.textContent =
        (currentMode === "focus"
          ? t("statusFocus")
          : currentMode === "short"
            ? t("statusShort")
            : t("statusLong")) +
        " " +
        t("paused");
  }
}

function updateDisplay() {
  elTimer.textContent = formatTime(timeRemaining);
  updateStatusText();
  document.title = `${formatTime(timeRemaining)} - ${elStatus.textContent}`;

  if (pipWindow) {
    pipWindow.document.getElementById("pip-timer").textContent =
      formatTime(timeRemaining);
    pipWindow.document.getElementById("pip-status").textContent =
      elStatus.textContent;
    pipWindow.document.getElementById("pip-btn-finish").textContent =
      t("btnFinish");

    pipWindow.document.getElementById("pip-btn-start").disabled = isRunning;
    pipWindow.document.getElementById("pip-btn-pause").disabled = !isRunning;
    pipWindow.document.getElementById("pip-btn-finish").disabled =
      !isRunning &&
      timeRemaining ===
        settings[
          currentMode === "short" || currentMode === "long"
            ? currentMode
            : "focus"
        ] *
          60;
  }
}

function showNotification(msg) {
  elNotification.textContent = msg;
  elNotification.classList.remove("hidden");
  clearTimeout(notificationTimeout);
  notificationTimeout = setTimeout(() => {
    elNotification.classList.add("hidden");
  }, 5000);
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  elNotification.classList.add("hidden");

  if (currentMode === "focus") elBody.classList.add("dark-mode");
  if (pipWindow && currentMode === "focus")
    pipWindow.document.body.classList.add("dark-mode");

  document.getElementById("btn-start").disabled = true;
  document.getElementById("btn-pause").disabled = false;
  document.getElementById("btn-finish").disabled = false;

  timerInterval = setInterval(() => {
    if (timeRemaining > 0) {
      timeRemaining--;
      updateDisplay();
    } else {
      handlePhaseComplete();
    }
  }, 1000);
  updateDisplay();
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  document.getElementById("btn-start").disabled = false;
  document.getElementById("btn-pause").disabled = true;
  elBody.classList.remove("dark-mode");
  if (pipWindow) pipWindow.document.body.classList.remove("dark-mode");

  updateDisplay();
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  elBody.classList.remove("dark-mode");
  if (pipWindow) pipWindow.document.body.classList.remove("dark-mode");

  currentMode = "focus";
  timeRemaining = settings.focus * 60;

  document.getElementById("btn-start").disabled = false;
  document.getElementById("btn-pause").disabled = true;
  document.getElementById("btn-finish").disabled = true;
  updateDisplay();
}

// ==========================================
// LÓGICA DE AJUSTE MANUAL E SINCRONIA
// ==========================================
function adjustTime(minutes) {
  timeRemaining += minutes * 60;

  if (timeRemaining < 60) {
    timeRemaining = 60;
  }

  if (currentMode === "focus" && timeRemaining > 60 * 60) {
    timeRemaining = 60 * 60;
    showNotification(t("msgMaxFocus"));
  }

  let adjustedMinutes = Math.round(timeRemaining / 60);

  if (currentMode === "focus") {
    let sliderValue = adjustedMinutes > 60 ? 60 : adjustedMinutes;
    document.getElementById("set-focus").value = sliderValue;
    document.getElementById("val-focus").textContent = sliderValue;
    settings.focus = sliderValue;
  } else if (currentMode === "short") {
    let maxShort = parseInt(document.getElementById("set-short").max) || 15;
    let sliderValue = adjustedMinutes > maxShort ? maxShort : adjustedMinutes;
    document.getElementById("set-short").value = sliderValue;
    document.getElementById("val-short").textContent = sliderValue;
    settings.short = sliderValue;
  } else if (currentMode === "long") {
    let maxLong = parseInt(document.getElementById("set-long").max) || 45;
    let sliderValue = adjustedMinutes > maxLong ? maxLong : adjustedMinutes;
    document.getElementById("set-long").value = sliderValue;
    document.getElementById("val-long").textContent = sliderValue;
    settings.long = sliderValue;
  }

  updateDisplay();
}

function handlePhaseComplete() {
  clearInterval(timerInterval);
  isRunning = false;
  elBody.classList.remove("dark-mode");
  if (pipWindow) pipWindow.document.body.classList.remove("dark-mode");

  // Toca a campainha suavemente!
  playBellSound();

  const dateStr = getFormattedDate();
  let logMsg = "";

  if (currentMode === "focus") {
    totalFocusCycles++;
    logMsg = `${t("logFocus")} (#${totalFocusCycles})`;
    showNotification(t("msgFocusDone"));

    if (totalFocusCycles % settings.cyclesToLong === 0) {
      currentMode = "long";
      timeRemaining = settings.long * 60;
    } else {
      currentMode = "short";
      timeRemaining = settings.short * 60;
    }
  } else {
    logMsg = t("logBreak");
    showNotification(t("msgBreakDone"));
    currentMode = "focus";
    timeRemaining = settings.focus * 60;
  }

  const li = document.createElement("li");
  li.innerHTML = `<span class="history-date">${dateStr}</span>${logMsg}`;
  elHistory.prepend(li);

  document.getElementById("btn-start").disabled = false;
  document.getElementById("btn-pause").disabled = true;
  document.getElementById("btn-finish").disabled = true;
  updateDisplay();
}

async function togglePiP() {
  if (pipWindow) {
    pipWindow.close();
    return;
  }
  if (!("documentPictureInPicture" in window)) {
    alert("Navegador não suporta PiP interativo.");
    return;
  }

  try {
    pipWindow = await window.documentPictureInPicture.requestWindow({
      width: 320,
      height: 380,
    });
    const isDarkClass = elBody.classList.contains("dark-mode")
      ? " dark-mode"
      : "";

    const style = document.createElement("style");
    style.textContent = `
                    @font-face { font-family: 'Cooper Black'; src: local('Cooper Black'), local('CooperBlack'), local('Arial Black'); }
                    
                    :root, body.theme-tomato { --bg-light: #fbc4ab; --text-light: #5d2a27; --bg-dark: #1a0a09; --text-dark: #fbc4ab; }
                    body.theme-saffron { --bg-light: #fdf2b3; --text-light: #5a4a00; --bg-dark: #2a2400; --text-dark: #fdf2b3; }
                    body.theme-oregano { --bg-light: #c8e6c9; --text-light: #1b4332; --bg-dark: #081c15; --text-dark: #c8e6c9; }
                    body.theme-blueberry { --bg-light: #d8d4ec; --text-light: #2d2a45; --bg-dark: #12101e; --text-dark: #d8d4ec; }
                    body.theme-herbs { --bg-light: #e0e0e0; --text-light: #333333; --bg-dark: #1c1c1c; --text-dark: #e0e0e0; }
                    body.theme-pepper { --bg-light: #2c2c2c; --text-light: #e0e0e0; --bg-dark: #000000; --text-dark: #e8d671; }

                    body {
                        font-family: 'Cooper Black', serif; background-color: var(--bg-light); color: var(--text-light);
                        display: flex; flex-direction: column; align-items: center; justify-content: center;
                        height: 100vh; margin: 0; text-align: center; transition: all 0.5s ease;
                    }
                    body.dark-mode { background-color: var(--bg-dark); color: var(--text-dark); }
                    
                    #pip-status { font-size: 1.2rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px; }
                    #pip-timer { font-size: 4.5rem; margin: 10px 0; font-variant-numeric: tabular-nums; line-height: 1; }
                    .controls { display: flex; gap: 10px; margin-top: 15px; flex-wrap: wrap; justify-content: center; }
                    button {
                        font-family: inherit; font-size: 1.2rem; padding: 10px 15px; border: 2px solid currentColor; border-radius: 15px;
                        background: transparent; color: inherit; cursor: pointer; display: flex; align-items: center; justify-content: center;
                    }
                    button:hover { background-color: rgba(255,255,255,0.1); }
                    button:disabled { opacity: 0.3; cursor: not-allowed; }
                    
                    .btn-finish { border-color: #d90429; color: #d90429; width: 100%; margin-top: 10px;}
                    body.dark-mode .btn-finish { border-color: #ff4d6d; color: #ff4d6d; }
                    body.theme-pepper .btn-finish { border-color: #ff4d6d; color: #ff4d6d; }
                `;
    pipWindow.document.head.appendChild(style);

    pipWindow.document.body.className = currentThemeClass + isDarkClass;

    pipWindow.document.body.innerHTML = `
                    <div id="pip-status">${elStatus.textContent}</div>
                    <div id="pip-timer">${formatTime(timeRemaining)}</div>
                    <div class="controls">
                        <button id="pip-btn-minus">- 1'</button>
                        <button id="pip-btn-start" ${isRunning ? "disabled" : ""}>▶️</button>
                        <button id="pip-btn-pause" ${!isRunning ? "disabled" : ""}>⏸️</button>
                        <button id="pip-btn-plus">+ 1'</button>
                    </div>
                    <div class="controls" style="width: 80%;">
                        <button id="pip-btn-finish" class="btn-finish">${t("btnFinish")}</button>
                    </div>
                `;

    pipWindow.document.getElementById("pip-btn-minus").onclick = () =>
      adjustTime(-1);
    pipWindow.document.getElementById("pip-btn-plus").onclick = () =>
      adjustTime(1);
    pipWindow.document.getElementById("pip-btn-start").onclick = startTimer;
    pipWindow.document.getElementById("pip-btn-pause").onclick = pauseTimer;
    pipWindow.document.getElementById("pip-btn-finish").onclick =
      handlePhaseComplete;

    pipWindow.addEventListener("pagehide", () => {
      pipWindow = null;
    });
  } catch (error) {
    console.error("Erro no PiP:", error);
  }
}

// Inicialização
updateSettings();
changeLanguage("pt");
