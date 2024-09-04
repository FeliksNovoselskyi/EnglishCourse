document.addEventListener('DOMContentLoaded', function () {
    // Находим родительский элемент, который существует на момент загрузки страницы
    const container = document.querySelector('.lessons')

    // Назначаем обработчик клика на родительский элемент
    container.addEventListener('click', function(event) {
        const target = event.target.closest('.course-icon-block.clickable-task, .task-name-popup');
        if (target) {
            const taskUrl = target.getAttribute('data-task-url');
            if (taskUrl) {
                window.location.href = taskUrl;
            }
        }
    });
});