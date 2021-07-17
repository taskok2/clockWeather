const clock = document.querySelector("h2#clock");
const change = document.querySelector("#clock-wrap i");
const notation = document.querySelector("#clock-wrap h4");

const NOTATION = "isnot24";
let midday = "";
let isnot24 = localStorage.getItem(NOTATION)==="true" || false;

function toggleNotation(){
    isnot24 = isnot24?false:true;
    localStorage.setItem(NOTATION, isnot24);

    drawNotation();

    getClock();
}

function drawNotation(){

    change.classList.toggle("fas");
    change.classList.toggle("far");
    notation.classList.toggle('limpidity');
}

change.addEventListener("click", toggleNotation);

function getClock(){
    const toDay = new Date();
    const h = toDay.getHours().toString().padStart(2,"0");
    const m = toDay.getMinutes().toString().padStart(2,"0");
    const s = toDay.getSeconds().toString().padStart(2,"0");
    midday = (11 < parseInt(h) ? "pm" : "am");
    clock.innerText = `${isnot24?((12<h)?h-12:h):h}:${m}:${s}`;
    if(isnot24)
        notation.innerText = midday;
}

if(isnot24)
    drawNotation();

getClock();
setInterval(getClock, 1000);