// Crastinate App

const app = document.getElementById('root');
const save = document.getElementById('save');
const text = document.getElementById('todo_text');
const dueDate = document.getElementById('todo_duedate');


function createTodo(text, dueDate,) {
    let todoData = {
        text: text,
        dueDate: dueDate,
        isDue: false,
        isDone: false
    
    };
    
    let todo = new Item(todoData);
    let container = document.createElement('div');
    container.innerHTML = todo.render();
    app.appendChild(container);
}


// Press ENTER to display search results for input keyword
text.addEventListener('keypress', function(e){
        
    if (e.keyCode == 13) {
        createTodo(text.value, dueDate.value);
        text.value = '';
    }

});
// Click "Search" to display search results for input keyword
save.addEventListener('click', function() {
    createTodo(text.value, dueDate.value);
    text.value = '';
});



