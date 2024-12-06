const add = (input) => { 
    var sum =0;   
    const newInput = input.split(",")
    for(let i=0; i<newInput.length; i++){
        sum += parseInt(newInput[i])
    }
    console.log("result",sum)
}



module.exports= { add }