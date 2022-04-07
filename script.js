let qtdCartas = prompt("Com quantas cartas você quer iniciar o jogo?(Tem que ser um número par de cartas entre 4 e 14 cartas)")
const imgList = ["./_imgs/bobrossparrot.gif", "./_imgs/bobrossparrot.gif", "./_imgs/explodyparrot.gif", "./_imgs/explodyparrot.gif", "./_imgs/fiestaparrot.gif", "./_imgs/fiestaparrot.gif", "./_imgs/metalparrot.gif", "./_imgs/metalparrot.gif", "./_imgs/revertitparrot.gif", "./_imgs/revertitparrot.gif", "./_imgs/tripletsparrot.gif", "./_imgs/tripletsparrot.gif","./_imgs/unicornparrot.gif", "./_imgs/unicornparrot.gif"]

const imgListCopy = []

while (qtdCartas % 2 !== 0 || qtdCartas < 4 || qtdCartas > 14) {
    qtdCartas = prompt("Error! Insira um valor válido:")
}

function comparador() { 
	return Math.random() - 0.5; 
}

for(let i = 0; i < qtdCartas; i++){
    imgListCopy[i] = imgList[i];
}

distribuirCartas(qtdCartas);

function distribuirCartas(qtdCartas) {
    let contador = 0;
    const elemento = document.querySelector(".cards")
    imgListCopy.sort(comparador);

    while (contador < qtdCartas) {
        elemento.innerHTML = elemento.innerHTML + 
        `<li class="card">
            <img class="desvirada, escondida" src="${imgListCopy[contador]}" alt="">
            <img class="virada" src="./_imgs/front 1.png" alt="">
        </li>`

        contador ++
    }
}