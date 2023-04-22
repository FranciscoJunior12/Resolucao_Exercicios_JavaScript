function verificarCampos() {
    var apelido = document.getElementById("apelido");
    var nome = document.getElementById("nome");
    var dataNascimento = document.getElementById("dataNascimento");
    var sexo = document.getElementById("sexo");
    var observacao = document.getElementById("observacao");

    var camposPreenchidos = true;

    if (apelido.value == "") {
        apelido.style.borderColor = "red";
        camposPreenchidos = false;
    } else {
        apelido.style.borderColor = "green";
    }

    if (nome.value == "") {
        nome.style.borderColor = "red";
        camposPreenchidos = false;
    } else {
        nome.style.borderColor = "green";
    }

    if (dataNascimento.value == "") {
        dataNascimento.style.borderColor = "red";
        camposPreenchidos = false;
    } else {
        dataNascimento.style.borderColor = "green";
    }

    if (sexo.value == "") {
        sexo.style.borderColor = "red";
        camposPreenchidos = false;
    } else {
        sexo.style.borderColor = "green";
    }

    if (observacao.value == "") {
        observacao.style.borderColor = "red";
        camposPreenchidos = false;
    } else {
        observacao.style.borderColor = "green";
    }

    if (camposPreenchidos) {
        alert("Todos os campos foram preenchidos corretamente!");
        return true;
    } else {
        alert("Existem campos vazios!");
        return false;
    }
}