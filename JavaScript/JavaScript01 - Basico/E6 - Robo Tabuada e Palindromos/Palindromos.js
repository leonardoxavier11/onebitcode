//Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda.

//VAR
let word = "";
let newWord = "";

word = prompt("Informe uma palavra, e vamos descobrir se ela é um Palindromo");

// i = quantidade de caracteres na string - 1; o loop vai se repetir até i >=0; a cada loop i - 1
// Exemplo: PATO -> (i = 3 {4-1}). Pq? Pq i vai de 3 até 0, ou seja, 4 caracter.
for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
}

if (newWord === word) {
    alert(word + " É um Palindromo");
} else {
    alert("Não é um Palindromo!\n\n" +
        word + "\n" +
        newWord
    )
}

// Fonte de pesquisa -> https://www.freecodecamp.org/portuguese/news/tres-maneiras-de-inverter-uma-string-em-javascript/