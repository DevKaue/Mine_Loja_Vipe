function comprarVip(tipo) {
    const nick = document.getElementById(`nick-${tipo}`).value.trim();

    if (!nick) {
        alert("Por favor, insira seu nick do Minecraft.");
        return;
    }

    // Substitua pelos seus links reais do Mercado Pago
    const links = {
        bronze: "https://www.mercadopago.com.br/checkout/v1/bronze-link",
        prata: "https://www.mercadopago.com.br/checkout/v1/prata-link",
        ouro: "https://www.mercadopago.com.br/checkout/v1/ouro-link"
    };

    const linkPagamento = links[tipo];

    // Adiciona o nick como parâmetro (se quiser)
    const urlComNick = `${linkPagamento}?external_reference=${encodeURIComponent(nick)}`;

    window.open(urlComNick, "_blank");
}
