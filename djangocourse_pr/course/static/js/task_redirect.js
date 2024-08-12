document.addEventListener('DOMContentLoaded', function () {
    const clickableElements = document.querySelectorAll('.course-icon-block.clickable-task, .task-name-popup');

    clickableElements.forEach(function(element) {
        element.addEventListener('click', function() {
            const taskUrl = element.getAttribute('data-task-url');
            window.location.href = taskUrl;
        });
    });
});
