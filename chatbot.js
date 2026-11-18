/**
 * Chatbot Widget Auto-Injetável - Ambientado para yourl0nelystar // ghostly.rec
 * Paleta: Preto, Roxo e Amarelo (Sem Neon)
 */
(function () {
  if (window.chatbotInicializado) return;
  window.chatbotInicializado = true;

  // 1. ESTILOS CSS (IDENTIDADE YOURL0NELYSTAR / GHOSTLY.REC)
  const cssStyles = `
    #faq-chatbot-widget {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
      position: fixed !important;
      bottom: 22px !important;
      right: 22px !important;
      z-index: 99999999 !important;
    }

    #faq-toggle-btn {
      width: 60px !important;
      height: 60px !important;
      border-radius: 50% !important;
      background-color: #121215 !important;
      color: #facc15 !important;
      border: 2px solidrgb(0, 0, 0) !important;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.65) !important;
      cursor: pointer !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      outline: none !important;
      transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease !important;
    }

    #faq-toggle-btn:hover {
      transform: scale(1.06) !important;
      background-color: #8b5cf6 !important;
      border-color: #8b5cf6 !important;
    }

    #faq-toggle-btn svg {
      width: 28px !important;
      height: 28px !important;
      fill:rgb(0, 0, 0) !important;
      pointer-events: none !important;
      transition: fill 0.2s ease !important;
    }

    #faq-toggle-btn:hover svg {
      fill: #ffffff !important;
    }

    #faq-chat-window {
      position: fixed !important;
      bottom: 94px !important;
      right: 22px !important;
      width: 370px !important;
      max-width: calc(100vw - 40px) !important;
      height: 515px !important;
      max-height: calc(100vh - 120px) !important;
      background-color: #09090b !important;
      border: 1.5px solid #27272a !important;
      border-top: 3px solidrgb(163, 131, 0) !important;
      border-radius: 14px !important;
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.85) !important;
      display: flex !important;
      flex-direction: column !important;
      overflow: hidden !important;
      z-index: 99999999 !important;
    }

    /* Blindagem total para fechar/minimizar */
    #faq-chat-window.faq-hidden,
    #faq-chat-window[hidden] {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }

    .faq-header {
      background-color: #121215 !important;
      border-bottom: 1px solid #27272a !important;
      padding: 13px 16px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
    }

    .faq-header-info {
      display: flex !important;
      flex-direction: column !important;
      gap: 2px !important;
    }

    .faq-header-kicker {
      font-size: 10px !important;
      font-weight: 700 !important;
      letter-spacing: 1px !important;
      text-transform: uppercase !important;
      color: #facc15 !important;
    }

    .faq-header-title {
      display: flex !important;
      align-items: center !important;
      gap: 7px !important;
    }

    .faq-status-dot {
      width: 8px !important;
      height: 8px !important;
      border-radius: 50% !important;
      background-color: #8b5cf6 !important;
      display: inline-block !important;
    }

    .faq-header h3 {
      margin: 0 !important;
      font-size: 15px !important;
      font-weight: 700 !important;
      letter-spacing: -0.2px !important;
      color: #ffffff !important;
    }

    .faq-header-actions {
      display: flex !important;
      align-items: center !important;
      gap: 6px !important;
    }

    .faq-icon-btn {
      background-color: #1c1c21 !important;
      border: 1px solid #27272a !important;
      border-radius: 8px !important;
      color: #facc15 !important;
      font-size: 14px !important;
      font-weight: 700 !important;
      cursor: pointer !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      width: 30px !important;
      height: 30px !important;
      padding: 0 !important;
      transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease !important;
    }

    .faq-icon-btn:hover {
      background-color: #8b5cf6 !important;
      border-color: #8b5cf6 !important;
      color: #ffffff !important;
    }

    #faq-messages {
      flex: 1 !important;
      padding: 14px !important;
      overflow-y: auto !important;
      background-color: #09090b !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 10px !important;
    }

    #faq-messages::-webkit-scrollbar {
      width: 5px !important;
    }

    #faq-messages::-webkit-scrollbar-track {
      background: #09090b !important;
    }

    #faq-messages::-webkit-scrollbar-thumb {
      background: #27272a !important;
      border-radius: 10px !important;
    }

    #faq-messages::-webkit-scrollbar-thumb:hover {
      background: #8b5cf6 !important;
    }

    .faq-msg {
      max-width: 85% !important;
      padding: 10px 13px !important;
      border-radius: 10px !important;
      font-size: 13.5px !important;
      line-height: 1.45 !important;
      word-wrap: break-word !important;
    }

    .faq-msg.bot {
      align-self: flex-start !important;
      background-color: #141418 !important;
      color: #f4f4f5 !important;
      border: 1px solid #27272a !important;
      border-left: 3px solid #8b5cf6 !important;
    }

    .faq-msg.bot strong {
      color: #facc15 !important;
      font-weight: 700 !important;
    }

    .faq-msg.user {
      align-self: flex-end !important;
      background-color: #facc15 !important;
      color: #09090b !important;
      font-weight: 600 !important;
      border-bottom-right-radius: 2px !important;
    }

    .faq-msg.system-info {
      align-self: center !important;
      background-color: #141418 !important;
      color: #a1a1aa !important;
      border: 1px solid #27272a !important;
      font-size: 11px !important;
      text-transform: uppercase !important;
      letter-spacing: 0.5px !important;
      border-radius: 6px !important;
      padding: 5px 10px !important;
      text-align: center !important;
    }

    .faq-options {
      display: flex !important;
      flex-wrap: wrap !important;
      gap: 7px !important;
      margin-top: 4px !important;
    }

    .faq-chip {
      background-color: #141418 !important;
      color: #f4f4f5 !important;
      border: 1px solid #3f3f46 !important;
      padding: 7px 12px !important;
      border-radius: 8px !important;
      font-size: 12px !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      text-align: left !important;
      transition: background-color 0.18s ease, color 0.18s ease, border-color 0.18s ease !important;
    }

    .faq-chip:hover {
      background-color: #8b5cf6 !important;
      color: #ffffff !important;
      border-color: #8b5cf6 !important;
    }

    .faq-footer {
      padding: 12px !important;
      background-color: #121215 !important;
      border-top: 1px solid #27272a !important;
    }

    .faq-input-area {
      display: flex !important;
      align-items: center !important;
      gap: 8px !important;
      margin: 0 !important;
    }

    #faq-input {
      flex: 1 !important;
      padding: 10px 14px !important;
      background-color: #09090b !important;
      color: #ffffff !important;
      border: 1px solid #27272a !important;
      border-radius: 8px !important;
      font-size: 13.5px !important;
      outline: none !important;
      transition: border-color 0.2s ease !important;
    }

    #faq-input::placeholder {
      color: #71717a !important;
    }

    #faq-input:focus {
      border-color: #facc15 !important;
    }

    #faq-send-btn {
      background-color: #8b5cf6 !important;
      color: #ffffff !important;
      border: none !important;
      width: 38px !important;
      height: 38px !important;
      min-width: 38px !important;
      border-radius: 8px !important;
      cursor: pointer !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      transition: background-color 0.18s ease !important;
    }

    #faq-send-btn:hover {
      background-color: #facc15 !important;
    }

    #faq-send-btn svg {
      width: 18px !important;
      height: 18px !important;
      fill: #ffffff !important;
      pointer-events: none !important;
      transition: fill 0.18s ease !important;
    }

    #faq-send-btn:hover svg {
      fill: #09090b !important;
    }
  `;

  // 2. ESTRUTURA HTML (COM ÍCONE DE FANTASMA DA MARCA)
  const htmlTemplate = `
    <button id="faq-toggle-btn" type="button" aria-label="Abrir Chatbot" title="Falar com ghostly.rec">
      <svg id="faq-icon-open" viewBox="0 0 24 24">
        <path d="M12 2a8 8 0 0 0-8 8v9.5a1.5 1.5 0 0 0 2.56 1.06L8.5 18.62l1.94 1.94a1.5 1.5 0 0 0 2.12 0l1.94-1.94 1.94 1.94A1.5 1.5 0 0 0 20 19.5V10a8 8 0 0 0-8-8zm-2.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
      </svg>
      <svg id="faq-icon-close" viewBox="0 0 24 24" style="display: none;">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    </button>

    <div id="faq-chat-window" class="faq-hidden" hidden style="display: none !important;">
      <div class="faq-header">
        <div class="faq-header-info">
          <span class="faq-header-kicker">GHOSTLY.REC // SUPORTE</span>
          <div class="faq-header-title">
            <span class="faq-status-dot"></span>
            <h3>yourl0nelystar</h3>
          </div>
        </div>
        <div class="faq-header-actions">
          <input type="file" id="faq-json-file" accept=".json" style="display: none;" />
          <button type="button" id="faq-close-btn" class="faq-icon-btn" title="Fechar Chat" aria-label="Fechar Chat">✕</button>
        </div>
      </div>
      <div id="faq-messages"></div>
      <div class="faq-footer">
        <div class="faq-input-area">
          <input type="text" id="faq-input" placeholder="Manda sua dúvida sobre beats, mix..." autocomplete="off" />
          <button type="button" id="faq-send-btn" aria-label="Enviar">
            <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;

  // 3. BASE DE DADOS AMBIENTADA PARA A CENA URBANA / GHOSTLY.REC
  const FAQ_PADRAO = [
    {
      titulo: "O que é o site yourl0nelystar?",
      keywords: ["beat", "beats", "instrumental", "trap", "drill", "boom bap", "comprar"],
      resposta: "Produzimos beats exclusivos de **Trap, Drill, Boom Bap e Dark Sounds** com **stems separados** e **Mix & Master inclusa**."
    },
    {
      titulo: "Por que o site às vezes demora para carregar no primeiro acesso?",
      keywords: ["mix", "master", "mixagem", "masterizacao", "voz", "orcamento"],
      resposta: "Fazemos tratamento analógico e digital para elevar sua faixa. Envie sua guia para fecharmos um **orçamento personalizado**."
    },
    {
      titulo: "Como faço para criar uma conta ou fazer login",
      keywords: ["estudio", "studio", "gravar", "gravacao", "sessao", "presencial"],
      resposta: "Agende sua **sessão presencial** com captação acústica tratada, equipamentos high-end e direção vocal dedicada."
    },
    {
      titulo: "Como posso redefinir a minha senha?",
      keywords: ["booking", "show", "shows", "evento", "agenda", "contratar"],
      resposta: "Para **shows, eventos e parcerias** com **yourl0nelystar**, envie a data e cidade do evento pelo nosso contato direto."
    },
    {
      titulo: "Onde posso ouvir ou visualizar as mídias do yourl0nelystar",
      keywords: ["spotify", "ouvir", "musica", "lancamentos", "plataformas", "redes"],
      resposta: "Confira nossos lançamentos oficiais no **Spotify** direto no player da página ou acompanhe as prévias no catálogo."
    },
    {
      titulo: "Como entrar em contato com o suporte ou idealizador do projeto?",
      keywords: ["beat", "beats", "instrumental", "trap", "drill", "boom bap", "comprar"],
      resposta: "Produzimos beats exclusivos de **Trap, Drill, Boom Bap e Dark Sounds** com **stems separados** e **Mix & Master inclusa**."
    }
  ];

  let baseConhecimento = [...FAQ_PADRAO];
  let jsonCarregadoUrl = null;
  let atualizarMenuCallback = null;
  let adicionarMsgCallback = null;

  function extrairItensJson(dados) {
    if (Array.isArray(dados)) return dados;
    if (dados && typeof dados === "object") {
      if (Array.isArray(dados.perguntas)) return dados.perguntas;
      if (Array.isArray(dados.faq)) return dados.faq;
      if (Array.isArray(dados.itens)) return dados.itens;
    }
    return [];
  }

  function carregarJsonExterno(url) {
    if (!url || jsonCarregadoUrl === url) return;
    jsonCarregadoUrl = url;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(dados => {
        const itensExtras = extrairItensJson(dados);
        if (itensExtras.length > 0) {
          // Coloca as perguntas personalizadas do JSON em destaque primeiro
          baseConhecimento = [...itensExtras, ...FAQ_PADRAO];
          if (typeof atualizarMenuCallback === "function") {
            atualizarMenuCallback();
          }
          if (typeof adicionarMsgCallback === "function") {
            adicionarMsgCallback(`BASE CARREGADA // ${itensExtras.length} PERGUNTAS`, "system-info");
          }
        }
      })
      .catch(err => console.error("Erro ao carregar JSON do chatbot:", err));
  }

  // 4. FUNÇÃO DE INICIALIZAÇÃO
  window.initChatbot = function (opcoes = {}) {
    if (document.getElementById("faq-chatbot-widget")) {
      if (opcoes.jsonUrl) {
        carregarJsonExterno(opcoes.jsonUrl);
      }
      return;
    }

    // Injeta Estilos
    const styleTag = document.createElement("style");
    styleTag.textContent = cssStyles;
    document.head.appendChild(styleTag);

    // Injeta Widget na Raiz do Body
    const container = document.createElement("div");
    container.id = "faq-chatbot-widget";
    container.innerHTML = htmlTemplate;
    document.body.appendChild(container);

    const toggleBtn = document.getElementById("faq-toggle-btn");
    const closeBtn = document.getElementById("faq-close-btn");
    const chatWindow = document.getElementById("faq-chat-window");
    const iconOpen = document.getElementById("faq-icon-open");
    const iconClose = document.getElementById("faq-icon-close");
    const messagesBox = document.getElementById("faq-messages");
    const sendBtn = document.getElementById("faq-send-btn");
    const input = document.getElementById("faq-input");
    const jsonFileInput = document.getElementById("faq-json-file");

    function abrirChat() {
      chatWindow.classList.remove("faq-hidden");
      chatWindow.removeAttribute("hidden");
      chatWindow.style.setProperty("display", "flex", "important");
      chatWindow.style.setProperty("visibility", "visible", "important");
      chatWindow.style.setProperty("opacity", "1", "important");
      chatWindow.style.setProperty("pointer-events", "auto", "important");
      iconOpen.style.display = "none";
      iconClose.style.display = "block";
      input.focus();
    }

    function minimizarChat(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      chatWindow.classList.add("faq-hidden");
      chatWindow.setAttribute("hidden", "");
      chatWindow.style.setProperty("display", "none", "important");
      chatWindow.style.setProperty("visibility", "hidden", "important");
      chatWindow.style.setProperty("opacity", "0", "important");
      chatWindow.style.setProperty("pointer-events", "none", "important");
      iconOpen.style.display = "block";
      iconClose.style.display = "none";
    }

    function toggleChat(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      const estaFechado =
        chatWindow.classList.contains("faq-hidden") ||
        chatWindow.hasAttribute("hidden") ||
        chatWindow.style.display === "none";

      if (estaFechado) {
        abrirChat();
      } else {
        minimizarChat();
      }
    }

    function addMessage(texto, tipo) {
      const div = document.createElement("div");
      div.className = `faq-msg ${tipo}`;
      div.innerHTML = texto.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      messagesBox.appendChild(div);
      messagesBox.scrollTop = messagesBox.scrollHeight;
    }

    function carregarMenuInicial() {
      messagesBox.innerHTML = "";
      addMessage("Salve! Bem-vindo ao site eu sou **Crona**. Como posso ajudar hoje?", "bot");

      const optsContainer = document.createElement("div");
      optsContainer.className = "faq-options";

      baseConhecimento.forEach(item => {
        const label = item.titulo || item.pergunta;
        if (!label) return;

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "faq-chip";
        btn.innerText = label;
        btn.addEventListener("click", () => {
          addMessage(label, "user");
          setTimeout(() => addMessage(item.resposta, "bot"), 200);
        });
        optsContainer.appendChild(btn);
      });

      messagesBox.appendChild(optsContainer);
      messagesBox.scrollTop = messagesBox.scrollHeight;
    }

    atualizarMenuCallback = carregarMenuInicial;
    adicionarMsgCallback = addMessage;

    function normalizarTexto(txt) {
      return txt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/gi, "");
    }

    function buscarResposta(textoUsuario) {
      const queryNorm = normalizarTexto(textoUsuario);
      const palavrasUsuario = queryNorm.split(/\s+/).filter(w => w.length > 2);

      let melhorMatch = null;
      let maiorPontuacao = 0;

      baseConhecimento.forEach(item => {
        let pontos = 0;
        const pergunta = normalizarTexto(item.titulo || item.pergunta || "");
        const resposta = normalizarTexto(item.resposta || "");

        if (pergunta.includes(queryNorm)) pontos += 10;

        palavrasUsuario.forEach(palavra => {
          if (pergunta.includes(palavra)) pontos += 3;
          if (resposta.includes(palavra)) pontos += 1;
          if (item.keywords && Array.isArray(item.keywords)) {
            item.keywords.forEach(kw => {
              if (normalizarTexto(kw).includes(palavra)) pontos += 4;
            });
          }
        });

        if (pontos > maiorPontuacao) {
          maiorPontuacao = pontos;
          melhorMatch = item;
        }
      });

      if (melhorMatch && maiorPontuacao >= 3) {
        return melhorMatch.resposta;
      }
      return "Não achei isso por aqui. Escolha uma das opções acima.";
    }

    function dispararEnvio() {
      const txt = input.value.trim();
      if (!txt) return;

      addMessage(txt, "user");
      input.value = "";

      setTimeout(() => {
        addMessage(buscarResposta(txt), "bot");
      }, 300);
    }

    // Carregar JSON via parâmetro opcional
    if (opcoes.jsonUrl) {
      carregarJsonExterno(opcoes.jsonUrl);
    }

    // Carregar JSON via Upload
    jsonFileInput.addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (evt) {
        try {
          const json = JSON.parse(evt.target.result);
          const itensExtras = extrairItensJson(json);
          if (itensExtras.length > 0) {
            baseConhecimento = [...itensExtras, ...FAQ_PADRAO];
            carregarMenuInicial();
            addMessage(`BASE CARREGADA // ${itensExtras.length} PERGUNTAS`, "system-info");
          } else {
            alert("O JSON não contém perguntas válidas.");
          }
        } catch (err) {
          alert("Arquivo JSON inválido.");
        }
      };
      reader.readAsText(file);
    });

    toggleBtn.addEventListener("click", toggleChat);
    closeBtn.addEventListener("click", minimizarChat);
    sendBtn.addEventListener("click", dispararEnvio);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !chatWindow.classList.contains("faq-hidden")) {
        minimizarChat();
      }
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        dispararEnvio();
      }
    });

    minimizarChat();
    carregarMenuInicial();
  };

  // Auto-execução ao carregar a página
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      window.initChatbot();
    });
  } else {
    window.initChatbot();
  }
})();
