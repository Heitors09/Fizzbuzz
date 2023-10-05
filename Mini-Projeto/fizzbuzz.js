 const resultado = fizzbuzz(5)

 console.log(resultado)

 function fizzbuzz(entrada){
    if (typeof entrada !== 'number'){
    return "não é um numero"
   }
    if(entrada % 5 === 0 && entrada % 3 === 0){
    return 'FizzBuzz'
    }
    if(entrada % 3 === 0){
     return 'Fizz'
    }
    if(entrada % 5 ===0){
    return 'Buzz'
    }
   return entrada 
    }