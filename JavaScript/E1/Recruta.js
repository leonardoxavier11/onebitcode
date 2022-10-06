// O let serve para salvar uma variável, com a nomenclatura escolhida e o prompt serve exibir uma caixa de input no navegador para o usuário resposder alguma pergunta.

let fname = prompt("Qual seu Nome?");
confirm("Você confirma que seu nome é " + fname + "?");

let lname = prompt("Qual seu Sobrenome?");
confirm("Você confirma que seu sobrenome é " + lname + "?");

let study = prompt("Qual seu campo de estudo?");
let yearOfBirth = prompt("Qual seu ano de nascimento?");

// o console.log serve para escrever no console do navegador.

console.log("Olá " + fname + " " + lname + ", você se formou em " + study + " e você tem " + (2022 - yearOfBirth) + " anos");

// o atributo /n serve para realizar a quabra de linha no JavaScript.

alert(
    "Olá " + fname + " " + lname + ",\nVocê se formou em " + study + " e você tem " + (2022 - yearOfBirth) + " anos"
);
