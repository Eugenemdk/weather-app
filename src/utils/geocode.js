const request=require("postman-request")
const geocode=(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?worldview=cn&access_token=pk.eyJ1IjoibWVkeWFuaWtldWdlbmUiLCJhIjoiY2t4N2dhc3lmMDhzZDJubjN5dTN2d2FmaiJ9.hZ7UB7mE6bAJ9o-tmof-dA"
    request({url,json:true},(error,response,body)=>{
        if(error){
            callback("Unable to connect to location services",undefined);
        }else if(body.features.length===0){
                callback("getting error ,check place to search information for",undefined)
        }else{
            callback(undefined,{
                place_name:body.features[0].place_name,
                latitude:body.features[0].center[0],
                longtitude:body.features[0].center[1] 
            })
            //console.log(body.features[0].place_name);
            //console.log("Latitude: "+body.features[0].center[0]+", Longtitude: "+body.features[0].center[1])
        }

    })
}
module.exports.geocode=geocode