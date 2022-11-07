// Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let filaDePacientes = ["Maria", "João", "Leonardo", "Mariane"];
let pacientes = ""

for (i = 0; i < filaDePacientes.length; i++) {
    pacientes += (i + 1) + " - " + filaDePacientes[i] + "\n"
}

do {
    opcao = prompt(pacientes + "\n\nEscolha uma opção: \n 1 - Novo Paciente \n 2 - Consultar Paciente \n 3 - Sair")
    let opcaoNumerica = parseFloat(opcao)

    switch (opcaoNumerica) {
        case 1:
            alert("Novo Paciente\n\n" +
                filaDePacientes.push(prompt("Digite o nome do novo paciente")))
            pacientes += (i + 1) + " - " + filaDePacientes[i] + "\n"
            i++
            break
        case 2:
            alert("Consultar Paciente\n\n" +
                filaDePacientes.shift())
            pacientes = ""
            for (i = 0; i < filaDePacientes.length; i++) {
                pacientes += (i + 1) + " - " + filaDePacientes[i] + "\n"
            }
            break
        case 3:
            alert("Sair")
            break
        default:
            alert("Opção Inválida")
    }

} while (opcao !== "3")




















//Resolução do Exercício pelo professor

let fila = ["Maria", "João", "Leonardo", "Mariane"]
let opcao = ""

do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++) {
        pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }

    opcao = prompt(
        "Pacientes:\n" + pacientes +
        "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
    )

    switch (opcao) {
        case "1":
            const novoPaciente = prompt("Qual é o nome do paciente?")
            fila.push(novoPaciente)
            break
        case "2":
            const pacienteConsultado = fila.shift()
            if (!pacienteConsultado) {
                alert("Não há pacientes na fila!")
            } else {
                alert(pacienteConsultado + " foi removido da fila.")
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
            break
    }
} while (opcao !== "3");
