let envoyer = document.getElementById('bouton-envoyer');
let pass1Valeur = document.getElementById('pass1').value;
let pass2Valeur = document.getElementById('pass2').value;
let pass1 = document.getElementById('pass1');
let pass2 = document.getElementById('pass2');

envoyer.addEventListener('click', function(){
    if(pass1Valeur == pass2Valeur) {
        pass1.style.backgroundColor = 'green';
        pass2.style.backgroundColor = 'green';
    } else {
        pass1.style.backgroundColor = 'blue';
        pass2.style.backgroundColor = 'blue';
    }
});