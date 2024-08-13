
$(document).ready(function() {
    $('#addnameform').submit(function(event) {
        event.preventDefault()

        var formData = new FormData()
        formData.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
        formData.append('taskname', $('input[name=taskname]').val())
        formData.append('taskfile', $('input[name=taskfile]')[0].files[0])
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
                    $('.course-block.add-task-block').before(response.task_html)
                }
                if (response.error) {
                    $('#error-message').text(response.error)
                }
            },
        })
    });

    $('#courses').on('submit', 'form', function(event) {
        event.preventDefault()

        var $form = $(this)
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
                    $form.closest('.course-block').remove()
                } else {
                    alert('Ошибка при удалении задачи: ' + response.error)
                }
            }
        });
    });
})
