// EXERCÍCIO DA CONTA BANCÁRIA
//

//PROPRIEDADES DA CONTA BANCÁRIA
let conta = {
    numerodaconta: 6573636,
    saldo: 10,
    nomedotitular: 'David da silva sousa',
    deposito: function (quantidadeDinheiro) {return conta.saldo + quantidadeDinheiro},
    saque: function (quantiaRetirada) {
        if (quantiaRetirada>conta.saldo) {return "Fundos Insuficientes"}
        return conta.saldo - quantiaRetirada;
    }
}

//CRIANDO OBJETOS E PROPRIEDADES  COM A FUNÇAO CONSTRUTORA
function Conta2 (deposito, saque, nomedotitular) {
    this.deposito = deposito,
    this.saque = saque,
    this.nomedotitular = nomedotitular;
}

// CRIANDO CONTA2 COM NOVO SALDO ------> FUNÇAO CONSTRUTORA
let novaConta = new Conta2(10, 20, 'david da silva')



console.log(novaConta);


