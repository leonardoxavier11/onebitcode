
// - A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.

// - A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

// Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.
// ------------------------------//-----------------------------

//Funções

//Cadastros dos Arrays vazios
const vagas = [];
const nomeDosCandidatos = [];

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
        "\n6 - Sair"
    );

    switch (opcao) {

        case "1":
            alert("Atualmente há " + vagas.length + " disponíveis");
            //Variável responsável por armazenar as informações contidas no "for" abaixo. Será zerada toda vez que a opeção "1" for acionada
            let vagasCadastradas = "";

            //"For" responspavel por armazenar as informações citadas abaixo, de todas as vagas, na variável criada acima
            if (vagas.length > 0) {
                if (nomeDosCandidatos.length > 0) {
                    for (let i = 0; i < vagas.length; i++) {
                        vagasCadastradas += "\nIndice: " + i +
                            "\nNome da Vaga: " + vagas[i].nome +
                            "\nQuantidade de Candidatos: " + vagas[i].nomeDosCandidatos.length + "\n\n"
                    }
                } else {
                    for (let i = 0; i < vagas.length; i++) {
                        vagasCadastradas += "\nIndice: " + i +
                            "\nNome da Vaga: " + vagas[i].nome +
                            "\nQuantidade de Candidatos: 0"
                    }
                    alert(vagasCadastradas);
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
            let nomeCandidato = prompt("Qual o nome do candidato?");
            let indiceVaga = parseInt(prompt("Qual o indice da vaga que você quer atrelar esse condidato?"));

            //O indice digitado existe? Ou seja, o numero do indice é menor ou igual ao tamanho do array "vagas" ?
            if (indiceVaga <= vagas.length) {

                //Se sim, existe o array "NomedosCandidato" dentro do objeto que está no indice digitado ?
                if (vagas[indiceVaga].nomeDosCandidatos) {

                    //Se sim, então adiciona ao array um novo nome do candidato, após confirmação
                    const confirmacao = confirm(
                        "Por favor, confirme as informações para atrelar o candidato à vaga" +
                        "\n\nCandidato: " + nomeCandidato +
                        "\n\nNome: " + vagas[indiceVaga].nome +
                        "\nDecrição: " + vagas[indiceVaga].descricao +
                        "\nData Limite: " + vagas[indiceVaga].dataLimite
                    );

                    //Aqui estamos tratando a variável "confirmacao" como true (Se confirmacao for "true", então faça)
                    if (confirmacao) {
                        //Adicionar o objeto ao final do Array com a função "push"
                        vagas[indiceVaga].nomeDosCandidatos.push(nomeCandidato)
                        alert(nomeCandidato + " cadastrado com sucesso");
                    } else {
                        alert("Candidato não foi atrelado")
                    }

                    //Se não, cria o array dentro do objeto e adiciona o nome do candidato
                } else {
                    vagas[indiceVaga].nomeDosCandidatos = [];
                    vagas[indiceVaga].nomeDosCandidatos.push(nomeCandidato);

                    const confirmacao = confirm(
                        "Por favor, confirme as informações para atrelar o candidato à vaga" +
                        "\n\nCandidato: " + nomeCandidato +
                        "\n\nNome: " + vagas[indiceVaga].nome +
                        "\nDecrição: " + vagas[indiceVaga].descricao +
                        "\nData Limite: " + vagas[indiceVaga].dataLimite
                    );

                    //Aqui estamos tratando a variável "confirmacao" como true (Se confirmacao for "true", então faça)
                    if (confirmacao) {
                        //Adicionar o objeto ao final do Array com a função "push"
                        vagas[indiceVaga].nomeDosCandidatos = [];
                        vagas[indiceVaga].nomeDosCandidatos.push(nomeCandidato);
                        alert(nomeCandidato + " cadastrado com sucesso");
                    } else {
                        alert("Candidato não foi atrelado")
                    }
                }
            } else {
                alert("Não há nenhuma vaga cadastrada para o indice digitado");
            }

            break
        case "5":
            break
        case "6": alert("Programa encerrado");
            break
        default: alert("Opção Inválida");
    }


} while (opcao !== "6");