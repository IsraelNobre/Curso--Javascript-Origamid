// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa = {
  nome: "israel",
  sobrenome: "nobre",
  Idade: 26,
  Profissão: "Aux.adm",
};
// Crie um método no objeto anterior, que mostre o seu nome completo
var nomecompleto = `${pessoa.nome} ${pessoa.sobrenome}`;

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachoro = {
  Raca: "labrador",
  cor: "preto",
  idade: "10 anos",
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latir";
    } else {
      return "Não Late";
    }
  },
};
