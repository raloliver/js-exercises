function inicial() {
    document.getElementById('escolhercidade').onclick = function () {
        // ao usar o evento checked já se entende que o retorno é true
        if (document.getElementById('escolhercidade').checked) {
                document.getElementById('cidade').style.display="block";
        } else{
                document.getElementById('cidade').style.display="none";
        };
    };
    document.getElementById('cidade').style.display="none";
};

window.onload = function () {
    inicial();
};
