console.log("Client side application is loaded")
const place=document.querySelector("input")
const message_f=document.querySelector("#first_message")
const message_s=document.querySelector("#second_message")
const message_t=document.querySelector("#third_message")
const message_frth=document.querySelector("#fourth_message")
const message_ffth=document.querySelector("#fifth_message")
const message_sxth=document.querySelector("#sixth_message")

const weatherForm=document.querySelector("form")


weatherForm.addEventListener("submit",(e)=>{
    const placeValue=place.value;

    e.preventDefault()
message_f.textContent="Loading..."
message_s.textContent="Loading..."
message_t.textContent="Loading..."
message_frth.textContent="Loading..."
message_ffth.textContent="Loading..."
message_sxth.textContent="Loading..."
    fetch("/weather?address="+encodeURIComponent(placeValue)).then((response)=>{
        return response.json();
    }).then((data)=>{
        if(data.error){
return console.log("Error: "+error);
        }else{
        message_f.textContent="Location: "+data.place_name
        message_s.textContent="Temperature: "+data.temperature
        message_t.textContent="Temperature feels like: "+data.feelsLike
        message_frth.textContent="Wind speed: "+data.windspeed
        message_ffth.textContent="Wind degree: "+data.windDegree
        message_sxth.textContent="Humidity: "+data.humidity
        }
    })
    
    
})