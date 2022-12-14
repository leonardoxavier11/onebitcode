// Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let filaDeCartas = ["Às", "Rei", "Rainha"];

do {
    let cartas = "";
    for (i = 0; i < filaDeCartas.length; i++) {
        cartas += filaDeCartas[i] + "\n"
    }

    opcao = prompt("Atualmente há " + filaDeCartas.length + " cartas no baralho. E elas são\n\n" + //No lugar o filaDeCartas.length, poderia ter utilizado o i
        cartas + "\nEscolha uma opção: " +
        "\n\n 1 - Adicionar nova carta" +
        "\n 2 -Puxar uma carta do baralho" +
        "\n 3 - Sair")

    switch (opcao) {
        case "1": let novaCarta = prompt("Qual carta deseja adicionar ao baralho?")
            if (novaCarta.length > 0) {
                filaDeCartas.push(novaCarta)
                alert(novaCarta + " foi adicionada")
            } else {
                alert("Carta inválida")
            }
            break
        case "2": if (filaDeCartas.length > 0) {
            let cartaRemovida = filaDeCartas.pop()
            alert(cartaRemovida + " foi removida")
        } else {
            alert("Não há cartas no baralho")
        }
            break
        case "3": alert("Encerrando programa")
            break
        default: alert("Opção inválida")
    }

} while (opcao !== "3")