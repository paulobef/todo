// Crastinate App

const app = document.getElementById('root');
const save = document.getElementById('save');
const text = document.getElementById('todo_text');
const dueDate = document.getElementById('todo_duedate');




let todoData = {
    text: text.value,
    dueDate: dueDate.value,
    isDue: false,
    isDone: false

  };

  let todo = new Item(todoData);




// Press ENTER to display search results for input keyword
text.addEventListener('keypress', function(e){
        
    if (e.keyCode == 13) {
       todo.render();
    }

});
// Click "Search" to display search results for input keyword
save.addEventListener('click', function() {
    todo.render();
});



