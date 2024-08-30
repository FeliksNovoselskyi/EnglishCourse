
$(document).ready(function() {
    $('#addmoduleform').submit(function(event) {
        event.preventDefault()

        var moduleName = $('input[name=modulename]').val()
        var courseId = $('select[name=course_id]').val()
        
        $.ajax({
            url: '/course/',
            type: 'POST',
            data: {
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
                add_module: true,
                modulename: moduleName,
                course_id: courseId,
            },
            success: function(response) {
                if (response.error) {
                    $('#error-message-module').text(response.error)
                } else if (response.addModule) {
                    $('#modules-list').append(response.module_html)
                    $('#dropdown-modules').append(`
                        <option value="${response.moduleId}">${response.moduleName}</option>
                    `)
                }
            }
        })
    })

    $('#modules-list').on('submit', '#delete-module-form', function(event) {
        event.preventDefault()
        
        var $form = $(this)
        var moduleId = $form.find('input[name=module_id]').val()
        
        var moduleLessons = document.querySelectorAll(`#module-lesson-id-${moduleId}`)
        var moduleTasks =  document.querySelectorAll(`#module-task-id-${moduleId}`)

        $('#delete-module-confirm-form').off('submit').on('submit', function(event) {
            event.preventDefault()
            
            $.ajax({
                url: '/course/',
                type: 'POST',
                data: {
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
                    module_id: moduleId,
                    delete_module: true
                },
                success: function(response) {
                    if (response.deleteModule) {
                        $form.closest('.module-block').remove()

                        moduleLessons.forEach(function(element) {
                            element.remove()
                        })
                        moduleTasks.forEach(function(element) {
                            element.remove()
                        })

                        var $optionToRemove = $('#dropdown-modules').find(`option[value="${moduleId}"]`)
                        if ($optionToRemove.length) {
                            $optionToRemove.remove()
                        }
                    } else {
                        alert('Помилка при видаленні модулю: ' + response.error)
                    }
                },
            })
        })
    })


    $('#addlessonform').submit(function(event) {
        event.preventDefault()

        var $form = $(this)
        var lessonName = $('input[name=lessonname]').val()
        var moduleId = $form.find('select[name=module_id]').val()
        
        $.ajax({
            url: '/course/',
            type: 'POST',
            data: {
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
                add_lesson: true,
                lessonname: lessonName,
                module_id: moduleId,
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

        $('#delete-task-confirm-form').off('submit').on('submit', function(event) {
            event.preventDefault()

            // console.log(taskId, lessonId)
            
            $.ajax({
                url: '/course/',
                type: 'POST',
                data: {
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
                    task_id: taskId,
                    lesson_id: lessonId,
                    delete_task: true,
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
                        alert('Помилка при видаленні завдання: ' + response.error)
                    }
                }
            });
        })
    });
})
