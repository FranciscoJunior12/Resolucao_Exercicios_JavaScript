
let caixa = document.getElementsByClassName('caixaQuadrada');
let nome = document.getElementById('nome');
let cor = document.getElementById('cor');
let div = document.getElementById('div');

const cores = ['blue', 'green', 'gray', 'grey', 'pink', 'red', 'orange', 'yellow', 'purple', 'brown', 'black']




function adicionar() {

    if (nome.value.trim().length === 0) {
        
        alert('Preencha o campo nome');

    } else if (cor.value.trim().length === 0) {

        alert('Preencha o campo cor');

    } else {

        if (cores.includes(cor.value)) {

            div.style.backgroundColor = cor.value;

            div.classList.add('caixaQuadrada');

            document.querySelector('p').style.color = 'white';

        } else {

            div.style.backgroundColor = 'white';

            div.classList.add('caixaQuadrada');

            document.querySelector('p').style.color = 'black';

        }

        document.getElementById('inicialNome').innerHTML = nome.value.substring(0, 2);
    }



}