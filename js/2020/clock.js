const CLOCK_12 = localStorage.getItem("clockOpt") || true;

const clockView = document.querySelector(".clock__view"),
    clockType = document.querySelector(".clock__type");

function setTime(){
    const date = new Date();
    const h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();

    clockView.innerText = `${(CLOCK_12?(h%12):h)}:${(10>m)?'0'+m:m}:${(10>s)?'0'+s:s}`;
    if(CLOCK_12)
        clockType.innerText = `${(12<h)?"pm":"am"}`;
}

function clockInit(){
    setTime();
    setInterval(setTime, 1000);
}

clockInit();