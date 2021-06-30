// EXERCÍCIO DO RESTAURANTE
//
const menu = ["estrogonoff", "batatinha com óleos essencias", "contra file", "nao temos carne de porco"] 

function Restaurante (nome, cardapio) {
    this.nome = nome,
    this.cardapio = cardapio
}
function entrada () {
    return 'bem vindo ao restaurante '+ this.nome + ' de uma olhadinha em ---> ' + this.cardapio;
}
console.log(entrada(Restaurante('davs', menu)))

