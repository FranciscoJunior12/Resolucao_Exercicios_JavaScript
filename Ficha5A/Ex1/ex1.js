
let div = document.getElementById('div');

let cores = ['red', 'green', 'black', 'blue'];
let i = 0;

function mudarCorDaDiv() {

    div.style.backgroundColor = cores[i];
    i++;
    if (i == cores.length) {
        console.log(i);
        i = 0;

    }

}

div.addEventListener("mouseover", mudarCorDaDiv);