// TODO MODULE

const todoModule = (function () {

  return {

    // DOM Elements
    app: document.getElementById('root'),
    save: document.getElementById('save'),
    text: document.getElementById('todo_text'),
    dueDate: document.getElementById('todo_duedate'),

    // Managing the multiple components through ids and componentn registry
    componentRegistry: { },
    nextComposantId: 0,
    today: new Date(),
    
    // rerendering function
    update: function(id, object) {
        document.getElementById(id).parentElement.innerHTML = object.render();
        console.log(object.state.text + ' is done ? ' + object.state.isDone);
    },
    
    deletE: function(id) {
        document.getElementById(id).parentElement.innerHTML = '';
        console.log('todo #' + id + ' deleted')
    },
 
    createTodo: function() {
      
      let todoData = {
        text: this.text.value,
        dueDate: this.dueDate.value,
        isDue: false,
        isDone: false
    
      };
      let todo = new Item(todoData);
      let container = document.createElement('div');
      container.innerHTML = todo.render();
      this.app.appendChild(container);
  }

    
    }
})();


// listening for Event in the DOM


// Press ENTER to display search results for input keyword
todoModule.text.addEventListener('keypress', function(e){
        
    if (e.keyCode == 13) {
        todoModule.createTodo();
        todoModule.text.value = '';
    }

});
// Click "Search" to display search results for input keyword
todoModule.save.addEventListener('click', function() {
    todoModule.createTodo();
    todoModule.text.value = '';
});



