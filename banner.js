var banner = document.getElementById('bannerfloat');
var botao = document.getElementById('botaofechar');

/*NESTE EXEMPLO CRIAMOS UMA FUNÇÃO QUE VAI FAZER O BANNER SUMIR AO CLICAR OU DEPOIS DE DETERMINADO TEMPO*/
function summirBanner() {
    banner.className = 'naovisivel';
}

botao.onclick = function () {
    summirBanner();
}

setTimeout(summirBanner, 4000);
