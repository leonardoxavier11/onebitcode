// Nesse caso, usamos 2 switch de forma bem simples apenas para demonstar que a resposta pode ser uma string ou number.

const resultado = prompt("Escolha uma alternativa: \n[A] \n[B] \n[C] \n[1] \n[2] \n[3]")

const resultadoNumerico = parseFloat(resultado) // "parseFloat" - Essa função foi necessária para que a string digitada seja "lida" como number.

switch (resultado) {
    case "a":
        alert("O resultado é a")
        break
    case "b":
        alert("O resultado é b")
        break
    case "c":
        alert("O resultado é c")
        break
    default: // "Default" - É a resposta padrão. Ou seja, caso nenhuma das alteranativas anteriores estejam corretas, essa será a resposta
        alert("Finalizando...")
}

switch (resultadoNumerico) {
    case 1:
        alert("O resultado é a")
        break
    case 2:
        alert("O resultado é b")
        break
    case 3:
        alert("O resultado é c")
        break
    default: // "Default" - É a resposta padrão. Ou seja, caso nenhuma das alteranativas anteriores estejam corretas, essa será a resposta
        alert("Finalizando...")
}