const USER_LS = "username";
const SHOW_ON = "show";

const input = document.querySelector(".greetings__input"),
    tag = document.querySelector(".greetings__input i"),
    message = document.querySelector(".greetings__msg");

function makeSubmit(){
    if(1 > input.querySelector("input").value.length)
        input.submit();
    else
        nameSeq();
}    

function saveName(txt){
    localStorage.setItem(USER_LS, txt);
}

function nameSeq(){
    const nameIn = input.querySelector("input").value;
    saveName(nameIn);
    SayHi(nameIn);
}

function handleSubmit(e){
    e.preventDefault();
    nameSeq();
}

function AskName(){
    input.classList.add(SHOW_ON);
    input.addEventListener("submit", handleSubmit);
}

function SayHi(name){
    input.classList.remove(SHOW_ON);
    message.classList.add(SHOW_ON);
    message.innerText = `Hello ${name}!`;
}

function loadUser(){
    const username = localStorage.getItem(USER_LS);
    if(!username){
        AskName();
    }else{
        SayHi(username);
    }
}

function greetingInit(){
    loadUser();
    tag.addEventListener("click", makeSubmit);
}

greetingInit();