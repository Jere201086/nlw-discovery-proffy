//procurar o botão
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener('click', cloneField);


//Executar uma ação
function cloneField(){
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    //limpar os campos.
    const fields = newFieldContainer.querySelectorAll('input');

    //para cada campo limpar
    fields.forEach(function(field) {
        //pega o field do momento e limpa ele
        field.value = "";
    })
 
    //colocar na pagina. onde colocar?
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
