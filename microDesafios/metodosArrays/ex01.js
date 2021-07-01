/* 1- Crie um array de números pares, e utilizando a função .map() nesse array, 
crie um novo array com apenas números ímpares*/

let pares = [2, 4, 6, 8, 10];

let impar = pares.map(function (n){
    return n+1;
});
console.log(impar);

/* 2- Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter()
    para obter apenas esses dois índices com o nome Maria.*/

let nomes = ['maria', 'maria','joao', 'cleiton', 'marcos'];

let selecionar = nomes.filter(function (nome) {
    return nome == 'maria' ;
})
console.log(selecionar);

/* 3- Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
  [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7” */

let numeros = [20, 800, 500, 83];
let separador = numeros.reduce(function (a, b) {
    return `${a} - ${b}`}
    );
console.log(separador)

/*Crie um array de animais, após isso passe por cada índice utilizando o .forEach()
 e imprima a frase “O animal é NOME_DO_ANIMAL”. */

 let animais = ['gato','cachorro', 'passarinho', 'leao'];

let percorrer = animais.forEach(function (animal) {
    console.log("O animal É " + animal)
});
