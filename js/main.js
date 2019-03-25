// Crastinate App

import "Item.js";

const app = document.getElementById('root');
const save = document.getElementById('save');
const text = document.getElementById('todo_text');
const dueDate = document.getElementById('duedate');

function addTodo (todo) {
    app.innerHTML += todo.template();
};




