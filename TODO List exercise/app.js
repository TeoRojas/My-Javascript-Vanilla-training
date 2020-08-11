let texto = document.getElementById('input-text').value;
let button = document.getElementById('add-btn');


button.addEventListener('click', function(e){
    e.preventDefault();
    texto = document.getElementById('input-text').value;
    if(texto == 'Introduce una nueva tarea' ||  texto == 'Debes escribir una tarea'){
        document.getElementById('input-text').value = 'Debes escribir una tarea';
    }
    else{
        insertLiInDom(createLi(texto));
    }
});

function insertLiInDom(li){
    const ul = document.getElementById('list');
    ul.appendChild(li);
}

function createLi(texto){
    const newLi = document.createElement('li');
    texto = document.createTextNode(texto);
    newLi.appendChild(texto);
    newLi.appendChild(createButtonCheck());
    return newLi;
};

function createButtonCheck(){
    const newButton = document.createElement('button');
    const newI = document.createElement('i');
    newI.classList.add('fas');
    newI.classList.add('fa-check');
    newButton.appendChild(newI);
    return newButton;
}


button.addEventListener('mouseover', function(){
    button.children[0].classList.add('icon-blue');
});


button.addEventListener('mouseout', function(){
    button.children[0].classList.remove('icon-blue');
})


