function detectarResolucao() {
    // via JS vamos mudar o arquivo de referência
  var largura = 0;
  var arquivosCSS  = document.getElementById('CSS');

    // pegar a largura em cross browser
  if (window.innerWidth) {
    largura = window.innerWidth;
  }
  else if (document.documentElement && document.documentElement.clientWidth) {
    largura = document.documentElement.clientWidth;
  } else if (document.body) {
    largura = document.body.clientWidth;
  };

  if (largura < 450) {
    arquivosCSS.setAttribute("href", "mobile.css");
  } else {
    arquivosCSS.setAttribute("href", "desktop.css");
  }

};
// chamar a função no carregamento da página
window.onload = function () {
    detectarResolucao();
}

// chamar a função no redimendisionamento da janela
window.onresize = function () {
    detectarResolucao();
}
