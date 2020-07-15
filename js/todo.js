const toDoForm = document.querySelector(".js-toDoForm"),
    toDoinput = toDoForm.querySelector('input'),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDoArr = [];

function deleteToDo(e){
    const btn = e.target;
    const li = btn.parentNode;

    toDoList.removeChild(li);

    const clean = toDoArr.filter(function (toDo){
        return parseInt(li.id) !== toDo.id;
    });

    toDoArr = clean;

    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDoArr));
}

function paintToDo(txt){
    const li = document.createElement("li");
    const idNum = (0 < toDoArr.length ? toDoArr[toDoArr.length-1].id + 1 : 1);
    
    const delBtn = document.createElement("button");
    delBtn.innerText=`❌`;
    delBtn.addEventListener("click", deleteToDo);

    const span = document.createElement("span");
    span.innerText=txt;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = idNum;

    toDoList.appendChild(li);

    const toDoObj = {
        val : txt,
        id : idNum
    }
    toDoArr.push(toDoObj);
    
    saveToDos();
}

function handleToDoSub(e){
    e.preventDefault();
    const addTodo = toDoinput.value;
    paintToDo(addTodo);
    toDoinput.value="";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos){
        const parsed = JSON.parse(loadedToDos);
        parsed.forEach(function (toDo){
            paintToDo(toDo.val);
        });
    }
}

function init(){
    toDoForm.addEventListener("submit", handleToDoSub);

    loadToDos();
}

init();