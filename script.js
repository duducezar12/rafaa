function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem");
  mensagem.innerText = "Você é a melhor coisa que já me aconteceu minha princesa💖Eu te amo demais! - Eduardo 💌";

  iniciarContagem();
}

function iniciarContagem() {
  const contador = document.getElementById("contador");
  const dataInicio = new Date("2025-05-17T00:00:00");

  function atualizarContagem() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    contador.innerText = `Estamos juntos há: ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos 💞`;
  }

  atualizarContagem();
  setInterval(atualizarContagem, 1000);
}
