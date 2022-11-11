/* Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
I) Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
II) O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
III) O menu deve ter a opção de salvar um imóvel.
IV) Para salvar um novo imóvel o programa deve pedir as seguintes informações:
- Nome do proprietário.
- Quantidade de quartos.
- Quantidade de banheiros.
- Se possui garagem.
V) O menu também deve ter a opção de mostrar todos os imóveis salvos. */

//Cadastro o Array vazio
const imoveisCadastrados = [];

//Opcao do "switch"
let opcao = "";

do {
    //Menu interativo
    opcao = prompt("Bem vindo!" +
        "\n\nAtualmente você tem " + imoveisCadastrados.length + " imóveis cadastrados. " + "Por favor, escolha uma das opções." +
        "\n\n1 - Cadastrar novo imóvel" +
        "\n2 - Mostrar todos os imóveis cadastrados" +
        "\n3 - Sair"
    );

    switch (opcao) {
        case "1":
            //Cadastro variável "novoImovel" como um objeto
            const novoImovel = {};

            //Propriedades do objeto
            novoImovel.identificacao = prompt("Qual a identificação do imóvel?");
            novoImovel.proprietario = prompt("Qual o nome do proprietário?");
            novoImovel.qntQuatos = prompt("Quantos quartos há no imóvel?");
            novoImovel.qntBanheiros = prompt("Quantos banheiros há no imóvel??");
            novoImovel.garagem = prompt("Possui garagem? (Sim/Não)");

            //Msg de variável cadastrada
            const confirmacao = confirm(
                "Salvar este imóvel?" +
                "\n\nIdentificação: " + novoImovel.identificacao +
                "\nProprietário: " + novoImovel.proprietario +
                "\nQuartos: " + novoImovel.qntQuatos +
                "\nBanheiros: " + novoImovel.qntBanheiros +
                "\nPossui Garagem? " + novoImovel.garagem
            );

            //Aqui estamos tratando a variável "confirmacao" como true (Se confirmacao for "true", então faça)
            if (confirmacao) {
                //Adicionar o objeto ao final do Array com a função "push"
                imoveisCadastrados.push(novoImovel);
                alert(novoImovel.identificacao + " cadastrado com sucesso");
            } else {
                alert("Imóvel não foi cadastrado")
            }

            break

        case "2":
            //Variável tipo "string" que irá consolidar cada indice do Array para exibição e também responsável por "zerar" a cada vez que passar pelo "case: 2"
            let imoveis = "";

            //Aqui usamos for para pecorrer pelos indices do array e retornar apenas a propriedade de "identificação" do objeto que está naquele indice (i)
            for (i = 0; i < imoveisCadastrados.length; i++) {
                imoveis += "- " + imoveisCadastrados[i].identificacao + "\n";
            }

            //Exibição em tela
            alert("Aqui estão os imóveis cadastrados atualmente: \n\n" + imoveis);

            //Variável "detalhes" para usar no próximo "pompt"
            let detalhes = "";
            detalhes = prompt("Gostaria de ver os detalhes dos imóveis? (Sim/Não)");
            if (detalhes = "Sim") {

                //Aqui usamos for para pecorrer pelos indices do array e retornar todas as propriedades de cada objeto que está naquele indice (i)
                for (i = 0; i < imoveisCadastrados.length; i++) {
                    alert("Identificação: " + imoveisCadastrados[i].identificacao +
                        "\n\nProprietário: " + imoveisCadastrados[i].proprietario +
                        "\nQuantidade de Quartos: " + imoveisCadastrados[i].qntQuatos +
                        "\nQuantidade de Banheiros: " + imoveisCadastrados[i].qntBanheiros +
                        "\nPossui Garagem? " + imoveisCadastrados[i].garagem)
                }
            } else {
                alert("Ok, retornando ao menu inicial")
            }
            break
        case "3": alert("Programa encerrado")
            break
        default: alert("Opção inválida");
    }

} while (opcao !== "3");

//Exibir o Array atualizado no console apenas para verificação.
console.log(imoveisCadastrados);

