// Crastinate App

import "Item.js";

const app = document.getElementById('root');


function addTodo (todo) {
    app.innerHTML += todo.template();
};




