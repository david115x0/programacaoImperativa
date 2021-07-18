/* 2. Crie uma função assíncrona que irá receber um parâmetro x. Crie três
variáveis: a, b e c dentro do corpo da função. Cada uma dessas variáveis
receberá um await da função do passo anterior. Você deve passar como
parâmetros dessa função os números 10, 20 e 30, respectivamente.*/

const dobro = require('./ex01');


async function func(x) {
    let a = dobro.dobrar(10);
    let b = dobro.dobrar(20);
    let c = dobro.dobrar(30);
    
}


/* 3. Retorne a soma de todos esses elementos, inclusive o parâmetro da
função assíncrona.*/


func().then(()=> {
    console.log(func);
})