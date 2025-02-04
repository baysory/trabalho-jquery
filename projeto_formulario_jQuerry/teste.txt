$(document).ready(function() {  
    const listaTarefas = $('.my-task'); // Seleciona a lista de tarefas  
    const botaoAdd = $('#Add-task'); // Botão de adicionar tarefas  
    const novaTask = $('#new-task'); // Campo de texto para nova tarefa  

    botaoAdd.on('click', function(e) {  
        e.preventDefault(); // Impede o envio do formulário  

        const textTask = novaTask.val().trim(); // Captura e remove espaços em branco  

        if (textTask) {  
            // Cria o elemento <li> com a mesma estrutura de seu HTML original  
            const li = $('<li></li>').addClass('items-task')  
                .append(  
                    $('<button></button>')  
                        .addClass('button-delete')  
                        .attr('aria-label', 'excluir tarefa')  
                        .append($('<img>').attr('src', './img/excluir.png').attr('alt', 'excluir tarefa').addClass('icon')),  
                    $('<span></span>').text(textTask), // Adiciona a tarefa como texto  
                    $('<button></button>')  
                        .addClass('button-completed')  
                        .append($('<img>').attr('src', './img/aceitar.png').attr('alt', 'concluir tarefa').addClass('icon'))  
                );  

            // Limpa o campo de entrada  
            novaTask.val('');  

            // Adiciona o novo li à lista  
            listaTarefas.append(li);  
        } else {  
            alert('Por favor, insira uma tarefa'); // Alerta se o campo estiver vazio  
        }  
    });  
});