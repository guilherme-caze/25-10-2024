var botao = document.getElementById("VerificarBotao");

botao.onclick = function(){
    var nome = document.getElementById("NomeInput").value;

    var email = document.getElementById("EmailInput").value;

    window.location.href = `/public/contato.html?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}`; //Puxa as informações para a próxima página
}

