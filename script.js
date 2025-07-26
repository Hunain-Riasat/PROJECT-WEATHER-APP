// API key and URL are now protected in the backend
const apiurl = "/api/weather?city=";



let searchtext= document.getElementById("texti");
let searchbtn = document.getElementById("searchbtn");
let weatherimage= document.getElementById("weatherimage");



async function checkweather(city){
    const response = await fetch(apiurl + encodeURIComponent(city));
    var data = await response.json();

    console.log(data);

    if (!data.weather || !data.weather[0]) {
        alert("Weather data not found for this city.");
        return;
    }

    if(data.weather[0].main == "Clouds"){
        weatherimage.src="/c.png"
    }
    else if(data.weather[0].main == "Partly cloudy"){
        weatherimage.src="/cs.png"
    }
    else if(data.weather[0].main == "Sun"){
        weatherimage.src="/s.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherimage.src="/r.png"
    }
    else{
        weatherimage.src="/csr.png"
    }

    document.querySelector("#city-name").innerHTML= data.name;
    document.querySelector("#temp").innerHTML= Math.round(data.main.temp)+" °C";
    document.querySelector("#h-value").innerHTML= data.main.humidity+" %";
    document.querySelector("#w-value").innerHTML= data.wind.speed+" Kmph";
}



searchbtn.addEventListener("click",()=>{
    checkweather(searchtext.value);
})

