// Mesmo a condição sendo falsa desde o inicio, pq a velocidade já iniciou em 0, o bloco de código foi executa pelo menos 1 vez. Por esse motivo foi mostrado os 2 "alert"



let velocidade = 0

do {
    alert("A velocidade do veículo é " + velocidade + " km/h")
    velocidade -= 20
} while (velocidade > 0) 

alert("Velocidade final: " + velocidade + " km/h")