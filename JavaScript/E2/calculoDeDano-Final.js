/* Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens. */

//VAR
// const -> Variável que não é possível mudar o seu valor
// let -> Variável que é possível mudar o seu valor

const name1 = prompt("Escreva o nome do primeiro personagem")
const atk = prompt("Agora escreva seu poder de ataque")

const name2 = prompt("Escreva o nome do segundo personagem")
let life = prompt("Qual a quantidade de pontos de vida?") // Essa vaiável fica como "let", pois a mesma terá um novo valor após o calculo do "dano"
const def = prompt("Qual o poder o seu poder de defesa?")
let shield = prompt("Ele possui escudo? [Sim] ou [Não]") // Essa variável fica como "let", pois precisamos validar e aceitar um novo valor quando a mesma for diferente de "Sim" ou "Não"

while(shield !== "Sim" && shield !== "Não") {
    alert("Você digitou um valor inválido quando perguntado sobre o escudo")
    shield = prompt("Ele possui escudo? [Sim] ou [Não]")
}

let dano = atk - def

// Algoritmo
if (atk > def && shield === "Sim") {
    dano /= 2
    life -= dano //Necessário para atualizar a variável "resultado" com o novo valor do dano, que foi dividido por 2
    alert("O " + name2 + " sofreu " + dano + " e agora seus pontos de vida são " + life)
}
else if (atk > def && shield === "Não") {
    life -= dano
    alert("O " + name2 + " sofreu " + dano + " e agora seus pontos de vida são " + life)
}
else {
    alert("O " + name2 + " não sofreu danos e seus pontos de vidas continuam em " + life)
}

alert(
    name1 +
    "\nPoder de ataque: " + atk + "\n\n" +
    name2 + 
    "\nPontos de vida " + life +
    "\nPoder de defesa: " + def +
    "\nPossui escudo? " + shield
)