let texto = document.getElementById('input-text').value;
const button = document.getElementById("ok-button");


button.addEventListener("click", function(e){
    e.preventDefault();
    texto = document.getElementById('input-text').value;
    console.log(texto);
});



