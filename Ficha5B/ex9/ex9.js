const form = document.querySelector('form');
const inputApelido = document.getElementById('apelido');
const inputNome = document.getElementById('nome');
const inputDataNascimento = document.getElementById('data_nascimento');
const selectProvincia = document.getElementById('provincia_nascimento');
const radioSexoM = document.getElementById('sexo_m');
const radioSexoF = document.getElementById('sexo_f');
const textareaObservacao = document.getElementById('observacao');
const mensagem = document.getElementById('mensagem');

// função para verificar se um elemento do formulário está vazio
function isElementEmpty(element) {
    return !element.value || /^\s*$/.test(element.value);
}

// função para mostrar mensagem de erro
function showError(message) {
    mensagem.textContent = message;
    mensagem.classList.add('error');
    mensagem.classList.remove('success');
}

// função para mostrar mensagem de sucesso
function showSuccess(message) {
    mensagem.textContent = message;
    mensagem.classList.add('success');
    mensagem.classList.remove('error');
    alert()
}

// função para validar o formulário
function validarForm(event) {
    event.preventDefault();

    // validar apelido
    if (isElementEmpty(inputApelido)) {
        inputApelido.classList.add('error');
    } else {
        inputApelido.classList.remove('error');
    }

    // validar nome
    if (isElementEmpty(inputNome)) {
        inputNome.classList.add('error');
    } else {
        inputNome.classList.remove('error');
    }

    // validar data de nascimento
    if (isElementEmpty(inputDataNascimento)) {
        inputDataNascimento.classList.add('error');
    } else {
        inputDataNascimento.classList.remove('error');
    }

    // validar província de nascimento
    if (selectProvincia.selectedIndex === 0) {
        selectProvincia.classList.add('error');
    } else {
        selectProvincia.classList.remove('error');
    }

    // validar sexo
    if (!radioSexoM.checked && !radioSexoF.checked) {
        radioSexoM.classList.add('error');
        radioSexoF.classList.add('error');
    } else {
        radioSexoM.classList.remove('error');
        radioSexoF.classList.remove('error');
    }

    // validar observação
    if (isElementEmpty(textareaObservacao)) {
        textareaObservacao.classList.add('error');
    } else {
        textareaObservacao.classList.remove('error');
    }

    // verificar se há elementos vazios
    const elementosVazios = form.querySelectorAll('.error');
    if (elementosVazios.length > 0) {
        showError('Preencha todos os campos!');
        elementosVazios[0].focus();
        return;
    }

    // se não há elementos vazios, mostrar mensagem de sucesso
    showSuccess('Formulário enviado com sucesso!');
}