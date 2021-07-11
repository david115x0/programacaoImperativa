// MICRO DESAFIO PASSO 5
//Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

cruso=(nome, quantidadeDeFaltas, notas, notaDeAprovacao) => {
    let aluno = {};
    aluno.nome = nome;
    aluno.quantidadeDeFaltas = quantidadeDeFaltas;
    aluno.notas = notas;
    aluno.notaDeAprovacao = notaDeAprovacao;
    

    function media() {
        return aluno.media = aluno.notas.reduce(function(acumulador, numero){
            return (acumulador+numero / aluno.notas.length);
        });
    }
    aluno.media = media;
    function aprovar(){
        if(aluno.media >= aluno.notaDeAprovacao && aluno.quantidadeDeFaltas <= 2){

        }if (aluno.media > aluno.notaDeAprovacao * 1.1) {
            return aluno.aprovar = true;
        }else return aluno.aprovar = false;
    }
    aluno.aprovar = aprovar;

    return aluno;
}

let aluno1 = cruso('david', 2, [5, 4, 4, 4, 1], 7);
aluno1.media();
aluno1.aprovar();
console.log(aluno1);



// MICRO DESAFIO PASSO 6
//Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.



// MICRO DESAFIO PASSO 6 Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).
// 