//REF Elementos para o HTML
//app adciona linha a div id=app, input e button
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttontElement = document.querySelector('#app button');

// array localStorage memória 
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

//REF Percorrer array de todos
function renderTodos() {

  //adciona todos da lista sem duplicar os anteriores ul vazio
  listElement.innerHTML = '';

  for (todo of todos) {
    // console.log(todo);
    //criação de elementos para nova linha
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    // excluir
    var linkElement = document.createElement('btnexcluir');
    linkElement.setAttribute('href', '#');

    // seta posição correta do array indice
    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deletaTodo(' + pos + ')');

    var linkText = document.createTextNode('Excluir');


    //repassa elementos
    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}
renderTodos();

//REF adcionar novo todo, adcionar, recuperar e renderizar
function addTodo() {
  //recuperar valor do input
  var todoText = inputElement.value;
  // adcionar item ao array
  todos.push(todoText);
  //apagar texto atual do input
  inputElement.value = '';
  //chamar função com novo item
  renderTodos();
  saveToStorage();
}
// chama função no click do botão
buttontElement.onclick = addTodo;


//deletar item todo conforme posição do array
function deletaTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

//Armazenar local storge dados da lista chave e valor formato string
function saveToStorage() {
  //JSON
  localStorage.setItem('list_todos', JSON.stringify(todos));
}


//exemplo de GET AJAX para retornar JSON
/*
var ler = new XMLHttpRequest();

ler.open('GET', 'https://api.github.com/users/willgoncalvescruz');
ler.send(null);

ler.onreadystatechange = function () {
  if (ler.readyState === 4) {
    console.log(JSON.parse(ler.responseText));
  }
}
*/