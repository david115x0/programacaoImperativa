//
//

function comandos(andar, parar) {
    return andar +  ' e '  + parar;
}
let andar = "O carro está andando"
let parar = "O carro parou"

function acaoCarro(andar, parar, callback){
    return 'comandos : '+ callback(andar, parar)
}

console.log(acaoCarro(andar, parar, comandos))