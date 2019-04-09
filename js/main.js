// TODO MODULE

const todoModule = (function () {


  return {

    // DOM Elements
    app: document.getElementById('root'),
    saveButton: document.getElementById('save'),
    

    // Managing the multiple components through ids and component registry
    componentRegistry: {},
    nextComposantId: 0,
    now: moment(),
    
    createTodo: function() {
      
      let todoData = {
        text: document.getElementById('todo_text').value,
        dueDate: $('#datetimepicker2').datetimepicker('viewDate')._d,
        dateString: document.getElementById('todo_duedate').value,
        due: false,
        done: false
    
      }

      let todo = new Item(todoData);
      let container = document.createElement('div');
      container.innerHTML = todo.render();
      this.app.appendChild(container);
    },
    
    // rerendering function
    update: function(id, object) {
        document.getElementById(id).parentElement.innerHTML = object.render();
        console.log(object.state.text + ' is done ? ' + object.state.isDone);
    },
    
    deletE: function(id) {
        document.getElementById(id).parentElement.innerHTML = '';
        console.log('todo #' + id + ' deleted')
    }
 
    
    }
})();


// listening for Event in the DOM


// Press ENTER to display search results for input keyword
document.getElementById('todo_text').addEventListener('keypress', function(e){
        
    if (e.keyCode == 13) {
        todoModule.createTodo();
        todoModule.text = '';
    }

});
// Click "Search" to display search results for input keyword
todoModule.saveButton.addEventListener('click', function() {
    todoModule.createTodo();
    todoModule.text = '';
});



