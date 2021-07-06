const cursos = require('./modulos/excurso');
console.log(cursos);

let novo = cursos.criarCurso('portugues', 7, 1);
novo.listaDeEstudantes();
novo.listaDeEstudantes.push('albert');
novo.listaDeEstudantes.push('marcos');
console.log(novo);

