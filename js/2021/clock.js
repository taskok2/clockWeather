const clock = document.querySelector("h2#clock");

function getClock(){
    const toDay = new Date();
    const h = toDay.getHours().toString().padStart(2,"0");
    const m = toDay.getMinutes().toString().padStart(2,"0");
    const s = toDay.getSeconds().toString().padStart(2,"0");
    clock.innerText = `${h}:${m}:${s}`;
}

getClock();
setInterval(getClock, 1000);