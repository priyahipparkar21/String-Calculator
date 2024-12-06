const add = (input) => { 
    var sum =0;   
    const newInput = input.split("\n")
    for(let i=0; i<newInput.length; i++){
        var a = parseInt(newInput[i])
        if(a<0){
            throw "negative numbers not allowed"
        }
        sum += a
    }
    console.log("result",sum)
}


add("1\n2\n3")
module.exports= { add }