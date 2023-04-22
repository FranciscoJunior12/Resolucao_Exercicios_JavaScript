function calcularImc() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    var imc = peso / (altura * altura);

    var resultado = document.getElementById("resultado");

    if (imc < 18.5) {
        resultado.innerHTML = "IMC: " + imc.toFixed(2) + " - Magreza";
        resultado.classList.add("magreza");
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.innerHTML = "IMC: " + imc.toFixed(2) + " - Normal";
        resultado.classList.add("normal");
    } else if (imc >= 25 && imc <= 30) {
        resultado.innerHTML = "IMC: " + imc.toFixed(2) + " - Sobrepeso";
        resultado.classList.add("sobrepeso");
    } else {
        resultado.innerHTML = "IMC: " + imc.toFixed(2) + " - Obesidade";
        resultado.classList.add("obesidade");
    }
}
