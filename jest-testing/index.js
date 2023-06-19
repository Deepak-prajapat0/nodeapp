registerUser=function(name){
    if(!name) throw new Error ("Username required")
    return {id:new Date().getTime(),name:name}
}

fizzbuzz = function(num){
    if(num % 3 ===0 && num %5===0){
        return "FizzBuzz"
    }
    else if(num %5===0){
        return "Fizz"
    }
    else if(num %3 ===0){
        return "Buzz"
    }
    else{
        return num
    }
}
module.exports={registerUser,fizzbuzz}