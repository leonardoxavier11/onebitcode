// Retorno é a saída da função
// O retorno é usado para armazenarmos a saída da função em uma variável

//Exibir função, SEM armazenar o resultado em uma a variável. Como aprendido na Aula 41
function calcularMedia1(a, b) {
    console.log((a + b) / 2)
}
calcularMedia1(7, 2)

//Ou
function calcularMedia4(a, b) {
    return (a + b) / 2
}
console.log(calcularMedia4(7, 2))


//Uma das formas de exibir a função, armazenando o valor em uma variável
function calcularMedia3(a, b) {
    const media2 = (a + b) / 2
    return media2
}
const resultado1 = calcularMedia3(7, 2)
console.log(resultado1)


//E se não explicitarmos qual deve ser a saída da função, sua saída será undefined. Repare que a cor da "media" está opaca
function calcularMedia(a, b) {
    const media = (a + b) / 2
}
const resultado = calcularMedia(5, 9)
console.log(resultado)


// Para dizer qual é a saída de uma função usamos o return
function criarProduto(nome, preco) {
    const produto = { nome, preco, estoque: 1 }
    return produto
}
const notebook = criarProduto("Notebook Intel Core i3 8GB", 3000)
console.log(notebook)

// Também podemos jogar a saída de uma função dentro dos parâmetros de outra
console.log(criarProduto("Smartphone Samsung Galaxy", 1000))

// E o retorno não precisa ser uma variável, pode ser o resultado de qualquer expressão
function areaRetangular(base, altura) {
    return base * altura
}
console.log(areaRetangular(3, 5))
// Ou até o retorno de outra função
function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}
console.log(areaQuadrada(8))

// Uma função só pode ter uma saída, depois do return nada é executado
// Repare que o VS Code nos avisa que nosso código não será executado
function olaMundo() {
    let texto = "..."
    return texto
    texto = "Olá, mundo!"
    console.log(texto)
}
console.log(olaMundo())

// No entanto, diferentes ramificações dentro da função podem ter diferentes retornos
function maioridade(idade) {
    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}
console.log(maioridade(20))
console.log(maioridade(13))
