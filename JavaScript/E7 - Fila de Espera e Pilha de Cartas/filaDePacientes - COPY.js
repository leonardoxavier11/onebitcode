// Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.


//Criação do Array. Eu escolhir começar com alguns nomes, porém poderia ser um Arrau zerado. let filaDePacientes = []
let filaDePacientes = ["Maria", "João", "Leonardo", "Mariane"];

do {
    let pacientes = "Estes são os pacientes esperando na fila:\n\n" //Necessário esta variável zerado nessa posição, para que quando a operação for refeitar "zerar" a string "pacientes"
    for (i = 0; i < filaDePacientes.length; i++) {
        pacientes += (i + 1) + " - " + filaDePacientes[i] + "\n" //Necessário o (i + 1) para que a listagem de paciente começe em 1 ao invés de 0
    }

    opcao = prompt(pacientes + "\nEscolha uma opção: \n 1 - Novo Paciente \n 2 - Consultar Paciente \n 3 - Sair")
    let opcaoNumerica = parseFloat(opcao)

    switch (opcaoNumerica) {
        case 1:
            const novoPaciente = prompt("Qual é o nome do paciente?")
            if (novoPaciente.length > 0) { //Condição necessária para que não aceite nomes em branco (variável "novoPaciente" vazia)
                filaDePacientes.push(novoPaciente)
                alert(novoPaciente + " adicionado a fila")
            } else {
                alert("Nome Inválido")
            }
            break
        case 2:
            if (filaDePacientes.length > 0) { //Condição necessária para não informar "Undefined" se o Array já estiver vazio
                const pacienteConsultado = filaDePacientes.shift()
                alert(pacienteConsultado + " foi removido da fila.")
            } else {
                alert("Não há pacientes na fila!")
            }
            break
        case 3:
            alert("Programa encerrado")
            break
        default:
            alert("Opção Inválida")
    }

} while (opcao !== "3")
