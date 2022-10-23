/* Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou */

const turista = prompt("Olá turista, qual o seu nome?") // Foi usado "const", pq essa pergunta só será feita uma unica vez
const jaVisitou = prompt(turista + " Você já visitou alguma cidade? [Sim] [Não]") // Foi usado "const", pq essa pergunta só será feita uma unica vez

let cidade = ""
let cidades = ""
let contador = 0

let continuarPergunta = ""

if (jaVisitou === "Sim") {
    cidade = prompt("Legal, e qual o nome da cidade?")
    // cidades = cidades + " - " + cidade + "\n" --> Ou seja, a variável "cidades"(plural) é igual ela mesma + a variável "cidade" (singular), conforme a resposta de cada "prompt"
    cidades += " - " + cidade + "\n"
    contador++
    continuarPergunta = prompt("Muito legal! E você já visitou outra cidade? [Sim] [Não]")
    while (continuarPergunta === "Sim") {
        cidade = prompt("Qual o nome?")
        cidades += " - " + cidade + "\n"
        contador++
        continuarPergunta = prompt("Já visitou mais alguma cidade? [Sim] [Não]")
    }
}
else {
    alert("Tudo bem. Como não há cidades visitadas, o programa está sendo encerrado")
}

alert(
    "Turista, seu nome é " + turista +
    "\n\nVocê visitou as seguintes cidades: \n" + cidades +
    "\n\nE no total são: " + contador)

