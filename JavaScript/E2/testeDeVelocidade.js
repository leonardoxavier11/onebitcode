// Escreva um programa em JavaScript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as valocidades são iguais se este for o caso)

alert("Olá, começamos agora o exercício 2 do módulo JavaScript - Básico")

let car1 = prompt("Escreva o nome do primiero veículo")
let car2 = prompt("Escreva o nome do segundo veículo")

let vel1 = prompt("Agora, escreve a velocidade do " + car1 + ". Utilize apenas números")
let vel2 = prompt("Agora, escreve a velocidade do " + car2 + ". Utilize apenas números")

// Como temos 3 posibilidades de retornos (>, < ou =), não é possível utilizar o operador ternário

if (vel1 > vel2) {
    alert("O " + car1 + " é mais rápido.")
}
else if (vel1 < vel2) {
    alert("O " + car2 + " é mais rápido")
}
else {
    alert("As velocidades são iguais")
}