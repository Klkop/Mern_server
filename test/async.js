//how we can perform unit test
function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },1000);

}
function MyData(callback){
    setTimeout(()=>{
        callback({id:101});
    },1000)
}
module.exports={fetchData,MyData};