let node = document.querySelector('.formulaire');
let dupNode = node.cloneNode(true);
console.log(dupNode);

function bonjour() {
    document.getElementById('myForm').appendChild(dupNode);
}