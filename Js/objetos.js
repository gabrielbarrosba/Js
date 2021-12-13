const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Barros',
    idade: '20 anos',
    endereco:{
        rua: 'Av. Itabuna',
        numero: 9090
    }
}

// Atribuição via desestruturação
const {nome, sobrenome, endereco: {rua = 'Não existe', numero}} = pessoa
console.log(nome, sobrenome, rua, numero)