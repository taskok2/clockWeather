const USER_NAME_KEY = "username";
const HIDDEN_VIEW = "hidden";

const greetings = document.querySelector("#greetings");
const loginForm = document.querySelector("#login-form");

function drawingGreeting(name){
    greetings.innerText = `Welcome! ${name}`;
}
function toggleUserView(){
    greetings.classList.toggle(HIDDEN_VIEW);
    loginForm.classList.toggle(HIDDEN_VIEW);
}

function nameSubmit(eve){
    eve.preventDefault();

    const nameInput = eve.target.querySelector("input");
    const userName = nameInput.value;

    localStorage.setItem(USER_NAME_KEY, userName);

    toggleUserView();
    drawingGreeting(userName);
}
loginForm.addEventListener("submit", nameSubmit);

const user = localStorage.getItem(USER_NAME_KEY);
if(null === user)
    toggleUserView();
else
    drawingGreeting(user);