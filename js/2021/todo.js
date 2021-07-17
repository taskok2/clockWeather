const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos=[];
const TODOS_KEY = "toDos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function removeToDo({target}){
    const li = target.parentNode;
    li.remove();
    toDos = toDos.filter(item => item.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo({text:text, id:id}){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    const btn = document.createElement("button");
    btn.innerText="❌";
    btn.addEventListener("click", removeToDo)
    li.appendChild(btn);

    li.id = id;    
    toDoList.appendChild(li);
}

function handleToDoSubmit(eve){
    eve.preventDefault();
    
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text : newToDo,
        id : Date.now()
    }
    toDos.push(newToDoObj);

    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
    toDos = JSON.parse(savedToDos);
    toDos.forEach(paintToDo);
}

