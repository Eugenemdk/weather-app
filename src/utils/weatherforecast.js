const request=require("postman-request")
const weatherforecast=(latitude,longtitude,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=32fff6c0d7b621a73d53b0095337b3b6&query=" + encodeURIComponent(latitude) + ","+ encodeURIComponent(longtitude) + "&units=m"
    request({url,json:true},(error,response,body)=>{
        if(error){
            callback("Unable to connect to location services",undefined)
        }else if(body.success==="false"){
            callback("Access Restricted - Your current Subscription Plan does not support HTTPS Encryption.",undefined)
        }else{
            console.log(body.current.temperature)
            console.log(body.current.feelslike)
            console.log(body.current.wind_speed)
            console.log(body.current.wind_degree)
            console.log(body.current.humidity)
            
            callback(undefined,{ 
                temperature:body.current.temperature,
                feelsLike:body.current.feelslike,
                windspeed:body.current.wind_speed,
                windDegree:body.current.wind_degree,
                humidity:body.current.humidity
            })
        }
    })
}
module.exports.weatherforecast=weatherforecast