const form = document.getElementById('orderForm');

const btn = document.querySelector('button');

btn.addEventListener('click', (ev) => {
  //Previnir o comportamento padrão ao clicar em um submit, que é atualizar a página e enviar as informações de um form
  ev.preventDefault();
  ev.cur

  const nameInput = document.querySelector("input[name='name']");
  const addressInput = document.querySelector("input[name='address']");
  const breadType = document.querySelector("select[name='breadType']");
  const mainInput = document.querySelector("input[name='main']:checked");
  const mainInputs = document.querySelectorAll("input[name='main']");
  const observations = document.querySelector("textarea[name='observations']");

  //Salvar os chechBox em uma string
  let salad = "";
  document.querySelectorAll("input[name='salad']:checked").forEach(function (item) {
    salad += " - " + item.value + "\n";
    item.checked = false; // Desmarca o campo de seleção de caixa de seleção
  });

  alert(
    "Pedido Realizado!" +
    "\nNome do cliente: " + nameInput.value +
    "\nEndereço de entrega: " + addressInput.value +
    "\nTipo de pão: " + breadType.value +
    "\nRecheio: \n - " + mainInput.value + "\n" + salad +
    "Observações: " + observations.value
  );

  nameInput.value = "";
  addressInput.value = "";
  breadType.value = "";
  observations.value = "";

  //Desmarcar o checked
  mainInputs.forEach(function (item) {
    if (item.checked) {
      item.checked = false; // Desmarca o campo de seleção de rádio
    }
  });

  //Atualizada a página apenas após exibir o alerta e todas as operações
  // location.reload();
});


