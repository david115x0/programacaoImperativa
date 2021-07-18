/* 1. Crie uma função, que após 5 segundos, dobre o resultado do número
passado como parâmetro. Essa função deverá retornar uma Promise. Use
o setTimeOut como temporizador*/
function func1(numero) {
    return new Promise((resolve => {
        setTimeout(()=>resolve(numero * 2), 5000)
    }))
}
async function dobrar(x) {
    let numero = await func1(x);
    console.log('Dobrando o numero...'+numero);

}


module.exports = {dobrar};