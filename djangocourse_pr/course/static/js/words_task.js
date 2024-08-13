$(document).ready(function() {
    const taskData = $('#task-data');
    let currentIndex = parseInt(taskData.data('current-index'), 10);

    $('#nexttaskform').submit(function(event) {
        event.preventDefault();

        $.ajax({
            url: window.location.href,
            type: 'POST',
            data: {
                'current_index': currentIndex,
                'csrfmiddlewaretoken': $('input[name="csrfmiddlewaretoken"]').val(),
            },
            success: function(response) {
                if (response.error) {
                    window.location.href = allTasksUrl;
                } else {
                    $('#column1').text(response.column1);
                    $('#column2').text(response.column2);
                    currentIndex = response.next_index;
                    taskData.data('current-index', currentIndex);
                }
            },
        });
    });
});
