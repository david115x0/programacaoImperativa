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

function converter(array, valor){
    return array.filter(palavra=>palavra.length>valor);

}
console.log(converter(nomes, 7));


// EXERCICIO 3: Crie um array de objetos literais, onde cada objeto será um aluno e terá dois
//atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os
//alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa.
//(Analise qual método seria apropriado para este caso. Recomendamos que você
//consulte a documentação do MDN:

criarAluno=(materia, media) => {
    let aluno = {};
    aluno.materia = materia;
    aluno.media = media;

    function notaDoAluno(x){
        return x.sort();
    };
    aluno.notaDoAluno = notaDoAluno;
    function classe(x){
        return x.sort();
    };
    aluno.classe = classe;
    return aluno;
};
let aluno1 = criarAluno('matematica', 6);
aluno1.classe();
aluno1.classe.push(['david','carlos']);
console.log(aluno1);