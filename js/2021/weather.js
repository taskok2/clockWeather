
const API_KEY = "e4194d2edb1459e00deefd83d8ef2ecd";
const COORDS = "coords";

const pos = navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
        .then(res=> res.json())
        .then((d)=>{
            const weather = document.querySelector("#weather span:first-child");
            const icon = d.weather[0].icon;            
            const img = document.createElement("img");
            img.src = `http://openweathermap.org/img/wn/${icon}.png`;
            weather.appendChild(img);

            const city = document.querySelector("#weather span:last-child");
            const temp = d.main.temp;
            const place = d.name;

            city.innerText = `${temp}° ${place} `;
        });
}

function onGeoOK(pos){
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    getWeather(lat, lng);
}

function onGeoError(err){
    alert("Can't find you. No weather for you.");
    console.log(err);
}