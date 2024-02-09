const form=document.querySelector('form');
const serch=document.querySelector('#search');
const weather=document.querySelector('#weather');
async function  getDetailsofCity(city){
    const API='7b02c6c301d274e292e13cb6ce448a1b';
    let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`);
    let data=await response.json();
    console.log(data);
    showeather(data);

}
function showeather(data){
    weather.innerHTML=`
    
<div>
    <h5>temperature:${data.main.temp}℃</h5>
    <h5>visibility: ${data.weather[0].main} </h5>
    <h5>wind speed:${data.wind.speed}mph</h5>
</div>`
}

form.addEventListener('submit',(eve)=>{
    getDetailsofCity(serch.value);
   eve.preventDefault()
})