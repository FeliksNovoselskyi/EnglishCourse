// файл для переброски пользователя на уникальную страницу каждого задания
document.addEventListener('DOMContentLoaded', function () {
    // получаем все элементы в шаблоне, при клике на которые можно перейти к заданию
    // P.S сам блок задания, и всплывашка с его названием
    const clickableElements = document.querySelectorAll('.course-icon-block.clickable-task, .task-name-popup')

    // обработка клика каждого из этих элементов
    clickableElements.forEach(function(element) {
        element.addEventListener('click', function() {
            const taskUrl = element.getAttribute('data-task-url') // получения нужной ссылки из атрибутов шаблона
            window.location.href = taskUrl // перенесение пользователя на нужную страницу задания
        })
    });
});
