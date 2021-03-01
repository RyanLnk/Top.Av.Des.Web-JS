const tbody = document.querySelector('tbody');
const table = document.querySelector('table');
const buttonAdd = document.querySelector('.btn.waves-effect.waves-light');

buttonAdd.addEventListener('click', function() {
    const inputNome = document.querySelector('#nome');
    const nome = inputNome.value;

    const inputSobrenome = document.querySelector('#sobrenome');
    const sobrenome = inputSobrenome.value;

    const tr = document.createElement('tr');
    const tdNome = document.createElement('td');
    const tdSobrenome = document.createElement('td');
    const tdButtonDelete = document.createElement('td');

    tdNome.innerText = nome;
    tdSobrenome.innerText = sobrenome;
    tdButtonDelete.innerHTML = "<button class='button-delete' type='submit'><span class='button-delete-span'><i class='material-icons red-text text-accent-3'>delete_forever</i></span></button>";

    tdButtonDelete.addEventListener('click', function(e) {
        const trDelete = tdButtonDelete.closest('tr');
        trDelete.remove();
    });

    tr.appendChild(tdNome);
    tr.appendChild(tdSobrenome);
    tr.appendChild(tdButtonDelete);

    tbody.appendChild(tr);
    table.appendChild(tbody);

    inputNome.value = '';
    inputNome.focus();
    inputSobrenome.value = '';
});