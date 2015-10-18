function inicial() {
    document.getElementById('opcaoDesktop').onclick = function() {
        document.getElementById('janela').className = "largura100pc";
        return false;
    };
    document.getElementById('opcaoMobile').onclick = function() {
        document.getElementById('janela').className = "largura320px";
        return false;
    };
};
window.onload = function() {
    inicial();
};
