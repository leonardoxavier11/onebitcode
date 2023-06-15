
let button = document.querySelector('#button');
let msg = document.querySelector('#message');

button.addEventListener('click', (e) => {
  msg.classList.toggle('reveal');
  console.log(e.target.id);

})

// No exemplo fornecido, a classe "reveal" é atribuída depois da classe "hide", o que significa que a propriedade "visibility: visible" da classe "reveal" prevalecerá sobre a propriedade "visibility: hidden" da classe "hide". Portanto, o elemento será exibido, já que a classe "reveal" redefine a visibilidade para "visible".