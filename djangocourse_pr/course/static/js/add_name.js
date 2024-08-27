
$(document).ready(function() {
    let isConfirmDelete = false

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

    $('.lessons').on('submit', '#delete-lesson-formid', function(event) {
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
        event.preventDefault()

        selectedLesson = document.querySelector('#dropdown-lessons')
        
        // Создаем formData чтобы можно было отправлять файлы из формы через ajax
        var formData = new FormData()
        // Добавляем в formData csrf_token и значения из формы, чтобы переправить их на бекенд
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
                } if (response.canDeleteLesson === false) {
                    $('#delete-button-' + selectedLesson.value).remove()
                } if (response.error) {
                    $('#error-message').text(response.error)
                }
            },
        })
    });

    // Обрабатываем удаление задания
    $('.lessons').on('submit', '.delete-task-form', function(event) {
        event.preventDefault()

        var $form = $(this)
        // Получаем задание, которое хотим удалить
        var taskId = $form.find('input[name=task_id]').val()
        var lessonId = $form.find('input[name=lesson_id]').val()

        $('#deleteconfirmform').off('submit').on('submit', function(event) {
            event.preventDefault()

            console.log(taskId, lessonId)
            
            $.ajax({
                url: '/course/',
                type: 'POST',
                data: {
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
                    task_id: taskId,
                    lesson_id: lessonId,
                    delete_task: true
                },
                success: function(response) {
                    if (response.deleteTask) {
                        // После удаления на сервере удаляем со страницы
                        $form.closest('.course-block').remove()
    
                        if (response.canDeleteLesson) {
                            $('.delete-lesson-form-' + lessonId).append(`
                                <button type="submit" name="delete_lesson" class="delete-lesson-btn" id="delete-button-${lessonId}">
                                    <img src="/static/images/delete.png" alt="delete-lesson-img" class="delete-lessons-icon">
                                </button>
                            `)
                        }
                    } else {
                        // На случай ошибки при удалении, по типу если удаляемое задание не найдено
                        alert('Ошибка при удалении задачи: ' + response.error)
                    }
                }
            });
        })
    });
})
