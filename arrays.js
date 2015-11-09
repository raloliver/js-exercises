var ages    = [55,60,22,23,28,30];
var animals = ['Gato', 'Cachorro', 'Papagaio'];
var years   = [1973,1983,1985,1988,1992];
var five    = [5,10,15,20];
var fruits  = ['Banana','Maça','Pêra','Uva'];
//ordenar
ages.sort();
animals.sort();
//adicionar novos elementos ao final
animals.push("Peixe","Passarinho");
//inverter ordem
years.reverse();
//adicionar novos elementos no inicio
years.unshift(1960);
//remover o primeito item do array
five.shift();
//remover o ultimo item da lista
animals.pop();
//adicionar item entre os arrays e formatá-los
years = years.join(', ');
//remover itens a partir de determinado índice
//fruits.splice(1, 2);
//retornar itens removidos de um array
var cut = fruits.splice(1, 2);

console.log(ages);
console.log(animals);
console.log(years);
console.log(five);
console.log(fruits);
console.log(cut);

//array dentro de array
people =    [
    "Israel",
    "Rafael",
    [
        "Valesca",
        "Rafaela"
    ]
];
//exibir apenas itens específicos de um array
console.log(people[2][0]);

//pequeno exemplo de loops
/*
for (var i = 0; i < people.length; i++) {
    console.log(people[i])
};
*/

//loop mais aprimorado para coletar os itens do array interno caso eles existam
for (var i = 0; i < people.length; i++) {
    //aqui identificamos se people é um objeto
    if (typeof people[i] == 'object')
        {
            for (var j = 0; j < people[i].length; j++)
            {
                //aqui, como no exemplo de coleta de itens específicos, chamamos o primeiro e o segundo indice, caso exista
                console.log(people[i][j])
            };
        }
        else
        {
            console.log(people[i])
        };
};
