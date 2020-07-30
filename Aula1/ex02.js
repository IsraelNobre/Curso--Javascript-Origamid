// Crie uma função para verificar se um valor é Truthy
function is(dado){
  return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perQuadrado(lado){
  return lado+lado+lado+lado
}
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome,sobrenome){
  return nome + ' ' +sobrenome
  
}
// Crie uma função que verifica se um número é par
function par(num){
   nu = num % 2
  if(nu === 0){
    return true
  } else {
    return false
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function dado(dados){
  return typeof dados
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll',function(){
  console.log('Israel Nobre')
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
var paisesFalta = totalPaises - paisesVisitados
  return `Ainda faltam ${paisesFalta} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
