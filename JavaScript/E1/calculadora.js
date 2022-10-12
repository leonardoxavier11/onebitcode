
let input1 = prompt("Favor inserir o primeiro valor numérico");
confirm("Você inseriu o numero: " + input1)

let input2 = prompt("favor inserir o segundo valor numérico");
confirm("Você inseriu o numero: " + input2)


let a = parseFloat(input1)
let b = parseFloat(input2)


let soma = a + b
let subtracao = a - b
let divisao = a / b
let multiplicacao = a * b


alert(
    "Resultados: \n" +
    "\nsoma: " + soma +
    "\nsubtração: " + subtracao +
    "\ndivisão: " + divisao +
    "\nmultiplicação: " + multiplicacao
)