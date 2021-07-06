// PASSO 3 E 4


// CRIANDO CURSOS
criarCurso=(nomeDoCurso, notaDeAprovacao, faltasMaximas)=>{
    let curso = {};
    curso.nomeDoCurso = nomeDoCurso;
    curso.notaDeAprovacao = notaDeAprovacao;
    curso.faltasMaximas = faltasMaximas;

    function listaDeEstudantes(){
        curso.listaDeEstudantes = ['professor']
    }

    curso.listaDeEstudantes = listaDeEstudantes;

    return curso;
}

let curso1 = criarCurso('ingles', 7, 2);
curso1.listaDeEstudantes();
curso1.listaDeEstudantes.push('maria clara');
curso1.listaDeEstudantes.push('carlos');
console.log(curso1);

module.exports = {criarCurso};




