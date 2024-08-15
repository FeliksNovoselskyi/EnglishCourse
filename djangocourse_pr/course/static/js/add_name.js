
$(document).ready(function() {
    $('#addnameform').submit(function(event) {
        // не даем форме сразу отправиться
        event.preventDefault()

        // создаем formData чтобы можно было отправлять файлы из формы через ajax
        var formData = new FormData()
        // добавляем в formData csrf_token и значения из формы, чтобы переправить их на бекенд
        formData.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
        formData.append('taskname', $('input[name=taskname]').val())
        formData.append('taskfile', $('input[name=taskfile]')[0].files[0])
        formData.append('additional_words_file', $('input[name=additional_words_file]')[0].files[0])
        formData.append('add_task', true)

        $.ajax({
            url: '/course/',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                if (response.addName) {
                    // тут типо все норм и все правильно, ошибок в заполнении поля нет!!
                    $('#error-message').text(response.error)
                    // добавляем новую задачу с помощью метода before
                    // тут он нужен чтобы добавить задание перед блоком, который их добавляет (для красоты)
                    $('.course-block.add-task-block').before(response.task_html)
                }
                if (response.error) {
                    // вывод ошибок пользователя при создании задания
                    $('#error-message').text(response.error)
                }
            },
        })
    });

    // обрабатываем удаление задания через ajax
    $('#courses').on('submit', 'form', function(event) {
        event.preventDefault()

        var $form = $(this) // получаем нашу форму
        // получаем конкретное задания, которое хотим удалить
        var taskId = $form.find('input[name=task_id]').val()

        $.ajax({
            url: '/course/',
            type: 'POST',
            data: {
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
                task_id: taskId,
                delete_task: true
            },
            success: function(response) {
                if (response.deleteTask) {
                    // после удаления на сервере удаляем со страницы
                    $form.closest('.course-block').remove()
                } else {
                    // на случай ошибки при удалении, по типу если удаляемое не найдено (их нет)
                    alert('Ошибка при удалении задачи: ' + response.error)
                }
            }
        });
    });
})
