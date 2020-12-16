'use strict';
/* //Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteItem);

//Functions
function addTodo(event) {
event.preventDefault();
//todo Div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
//create LI
const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
//completed button
const completedButton = document.createElement('button');
completedButton.innerText = "X"
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
//delete button

//append to list
todoList.appendChild(todoDiv);
//clear input value
todoInput.value="";
}

function deleteItem(list){
   const item = list.target;
    //delete todo item
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.remove();
    }
} */

let submitBtn = document.querySelector(".submitBtn");
let todoContainer = document.querySelector(".todoContainer");
let inputBox = document.querySelector(".inputBox");
let todoItem = document.querySelector(".todoItem");


submitBtn.addEventListener("click", newTodo);

function newTodo (){
    
    const newParagraph = document.createElement("p");
    newParagraph.innerText = inputBox.value;
    newParagraph.classList.add('todoItem')
    todoContainer.appendChild(newParagraph);
    inputBox.value="";
    newParagraph.addEventListener("click", function(){
        newParagraph.style.textDecoration = "line-through"}); 

    newParagraph.addEventListener("dblclick", function(){
        todoContainer.removeChild(newParagraph);})

    newParagraph.addEventListener("mousedown", function(){
        newParagraph.style.textDecoration = "none"});
}