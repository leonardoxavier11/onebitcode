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

const imoveisCadastrados = [] //Cadastro o Array vazio
let opcao = ""; //Opcao do "switch"

do {
    opcao = prompt("Bem vindo!\n\n" +
        "Atualmente você tem " + imoveisCadastrados.length + " imóveis cadastrados. " + "Por favor, escolha uma das opções.\n\n" +
        "1 - Cadastrar novo imóvel\n" +
        "2 - Mostrar todos os imóveis cadastrados\n" +
        "3 - Sair"
    ); //Menu interativo

    switch (opcao) {
        case "1": const novoImovel = {}; //Cadastro variável "novoImovel" como um objeto

            //Propriedades do objeto
            novoImovel.identificacao = prompt("Qual a identificação do imóvel?");
            novoImovel.proprietário = prompt("Qual o nome do proprietário?");
            novoImovel.qntQuatos = prompt("Quantos quartos há no imóvel?");
            novoImovel.qntBanheiros = prompt("Quantos banheiros há no imóvel??");
            novoImovel.garagem = prompt("Possui garagem? (Sim/Não)");

            imoveisCadastrados.push(novoImovel); //Adicionar o objeto ao final do Array
            alert(novoImovel.identificacao + " cadastrado com sucesso"); //Msg de variável cadastrada
            break

        case "2":
            let imoveis = ""; //Variável tipo "string" que irá consilidar cada indice do Array para exibição
            for (i = 0; i < imoveisCadastrados.length; i++) {
                imoveis += "- " + imoveisCadastrados[i].identificacao + "\n";
            } //for apenas na propriedade de "identificação" do objeto

            alert("Aqui estão os imóveis cadastrados atualmente: \n\n" + imoveis); //Exibição em tela
            break
        case "3": alert("Programa encerrado")
            break
        default: alert("Opção inválida");
    }


} while (opcao !== "3");

console.log(imoveisCadastrados); //Exibir o Array atualizado no console

