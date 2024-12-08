

   
        const API_KEY = `89da7be8ff0b8bf6aef0ffb9c1bf1b4c`;
const input = document.getElementById('inputField');
const showWeather = document.getElementById("showWeather");


const searchData = async () => {
    showWeather.innerHTML = `<style>/* From Uiverse.io by mrhyddenn */ 
.loader {
  width: 50px;
  height: 50px;
  display: inline-block;
  border: 5px solid rgb(255, 17, 0);
  border-radius: 50%;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: rot5 1s infinite;
}

@keyframes rot5 {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(180deg);
    border-top-color: rgb(139, 46, 46);
    border-bottom-color: rgb(243, 92, 33);
    border-right-color: transparent;
    border-left-color: transparent;
  }

  100% {
    transform: rotate(360deg);
  }
}</style>

 
<div class="loader"></div>

`
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}`;
    const fetchData = await fetch(API_URL);
    const response = await fetchData.json();
    console.log(response);
    return showData(response);
};

const showData = (data) => {
    showWeather.innerHTML = `
    <img width="80" src=${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="">
    <h1>${data.main.temp}</h1>
    <h2>${data.weather[0].main}</h2>
    `
}

  
  
