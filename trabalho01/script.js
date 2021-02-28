const table = document.querySelector('table');

let buttonAdd = document.querySelector('.btn.waves-effect.waves-light');

buttonAdd.addEventListener('click', function() {
    let inputNome = document.querySelector('#nome');
    let nome = inputNome.value;

    let inputSobrenome = document.querySelector('#sobrenome');
    let sobrenome = inputSobrenome.value;

    let tr = document.createElement('tr');
    let tdNome = document.createElement('td');
    let tdSobrenome = document.createElement('td');
    let tdButtonDelete = document.createElement('td');

    tdNome.innerText = nome;
    tdSobrenome.innerText = sobrenome;
    tdButtonDelete.innerHTML = "<button class='button-delete' type='submit'><span class='button-delete-span'><i class='material-icons red-text text-accent-3'>delete_forever</i></span></button>";

    tdButtonDelete.addEventListener('click', function(e) {
        e.target.parentNode.parentNode.parentNode.parentNode.remove();
    });

    tr.appendChild(tdNome);
    tr.appendChild(tdSobrenome);
    tr.appendChild(tdButtonDelete);

    table.appendChild(tr);
    
    inputNome.value = '';
    inputSobrenome.value = '';
});