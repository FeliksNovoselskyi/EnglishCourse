$(document).ready(function () {
    const $container = $('.lessons')

    if ($container.length) {
        new Sortable($container[0], {
            animation: 150,
            onEnd: function () {
                const lessonOrder = []

                // Получаем все элементы уроков в контейнере
                const $lessons = $container.children()

                // Перебираем каждый урок и сохраняем его id и порядок
                $lessons.each(function (index) {
                    const lessonId = $(this).data('lesson-id') // Получаем id урока из data атрибута
                    lessonOrder.push({
                        id: lessonId,
                        order: index + 1 // плюсуем 1 чтобы порядок начинался с 1, а не с нуля 0
                    })
                })

                // Получаем csrf из тега meta в шаблоне
                const csrfToken = $('meta[name="csrf-token"]').attr('content')

                $.ajax({
                    type: 'POST',
                    url: window.location.href,
                    data: {
                        csrfmiddlewaretoken: csrfToken,
                        lesson_order: JSON.stringify(lessonOrder)
                    },
                    success: function (response) {
                        console.log('свержение порядка среди уроков было успешно')
                    },
                })
            }
        })
    } else {
        console.log('уроков ещё нету')
    }
})
