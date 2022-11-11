function dobro(x) {
    console.log("O dobro de " + x + " é " + (x * 2))
}

dobro(5)
dobro(7)

// underfined -> Pq qualquer valor que não tem atribuição, é "underfined". 
//E NaN -> Not a Number, é um valor numérico de ERRO no JS
dobro()

//Podemos utilizar um valor padrão que não ocorra "underfined", nas situações descritas acima. Porém este valor padrão deve estar sempre no fim da função
function dobro2(x = 0) {
    console.log("O dobro de " + x + " é " + (x * 2))
}

dobro2()

//Também é possível criar funções com vários parametros
function soma(a, b) {
    console.log("O resultado da soma é " + (a + b))
}

soma(7, 6)

function soma2(a, b, c, d, e) {
    console.log("O resultado da soma é " + (a + b + c + d + e))
}

soma2(7, 6, 1, 10, 15)

//E também é possível criar funções com objetos, por exemplo.
function criarUsuario(nome, email, senha = "1234", tipo = "admin") {
    const usuario = {
        nome, //Mesmo que -> nome: nome,
        email, //Mesmo que -> email: email,
        senha, //Mesmo que -> senha: senha,
        tipo, //Mesmo que -> tipo, tipo
    }
    console.log(usuario)
}

//A ordem que a gente define os parametros na declaração da função, precisa ser a mesma que a gente chama eles. Como o "tipo" tem um valor padrão, é opcional. LEMBRANDO: o valor/valores padrão sempre precisa ser o último na função.
criarUsuario("Leonardo", "leonardo@email.com")


//DICA !!!
//Nas funções, quando há muitos parâmetros, o ideal é transforma-lo em 1 parâmetro só e ele sendo um objeto.

//Ao invés de fazer isso:
function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
    console.log(nome, telefone, endereco, aniversario, email, senha)
}
muitosParametros("Leonardo", "telefone", "logo ali", "31/12/1901", "leo@email.com", "123456")


//Faça isso:
function objetoComoParametro(usuario) {
    usuario.nome
    usuario.email
    //...
}

const dadosDoUsuario = {
    nome: "Leonardo",
    email: "leo@email.com",
    senha: "123456",
    endereco: "logo ali",
    aniversario: "31/12/1901"
}

objetoComoParametro(dadosDoUsuario)