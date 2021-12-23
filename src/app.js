const express=require("express")
const path=require("path")
const hbs=require("hbs")
const res = require("express/lib/response")
const request=require("postman-request")
const geocode=require("./utils/geocode")
const forecast=require("./utils/weatherforecast")
const port=process.env.PORT || 5000
const app=express()


const publicPath=path.join(__dirname,"../public")
const viewsPath=path.join(__dirname,"../templates/views")
const partialPath=path.join(__dirname,"../templates/partials")

app.set("view engine","hbs")
app.set("views",viewsPath)
app.set("env","production")
hbs.registerPartials(partialPath)
app.use(express.static(publicPath))



app.get('',(req,res)=>{
    res.render("index",{
        title:"Weather app",
        message:"Main page",
        name:"Eugene Medianyk"
    })
})

app.get('/help',(req,res)=>{
    res.render("help",{
        title:"Weather app",
        message:"Help page",
        name:"Eugene Medianyk"
    })
})

app.get('/about',(req,res)=>{
    res.render("about",{
        title:"Weather app",
        message:"Description page",
        name:"Eugene Medianyk"
    })
})
app.get("/weather",(req,res)=>{
    if(!req.query.address){
        res.send({
            error:"No address provided"
        })
    }else{
        const place=req.query.address
        geocode.geocode(place,(error,{longtitude,latitude,place_name}={})=>{
if(error){
    return console.log("Error "+error)
}
            else if(!place){
               return res.send({
                error:"No place provided"
                })
            }
            else{
                forecast.weatherforecast(longtitude,latitude,(error,{temperature,feelsLike,windspeed,windDegree}={})=>{
                    return res.send({
                        place_name:place_name,
                        temperature:temperature,
                        feelsLike:feelsLike,
                        windspeed:windspeed, 
                        windDegree:windDegree,
                    })
                })
            }
        })
        
    }
    
})

app.get("/help/*",(req,res)=>{
    res.render("err_article",{
        title:"Weather app",
        message:"Article error page",
        name:"Eugene Medianyk"
    })
})
app.get("*",(req,res)=>{
    res.render("error404",{
        title:"Weather app",
        message:"ERROR 404 page",
        name:"Eugene Medianyk"
    })
})
app.listen(port,()=>{
    console.log("Server started on port "+port)
})

