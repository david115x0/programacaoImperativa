// CALCULAR NOTAS
//Gostaríamos de calcular a média do aluno e se o aluno foi aprovado com base na nota de aprovação que será dada.


let aluno = {
    nome: 'pedro',
    numeroDoArquivo: 45,
    listaDeNotas: function() {}
}
function decidir () {
    if (aluno.listaDeNotas >= 7) {
        return "Aluno Aprovado";
    }else if (aluno.listaDeNotas <= 7) {
        return "Aluno Reprovado"
    }
}
console.log(decidir(aluno.listaDeNotas));

// USO DO .REDUCE
//let resultado = aluno.reduce((elementoAnterior, elementoAtual) => elementoAnterior + elementoAtual.listaDeNotas, 0);
//console.log(resultado);
function Aluno (nome, numeroDoarquivo, listaDeNotas)