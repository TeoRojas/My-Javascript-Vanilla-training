let texto = document.getElementById('input-text').value;
let button = document.getElementById("add-btn");


button.addEventListener('click', function(e){
    e.preventDefault();
    texto = document.getElementById('input-text').value;
    console.log(texto);
});

console.log(button.children[0].classList);

button.addEventListener('onmouseover', function(e){
    e.preventDefault();
    button.children[0].classList.add('icon-blue');
    console.log('estoy encima del botón');
});

button.addEventListener('onmouseout', function(e){
    e.stopPropagation;
    button.children[0].classList.remove('icon-blue');
    console.log('estoy fuera del botón');

})