//
let arquivoJson = [
    {"id":1,"first_name":"Claire","last_name":"Zuan","email":"czuan0@cdbaby.com","gender":"Genderfluid","ip_address":"168.18.31.69"},
    {"id":2,"first_name":"Alleen","last_name":"Wilfinger","email":"awilfinger1@comsenz.com","gender":"Polygender","ip_address":"23.10.236.184"},
    {"id":3,"first_name":"Billie","last_name":"Burnsides","email":"bburnsides2@wikimedia.org","gender":"Male","ip_address":"177.110.39.151"}
]

let arquivoPronto = true;

// MICRO DESAFIO 1

//CRIANDO PROMISE
const promessa = new Promise((resolve, reject) =>{
    if(arquivoPronto == false) {
        reject("A CONVERÇÃO NÃO FUNCIONOU")
    } else {
        resolve(JSON.stringify(arquivoJson))
    }
    
})

promessa.then ((resolve) => {
    const dados = JSON.parse(resolve)
    console.log(dados)
}).catch((reject) => {
    console.log(reject)
});