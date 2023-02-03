// Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

// - Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
//     - Listar vagas disponíveis
//     - Criar um nova vaga
//     - Visualizar uma vaga
//     - Inscrever um candidato em uma vaga
//     - Excluir uma vaga
//     - Sair
// - A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
// - A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
// - A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
// - A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
// - A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

// Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.
// ------------------------------//-----------------------------

//Cadastro o Array vazio
const vagas = [];

//Opcao do "switch"
let opcao = "";

do {
    //Menu interativo
    opcao = prompt("Escolha a opção:" +
        "\n\n1 - Listar vagas disponíveis" +
        "\n2 - Criar um nova vaga" +
        "\n3 - Visualizar uma vaga" +
        "\n4 - Inscrever um candidato em uma vaga" +
        "\n5 - Excluir uma vaga" +
        "\n6 - Sair");

    switch (opcao) {
        case "1": alert("Atualmente há " + vagas.length + " disponíveis");
            if (vagas.length > 0) {
                for (let i = 0; i < vagas.length; i++) {
                }
            }

            break
        case "2":
            //Cadastro variável "novaVaga" como um objeto
            const novaVaga = {};

            //Propriedades do objeto
            novaVaga.nome = prompt("Qual o nome da vaga?");
            novaVaga.descricao = prompt("Qual a descrição da vaga?");
            novaVaga.dataLimite = prompt("Qual a data limite para esta vaga?");

            //Msg de variável cadastrada
            const confirmacao = confirm(
                "Salvar esta vaga?" +
                "\n\nNome: " + novaVaga.nome +
                "\nDecrição: " + novaVaga.descricao +
                "\nData Limite: " + novaVaga.dataLimite
            );

            //Aqui estamos tratando a variável "confirmacao" como true (Se confirmacao for "true", então faça)
            if (confirmacao) {
                //Adicionar o objeto ao final do Array com a função "push"
                vagas.push(novaVaga);
                alert(novaVaga.nome + " cadastrado com sucesso");
            } else {
                alert("Vaga não foi cadastrado")
            }

            break
        case "3":
            break
        case "4":
            break
        case "5":
            break
        case "6": alert("Programa encerrado");
            break
        default: alert("Opção Inválida");
    }


} while (opcao !== "6");