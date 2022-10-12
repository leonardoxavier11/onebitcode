// O let serve para salvar uma variável, com a nomenclatura escolhida e o prompt serve exibir uma caixa de input no navegador para o usuário resposder alguma pergunta.

let input1 = prompt("Favor inserir o primeiro valor numérico");
confirm("Você inseriu o numero: " + input1)

let input2 = prompt("favor inserir o segundo valor numérico");
confirm("Você inseriu o numero: " + input2)

// parseFloat serve para passar uma string para float

let a = parseFloat(input1)
let b = parseFloat(input2)


let soma = a + b
let subtracao = a - b
let divisao = a / b
let multiplicacao = a * b

// alert serve para exibir os resultados abaixo em formado de alerta

alert(
    "Resultados: \n" +
    "\nsoma: " + soma +
    "\nsubtração: " + subtracao +
    "\ndivisão: " + divisao +
    "\nmultiplicação: " + multiplicacao
)