function validarEmail(email) {
    // Verifica se o e-mail contém um @ e pelo menos um .
    if (email.indexOf("@") < 1 || email.lastIndexOf(".") < email.indexOf("@") + 2 || email.lastIndexOf(".") + 2 >= email.length) {
        return false;
    }

    // Verifica se o e-mail não começa ou termina com .
    if (email.indexOf(".") === 0 || email.lastIndexOf(".") === email.length - 1) {
        return false;
    }

    return true;
}

// Exemplo de uso
const email = "franciscomanueldomingosj@gmail.com";
if (validarEmail(email)) {
    console.log("O email é válido!");
} else {
    console.log("O email é inválido!");
}
