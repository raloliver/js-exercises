(function( item ){
    // exemplo de classe
    function Product (name,price,stock) {
        this.name   = name;
        this.price  = price;
        this.stock  = stock;
    }

    // boa pratica usando o prototype (como o metodo está fora da classe, usamos o this)
    Product.prototype.returnStock = function () {
        console.log("Total do Produto: " + this.price * this.stock);
    }
    // criação de variável
    Product.size = "Grande";

    item.Product = Product;

}(window));
