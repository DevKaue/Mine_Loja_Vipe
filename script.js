function abrirModal(tipo) {
    const titulos = {
      super: "Detalhes do VIP Super",
      ultra: "Detalhes do VIP Ultra",
      lendario: "Detalhes do VIP Lendário"
    };
  
    const descricoes = {
      super: "Com o VIP Super, você recebe uma tag heroica, comandos especiais e um kit inicial melhorado. Ideal para começar sua jornada com estilo!",
      ultra: "O VIP Ultra inclui tudo do Super + acesso à área secreta e kits épicos. Uma escolha poderosa para jogadores ativos!",
      lendario: "O VIP Lendário é para verdadeiros heróis! Tudo do Ultra + comandos /fly, /pet e nome colorido no chat. Torne-se uma lenda!"
    };
  
    document.getElementById("modal-title").innerText = titulos[tipo];
    document.getElementById("modal-body").innerText = descricoes[tipo];
    document.getElementById("vip-modal").classList.remove("hidden");
  }
  
  function fecharModal() {
    document.getElementById("vip-modal").classList.add("hidden");
  }
  
  function comprarVip(tipo) {
    const nickInput = document.getElementById(`nick-${tipo}`);
    const nick = nickInput.value.trim();
  
    if (!nick) {
      alert("Por favor, insira seu nick do Minecraft.");
      return;
    }
  
    const links = {
      super: "https://www.mercadopago.com.br/checkout/v1/super-link",
      ultra: "https://www.mercadopago.com.br/checkout/v1/ultra-link",
      lendario: "https://www.mercadopago.com.br/checkout/v1/lendario-link"
    };
  
    const url = `${links[tipo]}?external_reference=${encodeURIComponent(nick)}`;
    window.open(url, "_blank");
  }
  