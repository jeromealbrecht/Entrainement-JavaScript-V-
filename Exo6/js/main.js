const password = document.querySelectorAll('input[type="password"]');

password.forEach(myFunction);

function myFunction(element){
    element.addEventListener('focus', (event) => {
        element.style.backgroundColor = 'red';    
    });
    
    element.addEventListener('blur', (event) => {
        element.style.backgroundColor = '';    
    });
}

