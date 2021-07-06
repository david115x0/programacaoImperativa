// Passo 1 E PASSO 2
criarAluno=(nome, quantidadeDeFaltas, notas) => {
    let aluno = {};
    aluno.nome = nome;
    aluno.quantidadeDeFaltas = quantidadeDeFaltas;
    aluno.notas = notas;

    function media() {
        return aluno.media = aluno.notas.reduce(function(acumulador, numero){
            return (acumulador+numero / aluno.notas.length);
        });
    }
    aluno.media = media;

    function faltas() {
        return aluno.faltas = aluno.quantidadeDeFaltas + 1;
    }
    aluno.faltas =faltas;
    
    return aluno;
}

//EXEMPLO
let aluno1 = criarAluno('david', 2, [5, 5, 5, 5, 5]);
aluno1.faltas();
aluno1.media();
console.log(aluno1);

module.exports = {criarAluno};

