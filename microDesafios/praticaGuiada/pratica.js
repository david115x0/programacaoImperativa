// 05/07/2021
//PRATICA GUIADA

const produtos = [
    {nomedoproduto: 'veja caixa com 100u', valordoproduto: 500, qualidadedoproduto: 90, status: true},
    {nomedoproduto: 'Leite Uht Lider 1l Integral caixa com 400u', valordoproduto: 100, qualidadedoproduto: 50, status: false},
    {nomedoproduto: 'Arroz Raroz 5kg fardo com 25u', valordoproduto: 500, qualidadedoproduto: 65, status: true},
];

produtos.valordoproduto;

let carrinho = produtos.filter( selecionar => {
    if(selecionar.valordoproduto>=482 && selecionar.valordoproduto<=1600) {
        return selecionar.valordoproduto;
    }else if(selecionar.qualidadedoproduto<60){
     return selecionar.qualidadedoproduto=false;
    }else if (selecionar.status != true){return selecionar.status=false;}
    
});

console.log(carrinho);

let calcular = carrinho.reduce((resultado, quantidade)=>{
    return (resultado+quantidade.valordoproduto);
},0)
console.log(calcular);

