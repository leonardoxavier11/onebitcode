function addContact() {

    //Pego o elemento que está no HTML e que vai ser o ponto mais alto da hierarquia que será criada
    const contactsList = document.getElementById('contacts-list');

    //Criando os elementos HTML
    const fildset = document.createElement('fieldset');

    const legend = document.createElement('legend');
    legend.innerText = "Contato";

    const ul = document.createElement('ul');

    //Name
    const nameLi = document.createElement('li');
    nameLi.innerHTML = '<label for="fullname">Nome: </label>';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'fullname';
    nameInput.id = 'fullname'
    nameInput.placeholder = "Digite o nome";

    //Telefone
    const phoneLi = document.createElement('li');
    phoneLi.innerHTML = '<label for="phone">Telefone: </label>';

    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.name = 'phone';
    phoneInput.id = 'phone';
    phoneInput.placeholder = "Digite o telefone";

    //Endereço -> Está sem id e não adicionei o "for", então usei o innetText
    const adressLi = document.createElement('li');
    adressLi.innerText = "Endereço: ";

    const adressInput = document.createElement('input');
    adressInput.type = 'text';
    adressInput.name = 'adress';
    adressInput.placeholder = "Digite o endereco";

    //Criando a hierarquia
    nameLi.appendChild(nameInput); // li recebe um input
    ul.appendChild(nameLi); // ul recebe o li, já criado

    phoneLi.appendChild(phoneInput);
    ul.appendChild(phoneLi);

    adressLi.appendChild(adressInput);
    ul.appendChild(adressLi);

    fildset.appendChild(ul); // filedset recebe o ul e o legend
    fildset.appendChild(legend);
    contactsList.appendChild(fildset); // Todos ficam dentro do elemento contacts-list pego lá em cima
}

function removeContact() {
    const contactsList = document.getElementById('contacts-list');
    const fieldsets = document.getElementsByTagName('fieldset');

    // Obtém o último elemento fieldset
    const lastFieldset = fieldsets[fieldsets.length - 1];

    // Remove o último contato adicionado
    if (lastFieldset) {
        contactsList.removeChild(lastFieldset);
    }
}
