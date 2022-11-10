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
    //Menu interativo
    opcao = prompt("Bem vindo!\n\n" +
        "Atualmente você tem " + imoveisCadastrados.length + " imóveis cadastrados. " + "Por favor, escolha uma das opções.\n\n" +
        "1 - Cadastrar novo imóvel\n" +
        "2 - Mostrar todos os imóveis cadastrados\n" +
        "3 - Sair"
    ); 

    switch (opcao) {
        case "1": const novoImovel = {}; //Cadastro variável "novoImovel" como um objeto

            //Propriedades do objeto
            novoImovel.identificacao = prompt("Qual a identificação do imóvel?");
            novoImovel.proprietario = prompt("Qual o nome do proprietário?");
            novoImovel.qntQuatos = prompt("Quantos quartos há no imóvel?");
            novoImovel.qntBanheiros = prompt("Quantos banheiros há no imóvel??");
            novoImovel.garagem = prompt("Possui garagem? (Sim/Não)");

            imoveisCadastrados.push(novoImovel); //Adicionar o objeto ao final do Array
            alert(novoImovel.identificacao + " cadastrado com sucesso"); //Msg de variável cadastrada
            break

        case "2":
            let imoveis = ""; //Variável tipo "string" que irá consilidar cada indice do Array para exibição
            //Aqui usamos for apenas na propriedade de "identificação" do objeto
            for (i = 0; i < imoveisCadastrados.length; i++) {
                imoveis += "- " + imoveisCadastrados[i].identificacao + "\n";
            } 
            alert("Aqui estão os imóveis cadastrados atualmente: \n\n" + imoveis); //Exibição em tela
            let detalhes = "";
            detalhes = prompt("Gostaria de ver os detalhes dos imóveis? (Sim/Não)");
            if (detalhes = "Sim") {
                //Aqui usamos for para pecorrer todas as propriedades dos objetos que estão no array. Cada objeto está em um indice (i)
                for (i = 0; i < imoveisCadastrados.length; i++) {
                    alert("Identificação: " + imoveisCadastrados[i].identificacao + "\n\n" +
                        "Proprietário: " + imoveisCadastrados[i].proprietario + "\n" +
                        "Quantidade de Quartos: " + imoveisCadastrados[i].qntQuatos + "\n" +
                        "Quantidade de Banheiros: " + imoveisCadastrados[i].qntBanheiros + "\n" +
                        "Possui Garagem?: " + imoveisCadastrados[i].garagem + "\n")
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

console.log(imoveisCadastrados); //Exibir o Array atualizado no console apenas para verificação.

