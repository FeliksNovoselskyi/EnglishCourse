
$(document).ready(function() {
    $('#addnameform').submit(function(event) {
        event.preventDefault();

        var formData = new FormData();
        formData.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val());
        formData.append('taskname', $('input[name=taskname]').val());
        formData.append('taskfile', $('input[name=taskfile]')[0].files[0]);
        formData.append('add_task', true);

        $.ajax({
            url: '/course/',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                if (response.addName) {
                    // тут типо все норм и все правильно, ошибок в заполнении поля нет!!
                    $('#error-message').text(response.error);

                    // <p>${response.task.name}</p>
                    // <button class="edit-task-btn"><img src="/static/images/edit.png" alt="change-task-img" class="small-course-imgs"></button>

                    $('.course-block.add-task-block').before(
                        `
                        <div class="course-block">
                            <div class="course-icon-block clickable-task" onclick="window.location.href='${response.task.url}'">
                                <img src="/static/images/finished.png" alt="finished-img" class="course-imgs">
                            </div>

                            <div class="task-change-icons">
                                <button class="delete-task-btn"><img src="/static/images/delete.png" alt="change-task-img" class="small-course-imgs"></button>
                            </div>

                            <div class="task-name-popup">${response.task.name}</div>
                        </div>
                        `
                    )
                }
                if (response.error) {
                    $('#error-message').text(response.error);
                }
            },
        })
    });

    $('#courses').on('submit', 'form', function(event) {
        event.preventDefault();

        var $form = $(this);
        var taskId = $form.find('input[name=task_id]').val();

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
                    $form.closest('.course-block').remove();
                } else {
                    alert('Ошибка при удалении задачи: ' + response.error);
                }
            }
        });
    });
})
