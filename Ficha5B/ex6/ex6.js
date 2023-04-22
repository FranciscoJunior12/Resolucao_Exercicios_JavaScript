var estudante = {
    nome: 'Martins Almeida',
    idade: 20,
    favCor: 'Amarela'
};

for (var propriedade in estudante) {
    console.log(propriedade);
}


var estudante = {
    nome: 'Martins Almeida',
    idade: 20,
    favCor: 'Amarela'
};

console.log('Antes:', estudante);

delete estudante.favCor;

console.log('Depois:', estudante);



var estudante = {
    nome: 'Martins Almeida',
    idade: 20,
    favCor: 'Amarela'
};

var tamanho = 0;
for (var propriedade in estudante) {
    tamanho++;
}

console.log(tamanho);
