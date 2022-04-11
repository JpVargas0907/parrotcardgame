let qtdCartas = prompt("Com quantas cartas você quer iniciar o jogo?(Tem que ser um número par de cartas entre 4 e 14 cartas)")
const imgList = [
    "./_imgs/bobrossparrot.gif",
    "./_imgs/bobrossparrot.gif",
    "./_imgs/explodyparrot.gif",
    "./_imgs/explodyparrot.gif",
    "./_imgs/fiestaparrot.gif",
    "./_imgs/fiestaparrot.gif",
    "./_imgs/metalparrot.gif",
    "./_imgs/metalparrot.gif",
    "./_imgs/revertitparrot.gif",
    "./_imgs/revertitparrot.gif",
    "./_imgs/tripletsparrot.gif",
    "./_imgs/tripletsparrot.gif",
    "./_imgs/unicornparrot.gif",
    "./_imgs/unicornparrot.gif"
];

const imgListCopy = []

while (qtdCartas % 2 !== 0 || qtdCartas < 4 || qtdCartas > 14) {
    qtdCartas = prompt("Error! Insira um valor válido:")
}

function comparador() {
    return Math.random() - 0.5;
}

for (let i = 0; i < qtdCartas; i++) {
    imgListCopy[i] = imgList[i];
}

distribuirCartas(qtdCartas);

function distribuirCartas(qtdCartas) {
    let contador = 0;
    const elemento = document.querySelector(".cards")
    imgListCopy.sort(comparador);

    while (contador < qtdCartas) {
        elemento.innerHTML = elemento.innerHTML +
            `<div class="card" data-card="${imgListCopy[contador]}">
                <img class="frente" src="${imgListCopy[contador]}" alt="">
                <img class="verso" src="./_imgs/front 1.png" alt="">
            </div>`

        contador++
    }
}

const cards = document.querySelectorAll(".card");
let firstCard, secondCard;
let bloquearCarta = false;
let contadorJogadas = 0;
let pontos = 0;

function virarCarta(){
    if(bloquearCarta === true)return false
    this.classList.add("flip");

    if(!firstCard){
        firstCard = this;
        return false
    } 

    contadorJogadas ++;
    secondCard = this;
    checarCartas();
    if(pontos === (qtdCartas/2)){
        alert(`Parabéns! Você ganhou em ${contadorJogadas} jogadas!`)
    }
}

cards.forEach(card => card.addEventListener('click', virarCarta))


function checarCartas(){
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;
    console.log(isMatch);

    if (isMatch === false){
        desabilitarCartas();
    } else {
        firstCard = undefined;
        secondCard = undefined;
        pontos ++;
    }
}

function desabilitarCartas(){
    bloquearCarta = true;
    setTimeout(() => {
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")

        bloquearCarta = false
        firstCard = undefined
        secondCard = undefined
    }, 1000);
}

