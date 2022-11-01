/* Escreva um programa em javascript que: 
1- comece perguntando pela quantidade inicial de dinheiro disponível 
2- e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. 
3- Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. 
4- A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor.
5- A opção de sair deve encerrar o programa.*/


//VAR
const name1 = prompt("Qual o seu nome?");
let saldo = 0;
let adicionar = 0;
/* let subtrair = 0; -> Ao utilize a função do "case-2", não é necessário criar uma variável para "subtrair" */
let opcao = "";


saldo = prompt("Olá " + name1 + " qual o seu saldo inicial?");
saldo = parseFloat(saldo); // Toda vez que usa o "prompt", sempre irá retornar uma string

do {
    opcao = prompt(
        "Seu saldo atual é: " + saldo + " reais" +
        "\n\nAgora escolha umas das opções" +
        "\n 1 - Adicionar Dinheiro" +
        "\n 2 - Remover Dinheiro" +
        "\n 3 - Sair"
    );


    switch (opcao) {
        case "1":
            adicionar = prompt("Quanto deseja adicionar?");
            adicionar = parseFloat(adicionar); // Toda vez que usa o "prompt", sempre irá retornar uma string
            saldo += adicionar;
            break
        case "2":
            saldo -= parseFloat(prompt("Quanto deseja subtrair?")); // Ao essa função, não é necessário criar uma variável para "subtrair" + Toda vez que usa o "prompt", sempre irá retornar uma string
            break
        case "3":
            alert("Programa encerrado");
            break
        default:
            alert("Opção inválida");
    }

} while (opcao !== "3");

