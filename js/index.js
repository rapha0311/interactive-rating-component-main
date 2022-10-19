/*
- Deveremos clicar em uma nota e mudar sua formatação e capturar o valor que está na sua tag e mostrar na próxima tela
- passo 1 - dar um jeito de pegar os elementos que representam as notas no HTML
- passo 2 - dar um jeito de identificar o clique no elemento da nota
- passo 3 - quando o usuário clicar, desmarcar a nota selecionada
- passo 4 - marcar a nota clicada como selecionado
- passo 5 - capturar o valor da nota selecionada
- passo 6 - mostrar o conteúdo da nota selecionada na página nova

*/

// passo 1 - dar um jeito de pegar os elementos que representam as notas no HTML
const notas = document.querySelectorAll(".nota");


notas.forEach(nota => {
    //passo 2 - dar um jeito de identificar o clique no elemento da nota
    nota.addEventListener("click", function () {

        if (nota.classList.contains("selecionado")) {
            return;
        }

        selecionarNota(nota)
       

    });
});

function selecionarNota(nota) {

    

    //passo 3 - quando o usuário clicar, desmarcar a nota selecionada
    const notaSelecionada = document.querySelector(".nota.selecionado");
    notaSelecionada.classList.remove("selecionado");

    //passo 4 - marcar a nota clicada como selecionado
    nota.classList.add("selecionado");
}

const send = document.querySelector(".enviar");

//passo 6 - mostrar o conteúdo da nota selecionada na página nova

send.addEventListener("click", () => {

    let valorDaNota = document.querySelector(".nota.selecionado").value;
    let cartao = document.getElementById("cartao");
    let cartaoObrigado = document.getElementById("cartao-obrigado");
    const res = document.getElementById("res");

    cartao.style.display = 'none';
    cartaoObrigado.style.display = 'block'
    res.innerHTML = (`<p>You selected ${valorDaNota} out of 5</p>`);
})


























