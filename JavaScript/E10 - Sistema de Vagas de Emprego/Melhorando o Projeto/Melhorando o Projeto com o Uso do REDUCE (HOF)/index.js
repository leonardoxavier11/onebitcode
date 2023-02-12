//Cadastros dos Arrays vazios
const vagas = [];

//Funções
function listarVagas() {
    if (vagas.length === 0) {
        alert("Não há vagas cadastradas");
        return
    }

    //Ao invés de usar o "for" para iterar o array e ir atualizando uma string. Usamos o REDUCE
    const vagasCadastradas = vagas.reduce((textoFinal, vaga, indice) => {
        //INDICE DA VAGA, NOME DA VAGA, QNT CANDIDATOS
        textoFinal += "indice: " + indice
        textoFinal += "\n" + vaga.nome
        textoFinal += "\nQuantidade Candidatos: " + vaga.nomeDosCandidatos.length + "\n\n"
        return textoFinal
    }, "")
    alert(vagasCadastradas)
}

function novaVaga() {
    //Cadastro variável "novaVaga" como um objeto
    const novaVaga = {};

    //Propriedades do objeto e já cria um array vazio para o "nome dos candidatos"
    novaVaga.nome = prompt("Qual o nome da vaga?");
    novaVaga.descricao = prompt("Qual a descrição da vaga?");
    novaVaga.dataLimite = prompt("Qual a data limite para esta vaga?");
    novaVaga.nomeDosCandidatos = [];

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
}

function visualizarVagas() {
    const indiceVaga = parseInt(prompt("Qual o indice da vaga que você quer visualizar com mais detalhes?"));
    if (indiceVaga >= vagas.length || indiceVaga < 0) {
        alert("Não há nenhuma vaga cadastrada para o indice digitado");
        return
    }
    alert(
        "Indice da vaga: " + indiceVaga +
        "\nNome da Vaga: " + vagas[indiceVaga].nome +
        "\nDescrição da Vaga: " + vagas[indiceVaga].descricao +
        "\nData Limite: " + vagas[indiceVaga].dataLimite +
        "\nQuantidade de Candidatos: " + vagas[indiceVaga].nomeDosCandidatos.length +
        "\nNome dos Candidatos: " + vagas[indiceVaga].nomeDosCandidatos
    )
}

function novoCandidato() {
    const nomeCandidato = prompt("Qual o nome do candidato?");
    const indiceVaga = parseInt(prompt("Qual o indice da vaga que você quer atrelar esse candidato?"));

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
}

function excluirVaga() {
    const indiceVaga = parseInt(prompt("Qual o indice da vaga que você quer excluir?"));

    if (indiceVaga < vagas.length) {
        const confirmacao = confirm(
            "Por favor, confirme se é mesmo a vaga abaixo que você deseja excluir" +
            "\n\nIndice da vaga: " + indiceVaga +
            "\nNome: " + vagas[indiceVaga].nome +
            "\nDecrição: " + vagas[indiceVaga].descricao +
            "\nData Limite: " + vagas[indiceVaga].dataLimite
        );

        //Aqui estamos tratando a variável "confirmacao" como true (Se confirmacao for "true", então faça)
        if (confirmacao) {

            //O método "splice" permite adicionar ou remover elementos de um array em uma determinada posição.
            //-> 3 argumentos para adicionar (indexToAdd, 0, ...elementsToAdd)
            //-> 2 argumentos para excluir (indexToRemove, elementsToRemove);
            alert(vagas[indiceVaga].nome + " excluida com sucesso");
            vagas.splice(indiceVaga, 1);

        } else {
            alert("Processo cancelada, a vaga não foi excluir")
        }
    } else {
        alert("Não há nenhuma vaga cadastrada para o indice digitado");
    }

}

function exercutar() {
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
            case "1": listarVagas();
                break
            case "2": novaVaga();
                break
            case "3": visualizarVagas();
                break
            case "4": novoCandidato();
                break
            case "5": excluirVaga();
                break
            case "6": alert("Programa encerrado");
                break
            default: alert("Opção Inválida");
        }
    } while (opcao !== "6");
}

exercutar();