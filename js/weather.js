const weather = document.querySelector('.js-weather');

const COORDS = "coords";
const API_KEY = "e4194d2edb1459e00deefd83d8ef2ecd";

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
        .then(function (res){
            return res.json();
        })
        .then(function (d){
            console.log(d);
            const temp = d.main.temp;
            const place = d.name;
            const wth = d.weather[0].main;

            weather.innerHTML = `${temp}degree in ${place}
            <h2>${wth}</h2>`;
        });
}

function saveCoords(obj){
    localStorage.setItem(COORDS, JSON.stringify(obj));
}

function handleSuccess(pos){
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const coordsObj = {lat, lng};
    saveCoords(coordsObj);
    getWeather(lat, lng);
}

function handleErr(){
    console.log("Can't not access your location");
}

function askCoords(){
    navigator.geolocation.getCurrentPosition(handleSuccess, handleErr);
}

function loadCoords (){
    const loadCords = localStorage.getItem(COORDS);
    if(!loadCords){
        askCoords();
    }else {
        const parseCoords = JSON.parse(loadCords);
        getWeather(parseCoords.lat, parseCoords.lng);
    }
}

function init(){
    loadCoords();
}

init();