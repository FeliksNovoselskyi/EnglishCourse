$(document).ready(function() {
    // Единая и универсальная функция для ajax запросов
    function ajaxRequest(url, type, data, successCallback) {
        $.ajax({
            url: url,
            type: type,
            data: data,
            contentType: false,  // Устанавливаем по умолчанию false, так как это подходит для всех случаев
            processData: false,  // Устанавливаем по умолчанию false, так как это подходит для всех случаев
            success: successCallback,
        })
    }

    // Проверяем выбран ли модуль, и отображаем соответствующий контент на странице
    function updateLessonDisplay() {
        var lessonsContainer = $('.lessons')
        var noLessonsMessage = $('#no-lessons-message')
    
        if (document.querySelectorAll('.module-block').length === 0) {
            noLessonsMessage.hide()
            return;
        }

        if (window.moduleSelected) {
            // Проверяем, есть ли элементы уроков в текущем модуле
            if (lessonsContainer.children().length > 0) {
                noLessonsMessage.hide()
            } else {
                noLessonsMessage.show()
            }
        } else {
            noLessonsMessage.hide()
        }
    }

    // Каждую миллисекунду проверяем, выбран ли модуль пользователем
    setInterval(updateLessonDisplay, 1)
    
    // Добавление модуля
    $('#addmoduleform').submit(function(event) {
        event.preventDefault()

        var moduleName = $('input[name=modulename]').val()
        var courseId = $('select[name=course_id]').val()
        
        var data = new FormData()
        data.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
        data.append('add_module', true)
        data.append('modulename', moduleName)
        data.append('course_id', courseId)

        ajaxRequest('/course/', 'POST', data, function(response) {
            if (response.error) {
                $('#error-message-module').text(response.error)
            } else if (response.addModule) {
                $('#modules-list').append(response.module_html)
                $('#dropdown-modules').append(`
                    <option value="${response.moduleId}">${response.moduleName}</option>
                `)
            }
        })
    })

    // Удаление модуля
    $('#modules-list').on('submit', '#delete-module-form', function(event) {
        event.preventDefault()

        var $form = $(this)
        var moduleId = $form.find('input[name=module_id]').val()

        $('#delete-module-confirm-form').off('submit').on('submit', function(event) {
            event.preventDefault()

            var data = new FormData()
            data.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
            data.append('module_id', moduleId)
            data.append('delete_module', true)

            ajaxRequest('/course/', 'POST', data, function(response) {
                if (response.deleteModule) {
                    $form.closest('.module-block').remove()

                    // Установка задержки перед удалением со страницы чтобы удаляемое успело загрузится
                    setTimeout(() => {
                        const moduleLessons = document.querySelectorAll(`#module-lesson-id-${moduleId}`)
                        const moduleTasks = document.querySelectorAll(`#module-task-id-${moduleId}`)
                    
                        // console.log('Уроки модуля после задержки:', moduleLessons)
                        // console.log('Задания модуля после задержки:', moduleTasks)
                    
                        moduleLessons.forEach(element => element.remove())
                        moduleTasks.forEach(element => element.remove())
                    }, 1)

                    var $optionToRemove = $('#dropdown-modules').find(`option[value="${moduleId}"]`)
                    if ($optionToRemove.length) {
                        $optionToRemove.remove()
                    }

                    updateLessonDisplay()
                } else {
                    alert('Помилка при видаленні модулю: ' + response.error)
                }
            })
        })
    })

    // Добавление урока
    $('#addlessonform').submit(function(event) {
        event.preventDefault()

        var $form = $(this)
        var lessonName = $('input[name=lessonname]').val()
        var moduleId = $form.find('select[name=module_id]').val()
        var currentModuleId = $('.lessons').attr('data-module-id')

        var data = new FormData()
        data.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
        data.append('add_lesson', true)
        data.append('lessonname', lessonName)
        data.append('module_id', moduleId)

        ajaxRequest('/course/', 'POST', data, function(response) {
            if (response.error) {
                $('#error-message-lesson').text(response.error)
            } else if (response.addLesson) {
                // Проверка, если текущий модуль совпадает с модулем урока

                console.log(currentModuleId, parseInt(moduleId))

                if (parseInt(currentModuleId) === parseInt(moduleId)) {
                    $('.lessons').append(response.lesson_html)
                    $('#dropdown-lessons').append(`
                        <option value="${response.lessonId}">${response.lessonName}</option>
                    `)
                    updateLessonDisplay()
                }
            }
        })
    })

    // Удаление урока
    $('.lessons').on('submit', '#delete-lesson-formid', function(event) {
        event.preventDefault()

        var $form = $(this)
        var lessonId = $form.find('input[name=lesson_id]').val()

        var data = new FormData()
        data.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
        data.append('lesson_id', lessonId)
        data.append('delete_lesson', true)

        ajaxRequest('/course/', 'POST', data, function(response) {
            if (response.deleteLesson) {
                $form.closest('.lessons-from-backend').remove()

                updateLessonDisplay()

                var $optionToRemove = $('#dropdown-lessons').find(`option[value="${lessonId}"]`)
                if ($optionToRemove.length) {
                    $optionToRemove.remove()
                }
            } else {
                alert('Помилка при видаленні уроку: ' + response.error)
            }
        })
    })

    // Добавление задания
    $('#addnameform').submit(function(event) {
        event.preventDefault()

        var selectedLesson = document.querySelector('#dropdown-lessons')
        var formData = new FormData()
        formData.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
        formData.append('taskname', $('input[name=taskname]').val())
        formData.append('taskfile', $('input[name=taskfile]')[0].files[0])
        formData.append('additional_words_file', $('input[name=additional_words_file]')[0].files[0])
        formData.append('selected_lesson_value', selectedLesson.value)
        formData.append('add_task', true)

        ajaxRequest('/course/', 'POST', formData, function(response) {
            if (response.addName) {
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
        })
    })

    // Удаление задания
    $('.lessons').on('submit', '.delete-task-form', function(event) {
        event.preventDefault()

        var $form = $(this)
        var taskId = $form.find('input[name=task_id]').val()
        var lessonId = $form.find('input[name=lesson_id]').val()

        $('#delete-task-confirm-form').off('submit').on('submit', function(event) {
            event.preventDefault()

            var data = new FormData()
            data.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
            data.append('task_id', taskId)
            data.append('lesson_id', lessonId)
            data.append('delete_task', true)

            ajaxRequest('/course/', 'POST', data, function(response) {
                if (response.deleteTask) {
                    $form.closest('.course-block').remove()

                    if (response.canDeleteLesson) {
                        $('.delete-lesson-form-' + lessonId).append(`
                            <button type="submit" name="delete_lesson" class="delete-lesson-btn" id="delete-button-${lessonId}">
                                <img src="/static/images/delete.png" alt="delete-lesson-img" class="delete-lessons-icon">
                            </button>
                        `)
                    }
                } else {
                    alert('Помилка при видаленні завдання: ' + response.error)
                }
            })
        })
    })
})
