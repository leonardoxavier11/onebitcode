/*Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso) */

const medida = prompt("Por favor, informe o valor que queira converter em METROS(m)")
const unidade = prompt(
    "E para qual medida deseja converter?" +
    "\n\nmilímetro (mm)" +
    "\ncentímetro (cm)" +
    "\ndecímetro (dm)" +
    "\ndecâmetro (dam)" +
    "\nhectômetro (hm)" +
    "\nquilômetro (km)")

const medida_Number = parseFloat(medida)

let resultado

switch (unidade) {
    case "mm":
        resultado = medida_Number * 10 ** 3
        alert(medida +" M é igual a: " + resultado + " MM")
        break
    case "cm":
        resultado = medida_Number * 10 ** 2
        alert(medida +" M é igual a: " + resultado + " CM")
        break
    case "dm":
        resultado = medida_Number * 10 ** 1
        alert(medida +" M é igual a: " + resultado + " DM")
        break
    case "dam":
        resultado = medida_Number * 10 ** -1
        alert(medida +" M é igual a: " + resultado + " DAM")
        break
    case "hm":
        resultado = medida_Number * 10 ** -2
        alert(medida +" M é igual a: " + resultado + " HM")
        break
    case "km":
        resultado = medida_Number * 10 ** -3
        alert(medida +" M é igual a: " + resultado + " KM")
        break
    default:
        alert("Opção inválida")
}
