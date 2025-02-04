$(document).ready(function() {  
    $('#Add-task').on('click', function(event) {  
        event.preventDefault(); 

        var newTask = $('#new-task').val();  
        if (newTask) {    
            var newTaskElement = $(`  
                <li class="items-task">  
                    <button class="button-delete" aria-label="excluir tarefa" style="display: none;">   
                        <img src="./img/excluir.png" alt="excluir tarefa" class="icon">  
                    </button>  
                    <span>${newTask}</span>  
                    <button class="button-completed" style="display: none;">  
                        <img src="./img/aceitar.png" alt="concluir tarefa" class="icon">  
                    </button>  
                </li>  
            `);  
            $('.my-task').append(newTaskElement);  
  
            setTimeout(function() {  
                newTaskElement.addClass('show');  
            }, 10);  

            $('#new-task').val('');
        }  
    });  

    $(document).on('mouseenter', '.items-task', function() {  
        $(this).find('.button-delete, .button-completed').fadeIn();   
    });  

    $(document).on('mouseleave', '.items-task', function() {  
        $(this).find('.button-delete, .button-completed').fadeOut();
    });  

    $(document).on('click', '.button-delete', function() {  
        var $taskItem = $(this).closest('li');  
        $(this).css('background-color', 'red');   

        $taskItem.addClass('remove-task');  
  
        setTimeout(function() {  
            $taskItem.remove();
        }, 10000);  
    });  

    $(document).on('click', '.button-completed', function() {  
        $(this).closest('li').toggleClass('completed');  
    });  
});