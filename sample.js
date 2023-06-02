const api ={
    key :"58c7e4534ab11bdabac739008e37a14c",
    base : "https://api.openweathermap.org/data/2.5/"
}
const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress',setQuery);

function setQuery(evt){
    console.log(evt.keyCode)
    if(evt.keyCode == 13){
        getResults(searchBox.value)
    }
}

function getResults(query){
    const url = `${api.base}weather?q=${query}&units=metric&appid=${api.key}`;
    fetch(url).then(weather =>{
        return weather.json()
    }).then(response =>{
        console.log(response);
        displayResults(response);

    })
    }
    function displayResults(weather){

        let city = document.querySelector('.location .city');
        city.innerText = `${weather.name}, ${weather.sys.country}`;
        
        let d = new Date();
        let date = document.querySelector('.location .date');
        date.innerText = dateBuilder(d) ;
    
        let temp = document.querySelector('.current .temp');
        temp.innerHTML = `${Math.round(weather.main.temp)} <span>c</span>`;
    
        let weather_main = document.querySelector('.current .weather');
        weather_main.innerText = weather.weather[0].main;
    
        let hilow = document.querySelector('.current .hi-low');
        hilow.innerText = `${Math.round(weather.main.temp_min)} c/ ${Math.round(weather.main.temp_max)} c`;
    
    }
    
    function dateBuilder(d){
    
        let months =["January","February","March","April","May","June","July","August","September","Octomber","November","December"];
        let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`;
    }
    
    
    