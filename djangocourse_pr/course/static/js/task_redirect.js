document.addEventListener('DOMContentLoaded', function () {
    // Элементы при клике на которые можно перейти к заданию
    const clickableElements = document.querySelectorAll('.course-icon-block.clickable-task, .task-name-popup')

    // обработка клика каждого из этих элементов
    clickableElements.forEach(function(element) {
        element.addEventListener('click', function() {
            const taskUrl = element.getAttribute('data-task-url') // Получения нужной ссылки из атрибутов шаблона
            window.location.href = taskUrl
        })
    });
});
