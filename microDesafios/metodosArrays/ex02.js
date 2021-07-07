// METODOS AVANÇADOS DE ARRAYS
//


// 1. EXERCICIO
let numeros = [6, 6, 8, 9, 6]
 function novoValor (x) {
    let novo = x.reduce((a, b)=>{
        return a+b
    })
    let final = x.map((y)=>{
        return y/novo;
    })
    return final;
};

console.log(novoValor(numeros));

// 2.EXERCICIO
// com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado

let nomes = ['carlos', 'albert', 'maria', 'joao'];
let resultado = nomes.toString();
console.log(resultado);

value = nomes.join("")
console.log(value.length)

// USAR O SPLIT PARA FAZER esse exercicio
// DAR SPLIT COM VIRGULA PARA CRIRAR OUTROS ARRAYS SEPARADOS, PERFEITO!!!

console.log(resultado.split(','));

function iterar(palavra, valor1){
    
}


// EXERCICIO 3

let objetos = [];




