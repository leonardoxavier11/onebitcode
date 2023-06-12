function escalarJogador() {

    //O fielset só deve ser criado uma vez
    const qntFielset = document.getElementsByTagName('fieldset');

    if (!(qntFielset.length > 0)) {

        //Elementos do form
        const fieldset = document.createElement('fieldset');
        const legend = document.createElement('legend');
        legend.textContent = "Características do Jogador";

        const ul = document.createElement('ul');

        //Label
        const posicaoLabel = document.createElement('li');
        posicaoLabel.innerHTML = '<label for="posicao">Posição do Jogador: </label>';

        const posicaoInput = document.createElement('input');
        posicaoInput.type = 'text';
        posicaoInput.name = 'posicao';
        posicaoInput.id = 'posicao';

        //Label
        const nameLabel = document.createElement('li');
        nameLabel.innerHTML = '<label for="name">Nome do Jogador: </label>';

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.name = 'name';
        nameInput.id = 'name';

        //Label
        const nCamisaLabel = document.createElement('li');
        nCamisaLabel.innerHTML = '<label for="nCamisa">N° da Camisa do Jogador: </label>';

        const nCamisaInput = document.createElement('input');
        nCamisaInput.type = 'text';
        nCamisaInput.name = 'nCamisa';
        nCamisaInput.id = 'nCamisa';

        //Button
        const buttonForm = document.createElement('button');
        buttonForm.textContent = "Enviar";
        buttonForm.type = 'submit';

        buttonForm.addEventListener('click', confirmarEnvio);

        // Hierarquia dos elementos
        posicaoLabel.appendChild(posicaoInput);
        nameLabel.appendChild(nameInput);
        nCamisaLabel.appendChild(nCamisaInput);

        ul.append(posicaoLabel, nameLabel, nCamisaLabel);
        fieldset.appendChild(legend);
        fieldset.appendChild(ul);
        fieldset.appendChild(buttonForm);

        form.appendChild(fieldset);

        // Função de confirmação
        function confirmarEnvio(event) {
            event.preventDefault();
            const resposta = confirm("Confirme para enviar as informações:");
            if (resposta) {
                timeEscalado(posicaoInput.value, nameInput.value, nCamisaInput.value);

                posicaoInput.value = "";
                nameInput.value = "";
                nCamisaInput.value = "";
            }
        }
    }
}

function timeEscalado(posicao, name, nCamisa) {
    const timeEscalado = document.getElementById('timeEscalado');

    //Verificar a quantidade de h1 no html
    const qntH1 = document.getElementsByTagName('h1');

    //Se menor que 1, vai ter que criar o h1
    if (qntH1.length < 1) {
        const h1 = document.createElement('h1');
        h1.innerText = "Time Escalado";
        h1.id = "h1"

        const p = document.createElement('p');
        p.innerText = "Posição: " + posicao + ", Nome: " + name + ", N° da Camisa: " + nCamisa;

        timeEscalado.appendChild(h1);
        timeEscalado.appendChild(p);

        //Se maior que 1, quer dizer que já existe o h1
    } else {
        const p = document.createElement('p');
        p.innerText = "Posição: " + posicao + ", Nome: " + name + ", N° da Camisa: " + nCamisa;

        timeEscalado.appendChild(p);
    }
}

function removerJogador() {
    const timeEscalado = document.getElementById('timeEscalado');

    const p = document.getElementsByTagName('p');

    // const array = [...p];
    // array.map((j) => {
    //     alert(j.innerText);
    // });

    // Obtém o último elemento fieldset
    const lastP = p[p.length - 1];

    // Remove o último contato adicionado
    if (lastP) {
        timeEscalado.removeChild(lastP);
    }

}

function ordenar() {

}
