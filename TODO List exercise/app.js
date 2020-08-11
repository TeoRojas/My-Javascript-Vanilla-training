//Selectors
let texto = document.getElementById('input-text').value;
let button = document.getElementById('add-btn');
let buttonDelete = document.querySelector('.liBtn');

//Event Listeners



//Functions
button.addEventListener('click', function(e){
    e.preventDefault();
    texto = document.getElementById('input-text').value;
    if(texto == '' ||  texto == 'Debes escribir una tarea'){
        document.getElementById('input-text').value = 'Debes escribir una tarea';
    }
    else{
        insertLiInDom(createLi(texto));
        document.getElementById('input-text').value = '';
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
    newButton.classList.add('liBtn');
    newButton.addEventListener('click', deleteLi);
    const newI = document.createElement('i');
    newI.classList.add('fas');
    newI.classList.add('fa-check');
    newButton.appendChild(newI);
    return newButton;
}


button.addEventListener('mouseover', function(){
    button.children[0].classList.add('icon-blue');
});


function deleteLi(e){
    e.target.parentElement.remove();
};







