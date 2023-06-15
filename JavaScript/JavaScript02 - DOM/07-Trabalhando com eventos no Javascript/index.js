// const btn = document.getElementById('register-button');

// //O click vai disparar uma função anonima (sem nome)
// btn.addEventListener('click', function () {
//   alert("Botão clicado!")
// })

//Função com nome, não é anonima. Vamos referenciar o elemento que acionou
function register(ev) {
  console.log(ev)
  const sectionElement = ev.currentTarget.parentNode
  const username = sectionElement.children.username.value
  const password = sectionElement.children.password.value
  const passwordConfirmation = sectionElement.children.passwordConfirmation.value

  if (password === passwordConfirmation) {
    alert("Usuário " + username + " registrado!")
  } else {
    alert("As senhas não conferem")
  }
}

function removeEvent() {
  button.removeEventListener("click", register)
  alert("Event Removed")
}

const button = document.getElementById("register-button")

button.addEventListener("click", register)

button.addEventListener("mouseover", function (ev) {
  console.log(ev)
})