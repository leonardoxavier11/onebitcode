// - A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

//Funções

//Cadastros dos Arrays vazios
const vagas = [];
const nomeDosCandidatos = [];

//Opcao do "switch"
let opcao = "";

//VAR Global
let indiceVaga;

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

            //Variável responsável por armazenar as informações contidas no "for" abaixo. Será zerada toda vez que a opção "1" for acionada
            let vagasCadastradas = "";

            //"For" responspavel por armazenar as informações citadas abaixo, de todas as vagas, na variável criada acima
            if (vagas.length > 0) {
                for (let i = 0; i < vagas.length; i++) {
                    vagasCadastradas += "\nIndice: " + i +
                        "\nNome da Vaga: " + vagas[i].nome

                    //"For" responsável por verificar se a propriedade "nomeDosCandidatos" existe ou não naquele indice, dentro do Array "vagas"
                    if (vagas[i].nomeDosCandidatos) {
                        vagasCadastradas += "\nQuantidade de Candidatos: " + vagas[i].nomeDosCandidatos.length + "\n\n"
                    } else {
                        vagasCadastradas += "\nQuantidade de Candidatos: 0" + "\n\n"
                    }
                }
                alert(vagasCadastradas);
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
            indiceVaga = parseInt(prompt("Qual o indice da vaga que você quer visualizar com mais detalhes?"));
            if (indiceVaga <= vagas.length) {

                let qntoCandidatos
                let nomeCandidatos
                if (vagas[indiceVaga].nomeDosCandidatos) {
                    qntoCandidatos = "Quantidade de Candidatos: " + vagas[indiceVaga].nomeDosCandidatos.length
                    nomeCandidatos = "Nome dos Candidatos: " + vagas[indiceVaga].nomeDosCandidatos
                } else {
                    qntoCandidatos = "Quantidade de Candidatos: 0"
                    nomeCandidatos = "Sem Candidatos"
                }

                alert(
                    "Indice da vaga: " + indiceVaga +
                    "\nNome da Vaga: " + vagas[indiceVaga].nome +
                    "\nDescrição da Vaga: " + vagas[indiceVaga].descricao +
                    "\nData Limite: " + vagas[indiceVaga].dataLimite +
                    "\n" + qntoCandidatos +
                    "\n" + nomeCandidatos
                )
            } else {
                alert("Não há nenhuma vaga cadastrada para o indice digitado");
            }

            break
        case "4":
            let nomeCandidato = prompt("Qual o nome do candidato?");
            indiceVaga = parseInt(prompt("Qual o indice da vaga que você quer atrelar esse candidato?"));

            //O indice digitado existe? Ou seja, o numero do indice é menor ou igual ao tamanho do array "vagas" ?
            if (indiceVaga <= vagas.length) {

                //Se sim, existe o array "NomedosCandidato" dentro do objeto que está no indice digitado ? (Se existe for "true", então faça)
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

                    //Se não, irá criar o array dentro do objeto e adiciona o nome do candidato, após confirmação
                } else {
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