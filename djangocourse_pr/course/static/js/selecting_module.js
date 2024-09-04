document.addEventListener('DOMContentLoaded', function () {
    const moduleBlocks = document.querySelectorAll('.module-block')
    const lessonsContainer = document.querySelector('.lessons')
    const dropdownLessons = document.querySelector('#dropdown-lessons')
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    
    window.moduleSelected = false

    // Используем делегирование событий для модуля блоков
    document.addEventListener('click', function(event) {
        const target = event.target.closest('.module-block')

        if (target) {
            const moduleId = target.dataset.moduleId

            // Обновляем data-module-id в контейнере уроков
            lessonsContainer.dataset.moduleId = moduleId
            window.moduleSelected = true

            $.ajax({
                type: 'POST',
                url: window.location.href,
                data: {
                    csrfmiddlewaretoken: csrfToken,
                    filter_by_module: true,
                    module_id: moduleId
                },
                success: function (response) {
                    if (response.lessons_html) {
                        lessonsContainer.innerHTML = response.lessons_html
                        dropdownLessons.innerHTML = response.dropdown_lessons
                    }
                },
            })
        }
    })
})