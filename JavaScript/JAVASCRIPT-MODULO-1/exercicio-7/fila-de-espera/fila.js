let fila = []
let menu
let novoPaciente = ""

do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++) {
    pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }

    menu = prompt(
        "Pacientes: \n" + pacientes 
        + "\nSelecione uma das opções abaixo: \n1- Novo paciente: \n2- Consultar Paciente: \n3- Sair")

    switch (menu){
        case "1":
            novoPaciente = prompt("Qual o nome do paciente?")
            fila.push(novoPaciente)
            break;
        case "2":
            const pacienteConsultado = fila.shift()
                if (!pacienteConsultado) {
                    alert("Não há pacientes na fila!")
                } else {
                    alert(pacienteConsultado + " foi removido da fila.")
      }
            break;
        case "3":
            alert("Programa encerrado!")
            break;
        default:
            alert("Opcao Invalida")
            break;
    }
} while (menu !== "3")