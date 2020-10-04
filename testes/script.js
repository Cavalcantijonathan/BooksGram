 //var tagH1 = document.querySelector('h1'); // Seleciono o H1 da pagina.

// tagH1.style.color = 'red';

// tagH1.textContent = "Olá Pessoal"; // Atraves do DOM consigo mudar o Html.
// tagH1.setAttribute = ("class", "texto");

var btnAdd = document.querySelector('#addTarefa'); // C

function adicionarTarefa() {   
    var inputTarefa = document.querySelector('input'); // Recebendo do input valores
    var ul = document.querySelector('ul'); // Selecionando a Ul.


    ul.insertAdjacentHTML('beforeend', `
       <li> ${inputTarefa.value} </li>
    `); /// Inserindo input dentro da Lista ul
    
    inputTarefa.value = ''; // Deixa o input vazio.
}

btnAdd.addEventListener('click', adicionarTarefa); // Adicionando evento para chamar a função.
