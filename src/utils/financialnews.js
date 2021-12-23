const request=require("postman-request")
const getFinancialNews=(tag,callback)=>{
    const url="http://api.financelayer.com/v1/news?access_key=74453ab3e8734af7315d45f150ea1f58&tags="+encodeURIComponent(tag)+""
    request({url:url,json:true},(error,response,body)=>{
        if(error){
                callback("Unable to connect to location services",undefined)
        }else{
            callback(undefined,{
                title:body.data[0].title,
                description:body.data[0].description,
                source:body.data[0].source
            })
        }
    })
}
module.exports.getFinancialNews=getFinancialNews