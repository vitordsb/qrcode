//qr code
let codigoqr = captura('img');
let texto = captura('textarea');
let botaoBaixar = captura('#baixar');

function generate() {
    let tamanho = "930x930";
    let textoqr = encodeURIComponent(texto.value);
    let baseURL = "https://api.qrserver.com/v1/create-qr-code/";

    let url = `${baseURL}?data=${textoqr}&size=${tamanho}`;

    codigoqr.src = url;
    botaoBaixar.disabled = false;
};

function baixar() {
    fetch(codigoqr.src)
        .then(resposta => resposta.blob())
        .then(imagem => {
            let link = document.createElement('a');
            link.href = URL.createObjectURL(imagem);
            link.download = 'qrcode.png';
            link.click();
            setTimeout(() => URL.revokeObjectURL(link.href), 1000);
        })
        .catch(() => window.open(codigoqr.src, '_blank'));
};

function captura(el) {
    return document.querySelector(el);
};

//button sass animation 
var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function() {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}
