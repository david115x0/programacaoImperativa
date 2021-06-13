//
//

function comandos(andar, parar) {
    return andar +  ' e '  + parar;
}

function acaoCarro(andar, parar, callback){
    return 'comandos : '+ callback(andar, parar)
}

console.log(acaoCarro("O carro está andando", "O carro parou" , comandos))