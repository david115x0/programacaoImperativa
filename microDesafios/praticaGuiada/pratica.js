// 05/07/2021
//PRATICA GUIADA

let produtos = [
    {nomedoproduto: 'veja caixa com 100u', valordoproduto: 500, qualidadedoproduto: 90, status: true},
    {nomedoproduto: 'Leite Uht Lider 1l Integral caixa com 400u', valordoproduto: 100, qualidadedoproduto: 50, status: false},
    {nomedoproduto: 'Arroz Raroz 5kg fardo com 25u', valordoproduto: 500, qualidadedoproduto: 65, status: true},
]
const carrinho = produtos.filter((produto) =>{
    let valor = produto.valordoproduto
    let qualidade = produto.qualidadedoproduto
    let status = produto.status
})


console.log(selecionar(produtos[0]));
