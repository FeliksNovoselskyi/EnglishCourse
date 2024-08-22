
$(document).ready(function() {
    $('#addlessonform').submit(function(event) {
        event.preventDefault()

        var $form = $(this)
        var lessonId = $form.find('input[name=lesson_id]').val()
        var lessonName = $('input[name=lessonname]').val()
        
        $.ajax({
            url: '/course/',
            type: 'POST',
            data: {
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
                add_lesson: true,
                lessonname: lessonName,
                lesson_id: lessonId,
            },
            success: function(response) {
                if (response.error) {
                    $('#error-message-lesson').text(response.error)
                } else if (response.addLesson) {
                    $('.lessons').append(response.lesson_html)
                    $('#dropdown-lessons').append(`
                        <option value="${response.lessonId}">${response.lessonName}</option>
                    `)
                }
            }
        })
    })

    $('.lessons').on('submit', '.delete-lesson-form', function(event) {
        event.preventDefault()

        var $form = $(this)
        var lessonId = $form.find('input[name=lesson_id]').val()

        $.ajax({
            url: '/course/',
            type: 'POST',
            data: {
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
                lesson_id: lessonId,
                delete_lesson: true
            },
            success: function(response) {
                if (response.deleteLesson) {
                    $form.closest('.lessons-from-backend').remove()

                    var $optionToRemove = $('#dropdown-lessons').find(`option[value="${lessonId}"]`)
                    if ($optionToRemove.length) {
                        $optionToRemove.remove()
                    }
                } else {
                    alert('Помилка при видаленні уроку: ' + response.error)
                }
            },
        })
    })

    $('#addnameform').submit(function(event) {
        // не даем форме сразу отправиться
        event.preventDefault()

        selectedLesson = document.querySelector('#dropdown-lessons')
        
        // создаем formData чтобы можно было отправлять файлы из формы через ajax
        var formData = new FormData()
        // добавляем в formData csrf_token и значения из формы, чтобы переправить их на бекенд
        formData.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
        formData.append('taskname', $('input[name=taskname]').val())
        formData.append('taskfile', $('input[name=taskfile]')[0].files[0])
        formData.append('additional_words_file', $('input[name=additional_words_file]')[0].files[0])
        formData.append('selected_lesson_value', selectedLesson.value)
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
                    
                    var lessonBlock = $('.lessons-from-backend').filter(function() {
                        return $(this).find('input[name=lesson_id]').val() === selectedLesson.value
                    })
    
                    lessonBlock.find('.lesson-tasks').append(response.task_html)
                }
                if (response.error) {
                    // вывод ошибок пользователя при создании задания
                    $('#error-message').text(response.error)
                }
            },
        })
    });

    // обрабатываем удаление задания через ajax
    $('.lessons').on('submit', '.delete-task-form', function(event) {
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
