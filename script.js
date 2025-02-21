const apikey="4311743e5c66a34f780eb98919e57bfd";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";



let searchtext= document.getElementById("texti");
let searchbtn = document.getElementById("searchbtn");
let weatherimage= document.getElementById("weatherimage");



async function checkweather(city){
    const response=await fetch(apiurl +city +`&appid=${apikey}`);
    var data= await response.json();

console.log(data);

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

