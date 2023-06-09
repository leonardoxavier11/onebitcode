function addInput() {
    const ul = document.getElementById('inputs');

    //Criar o elemento com a função createElement()
    const newLi = document.createElement('li');

    //Adicionar conteúdo a esse elemento
    newLi.className = 'list-item';
    newLi.innerText = 'Novo input: ';

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'input';

    //Adicionar esse elemento como filho de algum outro
    newLi.appendChild(newInput);
    ul.appendChild(newLi);


}