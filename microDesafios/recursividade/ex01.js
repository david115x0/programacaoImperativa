// FATORAÇÃO
//

function chamarFatorial (numero) {
    let resultado = numero;
    for (let i = 1; i < numero; i++) {
        resultado *= i;   
    }
    return resultado;
}
console.log(chamarFatorial(10));

