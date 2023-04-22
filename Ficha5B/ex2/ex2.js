

function calcular() {
    
    const altura = parseFloat(document.getElementById('altura').value);

    const base = parseFloat(document.getElementById('base').value);

    const resultado = (base * altura) / 2;
    document.getElementById('resultado').innerHTML = resultado + " cm";
}


