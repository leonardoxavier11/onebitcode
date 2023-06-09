let velocidade = 80


/* // Básico do while
while (velocidade > 0) {
    alert("O carro está a " + velocidade + " km/h")
    velocidade -= 20
    alert("Diminuindo 20 km/h")
}

alert("O carro parou.") */



// while com break
while (velocidade > 0) {
    alert("O carro está a " + velocidade + " km/h")
    velocidade -= 20
    alert("Diminuindo 20 km/h")

    if (velocidade === 40) { // o break força o encerramento da estrutura de repetição
        break
    }
}

alert("O carro parou.")