const {getData,getRaw}=require('./utils')
function processData(){
    return `processed:${getData()}`
}
function processRaw(){
    return getRaw()
}
module.exports={processData,processRaw};