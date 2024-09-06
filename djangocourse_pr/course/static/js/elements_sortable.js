$(document).ready(function () {
    const $lessons = $('.lessons')
    const $modules = $('#modules-list')
    const $userStatus = $('#user-status')

    const forLesson = 'lesson-id'
    const forModule = 'module-id'

    // Функция для сортировки элементов страницы (например уроки или модули)
    // библиотека Sortable в jQuery
    function sortableContainer(container, dataAttr, sortableObjType) {
        if (container.length && $userStatus.val() == 'teacher') {
            new Sortable(container[0], {
                animation: 150,
                onEnd: function () {
                    const order = []
                    const containerCells = container.children() // Получаем все элементы в контейнере
                    const csrfToken = $('meta[name="csrf-token"]').attr('content') // Получаем csrf из тега meta в шаблоне
                    // Перебираем каждый элемент контейнера и сохраняем его id и порядок
                    containerCells.each(function (index) {
                        const cellId = $(this).data(dataAttr) // Получаем id элемента из data атрибута
                        order.push({
                            id: cellId,
                            order: index + 1 // плюсуем 1 чтобы порядок начинался с 1, а не с нуля
                        })
                    })
    
                    $.ajax({
                        type: 'POST',
                        url: window.location.href,
                        data: {
                            csrfmiddlewaretoken: csrfToken,
                            cell_order: JSON.stringify(order),
                            sortable_obj_type: sortableObjType,
                        },
                        success: function () {
                            // console.log('свержение порядка среди уроков было успешно')
                        },
                    })
                },
            })
        }
    }

    sortableContainer($lessons, forLesson, 'lesson')
    sortableContainer($modules, forModule, 'module')
})
