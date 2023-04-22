const vogais = ['a', 'e', 'i', 'o', 'u'];

let nrVogais = document.getElementById('numVogal');
let revertido = document.getElementById('revertido');
let maiusculas = document.getElementById('InicalMaiuscula');

function manipularString() {

    let numVogais = 0;
    let string = document.getElementById('texto').value;

    for (i = 0; i < string.length; i++) {

        if (vogais.includes(string[i])) {
            numVogais = numVogais + 1;
        }

    }

    const stringRevertida = string.split('').reverse().join('');
    const stringCapitalizada = capitalizarPalavras(string);


    nrVogais.innerHTML = numVogais;
    revertido.innerHTML = stringRevertida;
    maiusculas.innerHTML = stringCapitalizada;








}


function capitalizarPalavras(str) {
    const palavras = str.split(' ');
    for (let i = 0; i < palavras.length; i++) {
        palavras[i] = palavras[i][0].toUpperCase() + palavras[i].slice(1);
    }
    return palavras.join(' ');
}




