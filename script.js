const tbody = document.querySelector('tbody');
const table = document.querySelector('table');
const buttonAdd = document.querySelector('.btn.waves-effect.waves-light');

buttonAdd.addEventListener('click', () => {
    //pegando conteúdo do campo nome
    const inputNome = document.querySelector('#nome');
    if (inputNome.value == '') {
        alert("Não é possível colocar um campo em branco");
        inputNome.focus();
        return;
    }
    const nome = inputNome.value;

    //pegando conteúdo do campo sobrenome
    const inputSobrenome = document.querySelector('#sobrenome');
    if (inputSobrenome.value == '') {
        alert("Não é possível colocar um campo em branco");
        inputSobrenome.focus();
        return;
    }
    const sobrenome = inputSobrenome.value;

    //criando os elementos para adicionar a linha nova
    const tr = document.createElement('tr');
    const tdNome = document.createElement('td');
    const tdSobrenome = document.createElement('td');
    const tdButtonDelete = document.createElement('td');

    //atribuindo os valores para as células da tabela
    tdNome.innerText = nome;
    tdSobrenome.innerText = sobrenome;
    //ainda não aprendi outra maneira para não ter que utilizar essa má prática, mas farei
    tdButtonDelete.innerHTML = "<button class='button-delete' type='submit'><span class='button-delete-span'><i class='material-icons red-text text-accent-3'>delete_forever</i></span></button>";

    //função para fazer o button remover a linha
    tdButtonDelete.addEventListener('click', () => tdButtonDelete.closest('tr').remove());

    //adicionando as células dentro da linha
    tr.appendChild(tdNome);
    tr.appendChild(tdSobrenome);
    tr.appendChild(tdButtonDelete);

    //adicionando a linha dentro do tbody
    tbody.appendChild(tr);
    //adicionando o tbody dentro da tabela
    table.appendChild(tbody);

    //limpando os campos de formulário da página
    inputNome.value = '';
    inputNome.focus();
    inputSobrenome.value = '';
});