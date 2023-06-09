const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//Adicionar Elementos

// push -> Adiciona elementos ao fim da fila e retorna o tamanho do novo Array. Importante: Não é necessário criar a variável de retorno do tamanho.
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// ou apenas
arr.push("Boromir")
console.log(arr)

// unshift -> Adiciona elementos no inicio da fila e retorna o tamanho do novo Array. Importante: Não é necessário criar a variável de retorno do tamanho.
tamanho = arr.unshift("Leonardo")
console.log(arr)
console.log(tamanho)

//Remover Elementos

// pop -> Remove elementos ao fim da fila e retorna o nome do elemento removido. Importante: Não é necessário criar a variável de retorno do elemento removido.
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// ou apenas
arr.pop()
console.log(arr)

// shift -> Remove elementos no inicio da fila e retorna o nome do elemento removido. Importante: Não é necessário criar a variável de retorno do elemento removido.
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Pesquisar por um elemento

// incluides -> Pesquisa e retornar se o elemento existe (true) ou não (false) no Array
const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexOf -> Pesquisa e retornar com a posição do elemento no Array. Se não existir, vai retornar um numero negativo
const indice = arr.indexOf("Gandalf")
console.log(indice)

//Cortar e Concatenar

// slice -> Usado para cortar partes do Array. O "star" é obrigatório, mas o "end" é opcional
const hobbits = arr.slice(0, 4) //Usado para pegar internalos especificos. Nesse caso, iniciando em 0 até 4
const outros = arr.slice(-4) //Usado para pegar os elementos iniciando de trás para frente, até -4.
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)
console.log(hobbits)
console.log(outros)

//Substituir Elementos

// splice: Permite remover elementos em qualquer posição do array e substituir por novos
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(elementosRemovidos)
console.log(sociedade)

//Iterando (percorrendo) sobre os Elementos

// // Usando o for para percorrer cada elemento do array
for (let i = 0; i < sociedade.length; i++) {
    const elemento = sociedade[i]
    console.log(elemento + " se encontra na posição " + i)
}