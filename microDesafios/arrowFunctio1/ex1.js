// Arrow Functions (com parâmetros)
// FIZZBUZZ

let fizzBuzz = (a, b) => {
    for(let i=1; i<=100; i++){
        if (i%a==0 && i%b==0) {
            console.log("FIZZBUZZ")
        }else if (i%a==0) {return "FIZZ";
        }else if (i%b==0) {return "BUZZ";
        }else console.log(i);
    }
    
}
console.log(fizzBuzz(10, 3));


