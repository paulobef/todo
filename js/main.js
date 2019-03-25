// Crastinate App

const app = document.getElementById('root');
const save = document.getElementById('save');
const text = document.getElementById('todo_text');
const dueDate = document.getElementById('todo_duedate');


function addTodo (item) {
    app.innerHTML += item.render();
};

let todo = new Item (text.value, dueDate.value)

// Press ENTER to display search results for input keyword
text.addEventListener('keypress', function(e){
        
    if (e.keyCode == 13) {
        addTodo(todo);
    }

});
// Click "Search" to display search results for input keyword
save.addEventListener('click', function() {
    addTodo(todo);
});



