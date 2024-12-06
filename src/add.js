const add = (input) => { 
    var sum =0;   
    const newInput = input.split("\n")
    for(let i=0; i<newInput.length; i++){
        sum += parseInt(newInput[i])
    }
    console.log("result",sum)
}


add("1\n2\n3")
module.exports= { add }