let btn = document.getElementById('addTodo');
let content = document.getElementById('content');
let TodoList = document.getElementById('TodoList');

btn.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    content.appendChild(paragraph);
    paragraph.innerText = TodoList.value;
    TodoList.value = "";

    paragraph.addEventListener('click', function(){
        content.removeChild(paragraph);
    })
})

