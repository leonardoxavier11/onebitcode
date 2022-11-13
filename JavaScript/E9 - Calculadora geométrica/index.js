/* Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculos. As opções devem ser:

- área do triângulo: base * altura / 2
- área do retângulo: base * altura
- área do quadrado: lado²
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu. */

//VAR
let opcao = 0;
let base = 0;
let altura = 0;
let lado = 0;
let baseMaior = 0;
let baseMenor = 0;
let raio = 0;
const pi = 3.14;

//Função de escolha (if-else), deve ser aplicada a todos os "cases" do "switch"
function informarMedidas() {
    if (opcao === 1 || opcao === 2) {
        base = parseFloat(prompt("Agora informe as medidas para a base:"));
        altura = parseFloat(prompt("E também para a altura:"));
    } else if (opcao === 3) {
        lado = parseFloat(prompt("Agora informe a medida para o lado:"));
    } else if (opcao === 4) {
        baseMaior = parseFloat(prompt("Agora informe a medida da base maior:"));
        baseMenor = parseFloat(prompt("E também para a base menor:"));
        altura = parseFloat(prompt("E por último, também informe a altura"));
    } else {
        raio = parseFloat(prompt("Informe a medida do raio da circunferência:"));
    }
};

//Funções de cáluclo dos cases
function areaTriangulo() {
    return base * altura / 2
};
function areaRetangular() {
    return base * altura
};
function areaQuadrada() {
    return lado ** 2
};
function areaTrapezio() {
    return (baseMaior + baseMenor) * altura / 2
};
function areaCiruculo() {
    return pi * raio ** 2
};

do {
    opcao = parseFloat(prompt("Escolha uma opcão" +
        "\n\n1 - Área do triângulo" +
        "\n2 - Área do retângulo" +
        "\n3 - Área do quadrado" +
        "\n4 - Área do trapézio" +
        "\n5 - Área do círculo" +
        "\n 6 - Sair"
    ))
    switch (opcao) {
        case 1:
            informarMedidas();
            alert(areaTriangulo(base, altura));
            break
        case 2:
            informarMedidas();
            alert(areaRetangular(base, altura));
            break
        case 3:
            informarMedidas();
            alert(areaQuadrada(lado));
            break
        case 4:
            informarMedidas();
            alert(areaTrapezio(baseMaior, baseMenor, altura));
            break
        case 5:
            informarMedidas();
            alert(areaCiruculo(raio));
            break
        case 6: alert("Programa encerrado");
            break
        default: alert("Opção inválida");
    };
} while (opcao !== 6);

