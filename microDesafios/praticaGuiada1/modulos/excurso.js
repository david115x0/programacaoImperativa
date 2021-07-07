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
curso1.listaDeEstudantes.push('carlindo');
curso1.listaDeEstudantes.push('nathalia');

let curso2 = criarCurso('matematica', 8, 1);
curso2.listaDeEstudantes();
curso2.listaDeEstudantes.push('david');
curso2.listaDeEstudantes.push('maicon');
console.log(curso2);


module.exports = {criarCurso};




