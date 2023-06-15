const btn = document.getElementById('btn');
const btnTestar = document.getElementById('btnTeste')
const main = document.getElementById('infoTech');
let i = 1;

btn.addEventListener('click', () => {
  //Verificar se ul já existe dentro de main
  let ul;

  if (!main.querySelector('ul')) {
    ul = document.createElement('ul');
    main.appendChild(ul);
  } else {
    ul = main.querySelector('ul');
  }

  const li = document.createElement('li');
  const label = document.createElement('label');
  label.htmlFor = "tech" + i;
  label.textContent = "Tech " + i + ":";
  label.classList.add("mt-2", "mb-2");

  const input = document.createElement('input');
  input.type = "text";
  input.name = "tech" + i;
  input.id = "tech" + i;
  input.classList.add("ml-5"); // VERIFICAR--Não funciona !

  //Btn Temp Exp
  const div = document.createElement('div');

  const inputTempJr = document.createElement('input');
  inputTempJr.type = "radio";
  inputTempJr.name = "Exp" + i;
  inputTempJr.id = "jrTech" + i;
  inputTempJr.value = "jr";
  const labelTempJr = document.createElement('label');
  labelTempJr.htmlFor = "jrTech" + i;
  labelTempJr.textContent = "0-2 anos";

  const inputTempPl = document.createElement('input');
  inputTempPl.type = "radio";
  inputTempPl.name = "Exp" + i;
  inputTempPl.id = "plTech" + i;
  inputTempPl.value = "pl";
  const labelTempPl = document.createElement('label');
  labelTempPl.htmlFor = "plTech" + i;
  labelTempPl.textContent = "3-4 anos";

  const inputTempSr = document.createElement('input');
  inputTempSr.type = "radio";
  inputTempSr.name = "Exp" + i;
  inputTempSr.id = "srTech" + i;
  inputTempSr.value = "sr";
  const labelTempSr = document.createElement('label');
  labelTempSr.htmlFor = "srTech" + i;
  labelTempSr.textContent = "5+ anos";

  //Btn remover
  const btnRomer = document.createElement('button');
  btnRomer.textContent = "Remover Tech";
  btnRomer.addEventListener('click', remover);

  //Hierarquia
  div.append(inputTempJr, labelTempJr, inputTempPl, labelTempPl, inputTempSr, labelTempSr, btnRomer);
  li.appendChild(label);
  li.appendChild(input);
  li.appendChild(div);
  ul.appendChild(li);

  i++;
})

function remover(ev) {
  const li = ev.currentTarget.parentNode.parentNode;
  li.remove();
}


btnTestar.addEventListener('click', () => {
  const inputName = document.querySelector('input[name="name"]').value;
  const inputsCheck = document.querySelectorAll('input:checked');
  let x = inputName + "\n\n";

  //   O método closest percorre a cadeia de pais(ancestrais) do elemento, começando pelo próprio elemento e subindo na árvore DOM, até encontrar um elemento que corresponda ao seletor especificado ou até alcançar o nó raiz(documento).
  // Ao chamar element.closest('li'), o método retornará o elemento < li > mais próximo que contém o elemento atual.
  inputsCheck.forEach(element => {
    const techInput = element.closest('li').querySelector('input[type="text"]');
    x += "-" + techInput.value + ": " + element.value + "\n";
  });

  alert(x);
});

