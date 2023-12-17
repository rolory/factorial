const prompt =require( "prompt");
const factorial=require("./factorial.js");
prompt.get('n',(err,result)=>{
    if(err){
        console.log(err);
    } else {
        console.log(factorial(result.n));
    }
});
