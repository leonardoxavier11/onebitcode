/* Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens. */

//VAR
let name1 = prompt("Escreva o nome do primeiro personagem")
let atk = prompt("Agora escreva seu poder de ataque")

let name2 = prompt("Escreva o nome do segundo personagem")
let life = prompt("Qual a quantidade de pontos de vida?")
let def = prompt("Qual o poder o seu poder de defesa?")
let shield = prompt("Ele possui escudo? [Sim] ou [Não]")

let dano = atk - def
let resultado = life - dano

// Algoritmo
if (atk > def) {
    if (shield == "Sim") {
        console.log(dano / 2)
        alert("O " + name2 + " sofreu " + dano + " e agora seus pontos de vida são " + resultado)
    }
    else if (shield == "Não") {
        console.log(dano)
        alert("O " + name2 + " sofreu " + dano + " e agora seus pontos de vida são " + resultado)
    }
    else {
        alert("Você digitou um valor inválido quando pergutado sobre o escudo")
    }
}
else {
    alert("O " + name2 + " não sofreu danos e seus pontos de vidas continuam em " + resultado)
}


