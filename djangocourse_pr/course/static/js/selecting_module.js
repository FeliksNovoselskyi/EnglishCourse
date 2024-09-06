document.addEventListener('DOMContentLoaded', function () {
    const lessonsContainer = document.querySelector('.lessons')
    const dropdownLessons = document.querySelector('#dropdown-lessons')
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    
    // Обозначаем переменную moduleSelected с булевым значением
    window.moduleSelected = false
    
    let moduleBlocks = document.querySelectorAll('.module-block')
    
    // Получаем уроки после динамических обновлений контента на странице
    // (для корректного отображения выделения на модуля на странице)
    function updateModuleBlocks() {
        moduleBlocks = document.querySelectorAll('.module-block')
    }

    document.addEventListener('click', function(event) {
        const target = event.target.closest('.module-block')

        // Обрабатываем клик на один из модулей для отображения его уроков
        if (target) {
            const moduleId = target.dataset.moduleId

            moduleBlocks.forEach(
                block => block.classList.remove('selected-module')
            )

            // Добавляем класс selected-module только выбранному модулю
            target.classList.add('selected-module')

            // В отрисованные уроки записываем id модуля в data атрибут
            lessonsContainer.dataset.moduleId = moduleId
            window.moduleSelected = true

            $.ajax({
                type: 'POST',
                url: window.location.href,
                data: {
                    csrfmiddlewaretoken: csrfToken,
                    filter_by_module: true,
                    module_id: moduleId,
                },
                success: function (response) {
                    if (response.lessons_html) {
                        lessonsContainer.innerHTML = response.lessons_html
                        dropdownLessons.innerHTML = response.dropdown_lessons
                        updateModuleBlocks()
                    }
                },
            })
        }
    })
})