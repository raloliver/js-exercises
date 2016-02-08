var content = document.getElementById('content');

var elem1   = document.createElement('p');
elem1.innerHTML = "Lorem";
var elem2   = document.createElement('p');
var elem3   = document.createElement('p');

content.appendChild(elem1);
content.appendChild(elem2);
content.appendChild(elem3);

var count       = content.childElementCount;
var element     = content.children;
var elements    = content.childNodes;

console.log(count);
console.log(element);
console.log(elements);
