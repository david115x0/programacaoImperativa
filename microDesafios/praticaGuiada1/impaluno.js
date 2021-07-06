const moduloAluno = require('./modulos/exaluno');

// CRIANDO ALUNOS ATRAVES DA FUNÇAO CONSTRUTORA
let novo = moduloAluno.criarAluno('carlos', 865, [765, 878])

// CALCULANDO A MEDIA E A QUANTIDADE DE FALTAS
novo.media();
novo.faltas();

console.log(novo);

