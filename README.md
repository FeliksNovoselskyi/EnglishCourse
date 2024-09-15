# Доброго дня!
---
# Course Project - Проект курсу для навчання

![Python](https://img.shields.io/badge/python-3.12.5-blue)
![Django](https://img.shields.io/badge/django-5.0-brightgreen)
![jQuery](https://img.shields.io/badge/jQuery-3.6.0-blue)
![Sortable.js](https://img.shields.io/badge/Sortable.js-1.14.0-orange)
![AJAX](https://img.shields.io/badge/AJAX-technology-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![HTML/CSS](https://img.shields.io/badge/HTML%2FCSS-blue)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.0-purple)
![Figma](https://img.shields.io/badge/Figma-design-blueviolet)
![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4%EF%B8%8F-blue)
![English Support](https://img.shields.io/badge/English%20Support-%F0%9F%87%AC%F0%9F%87%A7-blue)

## Опис проекту

Цей проект є курсом для навчання студентів та створенням уроків і завдань з боку вчителів. Вчителі мають зручний інтерфейс для створення модулів, уроків та завдань для учнів, а учні можуть швидко проходити створені завдання. 

Головною перевагою проекту є масштабне використання технології AJAX, завдяки чому майже всі операції — заповнення, створення, видалення та проходження завдань — виконуються швидко та без оновлення сторінок

## Зміст
- [Встановлення та запуск](#встановлення-та-запуск)
- [Використання можливостей акаунтів](#використання-можливостей-акаунтів)
- [Сторінки проекту](#сторінки-проекту)
- [Використані технології](#використані-технології)
- [Структура проекту](#структура-проекту)
- [Функціонал проекту](#функціонал-проекту)
- [FRONTEND](#frontend)
- [BACKEND](#backend)
- [МОДЕЛІ ПРОЕКТУ](#моделі-проекту)
- [Плани подальшого розвитку проекту](#плани-подальшого-розвитку-проекту)
- [English version](#english-version)

## Встановлення та запуск
### Якщо Django встановлений
#### 1. Клонування репозиторію
```
git clone https://github.com/FeliksNovoselskyi/course-tasks-practice.git
```
#### 2. Перехід до головної директорії проекту з файлом ```manage.py```
```
cd djangocourse_pr
```
#### 3. Встановіть необхідні бібліотеки для створення завданнь
```
pip install pandas
```
```
pip install openpyxl
```
#### 4. Запуск локального серверу
Для Windows
```
python manage.py runserver
```
Для MacOS/Linux
```
python3 manage.py runserver
```

### Якщо Django НЕ встановлений
#### 1. Встановіть Django
```
pip install django
```

#### 2. Клонування репозиторію
```
git clone https://github.com/FeliksNovoselskyi/course-tasks-practice.git
```
#### 3. Перехід до головної директорії проекту з файлом ```manage.py```
```
cd djangocourse_pr
```
#### 4. Встановіть необхідні бібліотеки для створення завданнь
```
pip install pandas
```
```
pip install openpyxl
```
#### 5. Запуск локального серверу
Для Windows
```
python manage.py runserver
```
Для MacOS/Linux
```
python3 manage.py runserver
```
## Використання можливостей акаунтів 
>[Повернутись до початку](#доброго-дня)
#### Для того щоб використати можливості вчителя
1. Перейдіть на сторінку авторизації
2. Увійдіть в акаунт з іменем ```testteacher``` та паролем ```123456```
3. Перейдіть на сторінку курсу, та користуйтесь

#### Для того щоб використати можливості студента
1. Перейдіть на сторінку авторизації
2. Після цього, перейдіть на сторінку реєстрації
3. Створіть акаунт, він з самого початку буде акаунтом студента
4. Увійдіть в свій акаунт

## Сторінки проекту
>[Повернутись до початку](#доброго-дня)
- **Головна сторінка** - головна сторінка проекту з інформацією про платформу (поки що пуста сторінка)
- **Сторінка курсу** - сторінка яка надає можливість вчителям заповнювати курс модулями, уроками та завданнями, а студентам їх виконувати
- **Сторінки авторизації та реєстрації** - на цих сторінках ви можете створити свій акаунт на сайті, та увійти в нього

## Використані технології
>[Повернутись до початку](#доброго-дня)
- **[Python](https://www.python.org/)** — мова програмування, використана для створення backend частини сайту
- **[Django](https://docs.djangoproject.com/en/5.0/)** — веб-фреймворк, на якому створений проект
- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** — основна мова програмування, що покращує користувацький інтерфейс
- **[jQuery](https://jquery.com/)** — бібліотека JavaScript, що спрощує розробку та користування проектом
- **[Sortable](https://jqueryui.com/sortable/)** — плагін jQuery для зручного сортування уроків та модулів, а також зміни їхньої послідовності
- **[AJAX](https://api.jquery.com/category/ajax/)** — технологія для швидкої та зручної роботи з даними без оновлення сторінок
- **[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)/[CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)** — мови для верстки сайту, створення його структури та стилів
- **[Bootstrap 5](https://getbootstrap.com/)** — фронтенд-фреймворк для створення деяких елементів на сторінках
- **[Figma](https://help.figma.com/hc/en-us)** — онлайн-сервіс, використаний для планування дизайну сайту
- **[SQLite3](https://www.sqlite.org/docs.html)** - база даних, яка була використана для розробки сайту

## Структура проекту
>[Повернутись до початку](#доброго-дня)
```mermaid
graph TD;
    A[djangocourse_pr] --> B[course] --> C[Додаток для 
    головної сторінки, та сторінки з курсом];
    A --> D[auth_reg] --> E[Додаток сторінок 
    реєстрації];
```

## Функціонал проекту
### FRONTEND
>[Повернутись до початку](#доброго-дня)
#### Файл djangocourse_pr/course/static/js/task_redirect.js
```javascript
document.addEventListener('DOMContentLoaded', function () {
    // Знаходимо батьківський елемент, який існує на момент завантаження сторінки
    const container = document.querySelector('.lessons')

    // Призначаємо обробник кліка на батьківський елемент
    container.addEventListener('click', function(event) {
        const target = event.target.closest('.course-icon-block.clickable-task, .task-name-popup')
        if (target) {
            const taskUrl = target.getAttribute('data-task-url')
            if (taskUrl) {
                window.location.href = taskUrl
            }
        }
    })
})
```
Цей файл забезпечує перехід до унікальної сторінки кожного завдання, отримуючи елементі, при натисканні на які можна переміститись на завдання, та обрабляючи клік на них, переносячи на потрібну сторінку з завданням

#### Файл djangocourse_pr/course/static/js/selecting_module.js
```javascript
document.addEventListener('DOMContentLoaded', function () {
    const lessonsContainer = document.querySelector('.lessons')
    const dropdownLessons = document.querySelector('#dropdown-lessons')
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    
    // Визначаємо змінну moduleSelected з булевим значенням
    window.moduleSelected = false
    
    let moduleBlocks = document.querySelectorAll('.module-block')
    
    // Отримуємо уроки після динамічних оновлень контенту на сторінці
    // (для коректного відображення виділення модуля на сторінці)
    function updateModuleBlocks() {
        moduleBlocks = document.querySelectorAll('.module-block')
    }

    document.addEventListener('click', function(event) {
        const target = event.target.closest('.module-block')

        // Обробляємо клік на один із модулів для відображення його уроків
        if (target) {
            const moduleId = target.dataset.moduleId

            moduleBlocks.forEach(
                block => block.classList.remove('selected-module')
            )

            // Додаємо клас selected-module лише вибраному модулю
            target.classList.add('selected-module')

            // Записуємо id модуля в data атрибут відмальованих уроків
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
```
У цьому файлі обробляється натискання на кожний модуль, та відправлення AJAX запросу на сервер, щоб отримати уроки з обраного модуля. Завдяки цьому на сторінці відображається тільки той контент що відноситься до цього модуля.

#### Файл djangocourse_pr/course/static/js/eng_course_management.js
```javascript
$(document).ready(function() {
    // Єдина і універсальна функція для ajax запитів
    function ajaxRequest(url, type, data, successCallback) {
        $.ajax({
            url: url,
            type: type,
            data: data,
            contentType: false,  // Встановлюємо за замовчуванням false, оскільки це підходить для всіх випадків
            processData: false,  // Встановлюємо за замовчуванням false, оскільки це підходить для всіх випадків
            success: successCallback,
        })
    }

    // Перевіряємо, чи вибрано модуль, і відображаємо відповідний контент на сторінці
    function updateLessonDisplay() {
        var lessonsContainer = $('.lessons')
        var noLessonsMessage = $('#no-lessons-message')
    
        if (document.querySelectorAll('.module-block').length === 0) {
            noLessonsMessage.hide()
            return;
        }

        if (window.moduleSelected) {
            // Перевіряємо, чи є елементи уроків у поточному модулі
            if (lessonsContainer.children().length > 0) {
                noLessonsMessage.hide()
            } else {
                noLessonsMessage.show()
            }
        } else {
            noLessonsMessage.hide()
        }
    }

    // Кожну мілісекунду перевіряємо, чи вибрано модуль користувачем
    setInterval(updateLessonDisplay, 1)
    
    // Додавання модуля
    $('#addmoduleform').submit(function(event) {
        event.preventDefault()

        var moduleName = $('input[name=modulename]').val()
        var courseId = $('select[name=course_id]').val()
        
        var data = new FormData()
        data.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
        data.append('add_module', true)
        data.append('modulename', moduleName)
        data.append('course_id', courseId)

        ajaxRequest('/course/', 'POST', data, function(response) {
            if (response.error) {
                $('#error-message-module').text(response.error)
            } else if (response.addModule) {
                $('#modules-list').append(response.module_html)
                $('#dropdown-modules').append(`
                    <option value="${response.moduleId}">${response.moduleName}</option>
                `)
            }
        })
    })

    // Видалення модуля
    $('#modules-list').on('submit', '#delete-module-form', function(event) {
        event.preventDefault()

        var $form = $(this)
        var moduleId = $form.find('input[name=module_id]').val()

        $('#delete-module-confirm-form').off('submit').on('submit', function(event) {
            event.preventDefault()

            var data = new FormData()
            data.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
            data.append('module_id', moduleId)
            data.append('delete_module', true)

            ajaxRequest('/course/', 'POST', data, function(response) {
                if (response.deleteModule) {
                    $form.closest('.module-block').remove()

                    // Встановлення затримки перед видаленням зі сторінки, щоб видалене встигло завантажитися
                    setTimeout(() => {
                        const moduleLessons = document.querySelectorAll(`#module-lesson-id-${moduleId}`)
                        const moduleTasks = document.querySelectorAll(`#module-task-id-${moduleId}`)
                    
                        moduleLessons.forEach(element => element.remove())
                        moduleTasks.forEach(element => element.remove())
                    }, 1)

                    var $optionToRemove = $('#dropdown-modules').find(`option[value="${moduleId}"]`)
                    if ($optionToRemove.length) {
                        $optionToRemove.remove()
                    }

                    updateLessonDisplay()
                } else {
                    alert('Помилка при видаленні модуля: ' + response.error)
                }
            })
        })
    })

    // Додавання уроку
    $('#addlessonform').submit(function(event) {
        event.preventDefault()

        var $form = $(this)
        var lessonName = $('input[name=lessonname]').val()
        var moduleId = $form.find('select[name=module_id]').val()
        var currentModuleId = $('.lessons').attr('data-module-id')

        var data = new FormData()
        data.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
        data.append('add_lesson', true)
        data.append('lessonname', lessonName)
        data.append('module_id', moduleId)

        ajaxRequest('/course/', 'POST', data, function(response) {
            if (response.error) {
                $('#error-message-lesson').text(response.error)
            } else if (response.addLesson) {
                // Перевірка, чи поточний модуль співпадає з модулем уроку

                if (parseInt(currentModuleId) === parseInt(moduleId)) {
                    $('.lessons').append(response.lesson_html)
                    $('#dropdown-lessons').append(`
                        <option value="${response.lessonId}">${response.lessonName}</option>
                    `)
                    updateLessonDisplay()
                }
            }
        })
    })

    // Видалення уроку
    $('.lessons').on('submit', '#delete-lesson-formid', function(event) {
        event.preventDefault()

        var $form = $(this)
        var lessonId = $form.find('input[name=lesson_id]').val()

        var data = new FormData()
        data.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
        data.append('lesson_id', lessonId)
        data.append('delete_lesson', true)

        ajaxRequest('/course/', 'POST', data, function(response) {
            if (response.deleteLesson) {
                $form.closest('.lessons-from-backend').remove()

                updateLessonDisplay()

                var $optionToRemove = $('#dropdown-lessons').find(`option[value="${lessonId}"]`)
                if ($optionToRemove.length) {
                    $optionToRemove.remove()
                }
            } else {
                alert('Помилка при видаленні уроку: ' + response.error)
            }
        })
    })

    // Додавання завдання
    $('#addnameform').submit(function(event) {
        event.preventDefault()

        var selectedLesson = document.querySelector('#dropdown-lessons')
        var formData = new FormData()
        formData.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
        formData.append('taskname', $('input[name=taskname]').val())
        formData.append('taskfile', $('input[name=taskfile]')[0].files[0])
        formData.append('additional_words_file', $('input[name=additional_words_file]')[0].files[0])
        formData.append('selected_lesson_value', selectedLesson.value)
        formData.append('add_task', true)

        ajaxRequest('/course/', 'POST', formData, function(response) {
            if (response.addName) {
                $('#error-message').text(response.error)

                var lessonBlock = $('.lessons-from-backend').filter(function() {
                    return $(this).find('input[name=lesson_id]').val() === selectedLesson.value
                })

                lessonBlock.find('.lesson-tasks').append(response.task_html)
            } if (response.canDeleteLesson === false) {
                $('#delete-button-' + selectedLesson.value).remove()
            } if (response.error) {
                $('#error-message').text(response.error)
            }
        })
    })

    // Видалення завдання
    $('.lessons').on('submit', '.delete-task-form', function(event) {
        event.preventDefault()

        var $form = $(this)
        var taskId = $form.find('input[name=task_id]').val()
        var lessonId = $form.find('input[name=lesson_id]').val()

        $('#delete-task-confirm-form').off('submit').on('submit', function(event) {
            event.preventDefault()

            var data = new FormData()
            data.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
            data.append('task_id', taskId)
            data.append('lesson_id', lessonId)
            data.append('delete_task', true)

            ajaxRequest('/course/', 'POST', data, function(response) {
                if (response.deleteTask) {
                    $form.closest('.course-block').remove()

                    if (response.canDeleteLesson) {
                        $('.delete-lesson-form-' + lessonId).append(`
                            <button type="submit" name="delete_lesson" class="delete-lesson-btn" id="delete-button-${lessonId}">
                                <img src="/static/images/delete.png" alt="delete-lesson-img" class="delete-lessons-icon">
                            </button>
                        `)
                    }
                } else {
                    alert('Помилка при видаленні завдання: ' + response.error)
                }
            })
        })
    })
})
```
Цей файлі проходить керівництво курсу вчителем, тут обробляється створення модулів, уроків та завдань, а також їхнє видалення. Усе виконується за допомогою технології AJAX

#### Файл djangocourse_pr/course/static/js/elements_sortable.js
```javascript
$(document).ready(function () {
    const $lessons = $('.lessons') // Отримуємо уроки
    const $modules = $('#modules-list') // Отримуємо модулі
    const $userStatus = $('#user-status') // Отримуємо статус користувача

    const forLesson = 'lesson-id' // Атрибут для уроку
    const forModule = 'module-id' // Атрибут для модуля

    // Функція для сортування елементів на сторінці (наприклад, уроки чи модулі)
    // бібліотека Sortable в jQuery
    function sortableContainer(container, dataAttr, sortableObjType) {
        if (container.length && $userStatus.val() == 'teacher') { // Перевіряємо, чи контейнер не порожній і користувач є вчителем
            new Sortable(container[0], {
                animation: 150,
                onEnd: function () {
                    const order = []
                    const containerCells = container.children() // Отримуємо всі елементи в контейнері
                    const csrfToken = $('meta[name="csrf-token"]').attr('content') // Отримуємо csrf з тегу meta в шаблоні
                    // Перебираємо кожен елемент контейнера і зберігаємо його id та порядок
                    containerCells.each(function (index) {
                        const cellId = $(this).data(dataAttr) // Отримуємо id елемента з data атрибута
                        order.push({
                            id: cellId,
                            order: index + 1 // Плюсуємо 1, щоб порядок починався з 1, а не з нуля
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
                        success: function () {},
                    })
                },
            })
        }
    }

    sortableContainer($lessons, forLesson, 'lesson') // Сортуємо уроки
    sortableContainer($modules, forModule, 'module') // Сортуємо модулі
})
```
У цьому файлі обробляється зміна порядку елементів на сторінці (наприклад модулів та уроків), та відправка нового порядку модулів та уроків на сервер для обробки та отримання потрібних змін для сторінки після цього

#### Файл djangocourse_pr/course/static/js/sentences_task.js
```javascript
$(document).ready(function() {
    const taskData = $('#task-data') // Отримуємо блок, де редагується речення, а також де знаходиться його український переклад
    let currentIndex = parseInt(taskData.data('current-index'), 10) // Отримуємо індекс речення, на якому знаходиться користувач
    
    const initialSentence = $('#column1').text().split(" ") // Англійська версія першого речення
    const buttons = $('.word-button') // Кнопки зі словами для першого речення
    const finalSentence = $('.final-sentence') // Речення, що збирається користувачем
    const progressBarCells = $('.progress-bar-cell') // Ячейки прогрес-бару
    const randomWordsFirstSentence = $('#randomwords_first') // Випадкові слова для першого речення
    const changeFinalSentence = document.querySelector('.final-sentence') // Збиране речення
    const finalSentencePlace = document.querySelector('.final-sentence-place') // Блок з підкресленням збираного речення
    // Отримуємо кнопку видалення слів, щоб приховувати її
    // в разі, якщо слів немає, і навпаки
    const undoBtn = document.querySelector('.undo-btn')

    // Прапорці
    let formSubmittedFlag = false
    let updateSentenceFlag = true
    let undoSentenceFlag = true
    let isFirstSentence = true
    let isUpdateWords = true

    // Підготовлюємо випадкові слова для першого речення у вигляді масиву
    let randomWordsFirstSentenceText = randomWordsFirstSentence.text()
    randomWordsFirstSentenceText = randomWordsFirstSentenceText.split(" ")

    let allWords = []

    // Функція відправки форми
    // для переходу на наступні речення
    function submitForm() {
        setTimeout(function() {
            $('#nexttaskform').submit() // Відправка форми через 2 секунди (для краси та плавності використання)
        }, 2000)
    }

    // Функція, в якій визначається, якими словами оновлювати кнопки
    // залежно від речення, на якому знаходиться користувач
    function checkSentenceForUpdateBtns() {
        // Умова для оновлення контенту кнопок
        // тут перевіряється, на якому реченні користувач, в залежності від цього оновлюємо контент кнопок на потрібний
        if (isFirstSentence && isUpdateWords) {
            updateButtons(allWords)
        } else if (allWords.length > 0 && isUpdateWords) {
            updateButtons(allWords)
        }
    }

    // Функція для перетасовування слів для кнопок
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    // Функція оновлення кнопок після додавання/видалення слова
    function updateButtons(wordsArray) {
        wordsArray = shuffleArray(wordsArray)
        wordsArray = wordsArray.toString().toLowerCase().split(',')
        buttons.each(function(index) {
            if (index < wordsArray.length) {
                $(this).text(wordsArray[index])
            }
        })
    }

    // Універсальна функція підготовки слів для кнопок
    // як для першого речення, так і для всіх наступних
    function prepareButtonsContent(initialSentenceArg, randomFirstWords, randomWordsArg) {
        allWords = initialSentenceArg.slice(0, 9)

        if (allWords.length < 9) {
            const neededWordsCountFS = 9 - allWords.length
            if (randomFirstWords) {
                randomWordsArg.splice(0, 1)
            }
            const additionalWordsFS = randomWordsArg.slice(0, neededWordsCountFS)
            allWords = allWords.concat(additionalWordsFS)
        }

        allWords = shuffleArray(allWords)
        allWords = allWords.toString().toLowerCase().split(',')

        // Перевірка та заміна дублікатів слів
        for (let i = 0; i < allWords.length; i++) {
            while (allWords.indexOf(allWords[i]) !== i) {
                allWords[i] = randomWordsArg.shift() // Заміна повторюваного слова на нове
            }
        }

        updateButtons(allWords)
    }

    // Додаємо слова першого речення в кнопки
    prepareButtonsContent(initialSentence, randomFirstWords=true, randomWordsFirstSentenceText)

    // Функція оновлення прогрес-бару
    function updateProgressBar() {
        progressBarCells.each(function(index) {
            if (index < currentIndex) {
                $(this).addClass('correct')
            }
        })
    }

    // Обробляємо клік на одну з кнопок зі словами
    $('.word-button').click(function() {
        const buttonText = $(this).text()
        const currentSentence = finalSentence.text()

        if (currentSentence && updateSentenceFlag) {
            finalSentence.text(`${currentSentence} ${buttonText}`) // Додаємо нове слово до старих, якщо вони є
        } else if (!currentSentence && updateSentenceFlag) {
            finalSentence.text(buttonText) // Призначаємо нове слово, оскільки до нього нічого немає
        }

        checkSentenceForUpdateBtns()
    })

    // Обробляємо подію кліка на кнопку видалення останнього слова
    $('.undo-btn').click(function() {
        // Отримуємо те, що вже введено, і перетворюємо в масив
        if (undoSentenceFlag) {
            const currentSentence = finalSentence.text()
            const currentWordsOfSentence = currentSentence.split(" ")
            currentWordsOfSentence.pop() // Видаляємо останній елемент (останне слово)
            finalSentence.text(`${currentWordsOfSentence.join(' ')}`) // Перетворюємо знову в текст, і задаємо
            
            checkSentenceForUpdateBtns()
        }
    })

    // Функція обробки неправильно зібраного речення
    function incorrectSentence() {
        changeFinalSentence.style.color = 'red'
        finalSentencePlace.style.borderBottom = 'dashed 2px red'
        progressBarCells.eq(currentIndex).addClass('incorrect') // Виділяємо поточну ячейку прогрес-бару червоним кольором
        
        formSubmittedFlag = true
        updateSentenceFlag = false
        undoSentenceFlag = false
        isUpdateWords = false

        submitForm()
    }

    // Функція перевірки речення
    function checkSentenceByInterval() {
        if (finalSentence.text() == '') {
            undoBtn.style.display = 'none'
            undoBtn.style.visibility = 'hidden'
        } else {
            undoBtn.style.display = 'flex'
            undoBtn.style.visibility = 'visible'
        }
        
        // Перевіряємо, чи відправляється форма
        // в іншому випадку перевірка завдань буде працювати некоректно, і завдання буде проходитися автоматично
        if (formSubmittedFlag) return

        const userSentence = finalSentence.text() // Отримуємо речення, зібране користувачем
        let correctSentence = $('#column1').text() // Правильне речення
        correctSentence = correctSentence.toLowerCase()
        const userWords = userSentence.split(" ")
        const correctWords = correctSentence.split(" ")

        // Додатково умова, якщо якимось чином користувач ввів слів більше, ніж потрібно
        if (userWords.length > correctWords.length) {
            incorrectSentence()
        } else if (userWords.length === correctWords.length)  {
            if (userSentence === correctSentence) {
                changeFinalSentence.style.color = 'orange'
                finalSentencePlace.style.borderBottom = 'dashed 2px orange'

                formSubmittedFlag = true
                updateSentenceFlag = false
                undoSentenceFlag = false
                isUpdateWords = false

                submitForm()
            } else {
                incorrectSentence()
            }
        } else {
            // Якщо речення ще не зібрано до кінця
            changeFinalSentence.style.color = 'black'
            finalSentencePlace.style.borderBottom = 'dashed 2px rgb(28, 28, 28)'
            progressBarCells.eq(currentIndex).removeClass('incorrect')
        }
    }

    // Перевіряємо збиране речення кожні 50 мілісекунд
    setInterval(checkSentenceByInterval, 50)
    
    $('#nexttaskform').submit(function(event) {
        let isCorrect = changeFinalSentence.style.color === 'orange' ? 1 : 0;
        event.preventDefault()

        $.ajax({
            url: window.location.href,
            type: 'POST',
            data: {
                'current_index': currentIndex,
                'csrfmiddlewaretoken': $('input[name="csrfmiddlewaretoken"]').val(),
            },
            success: function(response) {
                if (response.error) {
                    window.location.href = allTasksUrl
                } else {
                    $('#column1').text(response.english_sentence)
                    $('#column2').text(response.ukrainian_sentence)
                    currentIndex = response.next_index
                    taskData.data('current-index', currentIndex) // Оновлюємо речення на сторінці після перевірки його на правильність

                    updateProgressBar()

                    isFirstSentence = false
                    
                    // Отримуємо правильне речення та випадкові слова для наступних реченнь
                    let words = response.english_sentence.split(" ")
                    let randomWords = response.additional_words

                    // Додаємо слова нових реченнь у кнопки
                    prepareButtonsContent(words, randomFirstWords=false, randomWords)
                    
                    finalSentence.text('')
                    formSubmittedFlag = false
                    updateSentenceFlag = true
                    undoSentenceFlag = true
                    isUpdateWords = true
                }
            },
        });
    });
});
```
Цей файл забезпечує зручне, швидке та просте функціонування завдання зі збору реченнь
Тут обробляється:
1. Підстановка наступного речення у завданні
2. Заповнення блоків з словами потрібними слова для збору речення, та додаткових
3. Зміна порядку слів після кожного доданого та видаленого слова
4. Видалення останнього слова з речення яка збирає студент
5. Обробка того, чи правильно виконано збір речення
6. Оновлення прогресс бару

Та багато інших дрібних моментів які забезпечують зручне виконання завдання студентом

### BACKEND
>[Повернутись до початку](#доброго-дня)
#### Файл djangocourse_pr/utils.py
```python
from django.http import JsonResponse
from auth_reg.models import *
import json

# Перевірка чи авторизований користувач для виводу його імені на сторінці
def check_user_authentication(request, context):
    if request.user.is_authenticated:
        context['username'] = request.user.username
        context['signed_in'] = True

# Зміна порядку уроків або модулів на бекенді, зі збереженням цього порядку у базі даних
def cell_order(cell_model, cell_order_from_request):
    try:
        cell_order = json.loads(cell_order_from_request)
        for cell in cell_order:
            order = cell['order']
            cell_id = cell['id']
            cell_model.objects.filter(id=cell_id).update(order=order)
        return JsonResponse({'success': True})
    except json.JSONDecodeError:
        return JsonResponse({'success': False, 'error': 'Ошибка при передаче данных'})
    
# Перевірка статусу користувача, та подальше вказування на те
# який контент має бути на сторінкці
def check_status(request_user):
    try:
        user_status = request_user

        return user_status.role
    except UserProfile.DoesNotExist: pass
```
Цей файл створений для загальних функцій у проекті, та інших, щоб не перенавантажувати код проекту у файлах ```views.py```

#### Файл djangocourse_pr/course/views.py
```python
from django.shortcuts import render, get_object_or_404
from django.template.loader import render_to_string
from django.http import JsonResponse

from django.urls import reverse
from .models import *
from auth_reg.models import *

import pandas
import utils

# Create your views here.
def main_view(request):
    context = {}
    
    utils.check_user_authentication(request, context)
        
    return render(request, 'course/main.html', context)

# Для сторінки курса з усіма модулями, уроками та завданнями
def course_view(request):
    context = {}
    
    context['user_status'] = utils.check_status(request_user=UserProfile.objects.get(user=request.user))
    utils.check_user_authentication(request, context)
    
    # _candelete додано до назви щоб відрізнити від іншой змінної all_lessons
    all_lessons_candelete = Lesson.objects.all()
    all_tasks = Task.objects.all().values_list('lesson_id', flat=True)

    lesson_ids_with_tasks = set(all_tasks)

    for lesson in all_lessons_candelete:
        if lesson.id in lesson_ids_with_tasks:
            # Якщо в уроці є завдання, забороняємо його видалення
            if lesson.can_delete:
                lesson.can_delete = False
                lesson.save()
        else:
            # Якщо в уроці немає завдань, дозволяємо його видалення
            if not lesson.can_delete:
                lesson.can_delete = True
                lesson.save()
        
    if request.method == 'POST':
        # Якщо був обраний модуль
        if 'filter_by_module' in request.POST:
            module_id = request.POST.get('module_id')
            lessons_with_tasks = []
            lessons = Lesson.objects.filter(module_id=module_id).order_by('order')
            
            for lesson in lessons:
                tasks = Task.objects.filter(lesson=lesson)
                lessons_with_tasks.append({
                    'lesson': lesson,
                    'tasks': tasks,
                })

            # Отримуємо шаблон, в якому знаходяться уроки з обраного модуля
            # для відправлення в ajax, а потім на сторінку
            lessons_html = render_to_string('course/lessons_partial.html', {
                'lessons_with_tasks': lessons_with_tasks,
                'user_status': utils.check_status(request_user=UserProfile.objects.get(user=request.user)),
            }, request=request)
            
            # Відображаємо в меню вибору уроків під час створення завдань
            # тільки ті уроки, які є в обраному користувачем модулі
            dropdown_lessons_html = render_to_string('course/lesson_dropdown_for_tasks.html', {
                'lessons_with_tasks': lessons_with_tasks,
            }, request=request)
            
            return JsonResponse({
                'lessons_html': lessons_html,
                'dropdown_lessons': dropdown_lessons_html,
            })
        
        # Якщо проходить зміна порядку елементів на сторінці за допомогою бібліотеки Sortable
        # (уроки або модулі)
        if 'cell_order' in request.POST:
            sortable_obj_type = request.POST['sortable_obj_type']
            
            if sortable_obj_type == 'lesson':
                utils.cell_order(cell_model=Lesson, cell_order_from_request=request.POST['cell_order'])
            if sortable_obj_type == 'module':
                utils.cell_order(cell_model=Module, cell_order_from_request=request.POST['cell_order'])
                
        # Якщо користувач додає завдання
        if 'add_task' in request.POST:
            task_name = request.POST.get('taskname')
            task_file = request.FILES.get('taskfile')
            additional_words_file = request.FILES.get('additional_words_file')
            selected_lesson_value = request.POST.get('selected_lesson_value')
            
            if task_name and task_file and additional_words_file and selected_lesson_value:
                sentences = pandas.read_excel(task_file)
                additional_words = pandas.read_excel(additional_words_file)
                
                english_sentences = []
                ukrainian_sentences = []
                additional_words_list = []

                for row in sentences.itertuples(index=False):
                    column1_value = row[0] # Речення англійською
                    column2_value = row[1] # Речення українською
                    
                    # Підготовуємо речення та списки з ними для завантаження в базу даних під час створення уроку
                    cleaned_value_column1 = column1_value.strip()
                    lines_column1 = cleaned_value_column1.split('\n')
                    cleaned_value_column2 = column2_value.strip()
                    lines_column2 = cleaned_value_column2.split('\n')

                    lines_eng = []
                    lines_ukr = []

                    for line in lines_column1:
                        stripped_line = line.strip()
                        if stripped_line:
                            lines_eng.append(stripped_line)
                            
                    for line in lines_column2:
                        stripped_line = line.strip()
                        if stripped_line:
                            lines_ukr.append(stripped_line)

                    if lines_eng and lines_ukr:
                        english_sentences.extend(lines_eng)
                        ukrainian_sentences.extend(lines_ukr)

                for row in additional_words.itertuples(index=False):
                    word_value = row[0]
                    
                    cleaned_word_value = word_value.strip()
                    lines_words = cleaned_word_value.split('\n')
                    
                    lines_word_final = []
                    
                    for line in lines_words:
                        stripped_line = line.strip()
                        if stripped_line:
                            lines_word_final.append(stripped_line)
                    
                    if lines_word_final:
                        additional_words_list.extend(lines_word_final)
                
                selected_lesson = Lesson.objects.get(id=selected_lesson_value)
                selected_lesson.can_delete = False
                selected_lesson.save()
                
                task = Task.objects.create(
                    lesson = selected_lesson,
                    task_name = task_name,
                    english_sentences = english_sentences,
                    ukrainian_sentences = ukrainian_sentences,
                    additional_words = additional_words_list,
                )
                
                task_url = reverse('task_detail', args=[task.id])
                
                task_html = render_to_string('course/task_block.html', {
                    'task': task,
                    'module_id': selected_lesson.module_id,
                    'lesson_id': selected_lesson_value,
                    'task_url': task_url,
                    'user_status': utils.check_status(request_user=UserProfile.objects.get(user=request.user)),
                }, request=request)
        
                return JsonResponse({
                    'addName': True,
                    'canDeleteLesson': False,
                    'error': '',
                    'task_html': task_html,
                })
            else:
                return JsonResponse({'error': 'Заповніть усі поля'})
        
        # Якщо видаляється завдання
        if 'delete_task' in request.POST:
            # Отримуємо id завдання яке нам потрібно видалити
            task_id = request.POST.get('task_id')
            lesson_id = request.POST.get('lesson_id')
            
            try:
                # Отримуємо його з бази даних та видаляємо на боці серверу
                task = Task.objects.get(id=task_id)
                task.delete()
                
                remaining_tasks = Task.objects.filter(lesson_id=lesson_id).exists()
                
                if not remaining_tasks:
                    lesson = Lesson.objects.get(id=lesson_id)
                    lesson.can_delete = True
                    lesson.save()

                # Дозволяємо видалити завдання з шаблону
                return JsonResponse({'deleteTask': True, 'canDeleteLesson': not remaining_tasks})
            # Якщо якимось чином не буде завдання
            except Task.DoesNotExist:
                return JsonResponse({'success': False, 'error': 'Завдання не знайдено'})
            
        # Якщо додається урок
        if 'add_lesson' in request.POST:
            lesson_name = request.POST.get('lessonname')
            module_id = request.POST.get('module_id')
            
            if lesson_name and module_id:
                try:
                    module = Module.objects.get(id=module_id)
                except Module.DoesNotExist:
                    return JsonResponse({'error': 'Выбранный модуль не существует'})
                
                lesson = Lesson.objects.create(lesson_name=lesson_name, module=module)
                lesson_id = lesson.id
                
                lesson_html = render_to_string('course/lesson_block.html', {
                    'lesson': lesson,
                    'user_status': utils.check_status(request_user=UserProfile.objects.get(user=request.user)),  
                }, request=request)
                
                return JsonResponse({
                    'addLesson': True,
                    'lessonId': lesson_id,
                    'lessonName': lesson_name,
                    'lesson_html': lesson_html,
                })
            else:
                return JsonResponse({'error': 'Заповніть поле з назвою уроку'})
        
        # Якщо видаляється урок
        if 'delete_lesson' in request.POST:
            lesson_id = request.POST.get('lesson_id')
            try:
                lesson = Lesson.objects.get(id=lesson_id)
                lesson.delete()
                return JsonResponse({'deleteLesson': True})
            except Lesson.DoesNotExist:
                return JsonResponse({'success': False, 'error': 'Урок не знайдений'})
        
        # Якщо додається модуль
        if 'add_module' in request.POST:
            module_name = request.POST.get('modulename')
            course_id = request.POST.get('course_id')
            
            if module_name and course_id:
                course = Course.objects.get(id=course_id)
                module = Module.objects.create(course=course, module_name=module_name)
                module_id = module.id
                
                module_html = render_to_string('course/module_block.html', {
                    'module': module,
                    'user_status': utils.check_status(request_user=UserProfile.objects.get(user=request.user)),
                }, request=request)
                
                return JsonResponse({
                    'addModule': True,
                    'moduleId': module_id,
                    'moduleName': module_name,
                    'module_html': module_html,
                })
            else:
                return JsonResponse({'error': 'Заповніть поле з назвою модулю'})

        # Якщо видаляється модуль
        if 'delete_module' in request.POST:
            module_id = request.POST.get('module_id')
            
            try:
                module = Module.objects.get(id=module_id)
                module.delete()
                return JsonResponse({'deleteModule': True})
            except Module.DoesNotExist:
                return JsonResponse({'success': False, 'error': 'Модуль не знайдений'})
            
    all_lessons = Lesson.objects.all().order_by('order')
    lessons_with_tasks = []
    
    for lesson in all_lessons:
        tasks = Task.objects.filter(lesson=lesson)
        lessons_with_tasks.append({
            'lesson': lesson,
            'tasks': tasks,
        })
        
    courses = Course.objects.all()
    modules = Module.objects.all().order_by('order')
    context['courses'] = courses
    context['modules'] = modules
    context['lessons_with_tasks'] = lessons_with_tasks
    
    current_module_id = request.GET.get('module_id', None)
    context['current_module_id'] = current_module_id
    
    return render(request, 'course/course.html', context)

# Функція сторінки кожного завдання
def task_detail_view(request, task_id):
    context = {}
    
    utils.check_user_authentication(request, context)
        
    task = get_object_or_404(Task, id=task_id)
    
    english_sentences = task.english_sentences
    ukrainian_sentences = task.ukrainian_sentences
    additional_words = task.additional_words
    
    if request.method == 'POST':
        # Отримуємо завдання на якому знаходимось з ajax
        current_index = int(request.POST.get('current_index', 0))

        # Якщо не дойшли до кінця списку реченнь, передаємо індекс наступного речення
        if current_index < len(english_sentences) - 1:
            next_english_sentence = english_sentences[current_index + 1]
            next_ukrainian_sentence = ukrainian_sentences[current_index + 1]
            
            response_data = {
                'english_sentence': next_english_sentence,
                'ukrainian_sentence': next_ukrainian_sentence,
                'next_index': current_index + 1,
                'additional_words': additional_words,
            }
        else:
            response_data = {'error': True}

        return JsonResponse(response_data)

    # Отримуємо перше речення в завданні
    first_english_sentence = english_sentences[0]
    first_ukrainian_sentence = ukrainian_sentences[0]
    context['task'] = task
    context['first_english_sentence'] = first_english_sentence  # Передаємо перше речення англійською
    context['first_ukrainian_sentence'] = first_ukrainian_sentence  # Передаємо перше речення українською
    context['sentences_len'] = range(1, len(english_sentences) + 1)  # Передаємо кількість реченнь
    context['additional_words_first'] = additional_words  # Передаємо додаткові слова для першого речення
    
    return render(request, 'course/task_detail.html', context)
```
Цей файл забезпечує відображення головної сторінки, курса, та сторінки кожного завдання
У функціях для сторінки курсу та кожного завдання обробляються AJAX запроси, та зберігається потрібна інформація у БД

У функції course_view() обробляються:
- Створення модулів
- Видалення модулів
- Зміна розташування модулів, та збереження їх порядку
- Створення уроків
- Видалення уроків
- Зміна розташування уроків, та збереження їх порядку
- Створення завдань, та парсинг таблиці Excel з його реченнями
- Видалення видалення
- Завантаження потрібних уроків на сторінці після обирання модуля

У функції task_detail_view() обробляються:
- Завантажуються речення з бази даних та відправляються до шаблону
- Завантажуються додаткові слова для збору реченнь
- Вираховується індекс наступного речення

#### Файл djangocourse_pr/auth_reg/views.py
```python
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.db.utils import IntegrityError
from auth_reg.models import *
import utils

# Create your views here.
# Функція обробки авторизації
def auth_view(request):
    context = {}
    
    utils.check_user_authentication(request, context)
    
    if 'submit_btn' in request.POST:
        # Перевірка чи вже увійшов користувач під час спроби увійти
        if request.user.is_authenticated:
            context['error'] = 'Вы уже вошли в аккаунт'
        else:
            username = request.POST.get('username_inp')
            password = request.POST.get('password_inp')
            
            if username and password:
                user = authenticate(username=username, password=password)
                
                if user:
                    login(request, user)
                    return redirect('auth')
                else:
                    context["error_message"] = 'Логін або пароль не вірні'
            else:
                context['error_message'] = 'Заповніть усі поля'
    if 'leave_btn' in request.POST:
        logout(request)
        return redirect('auth')
    return render(request, 'auth_reg/auth.html', context)

# Функція яка обробляю реєстрацію
def reg_view(request):
    context = {}
    
    utils.check_user_authentication(request, context)
        
    if request.method == 'POST':
        username = request.POST.get('username_inp')
        password = request.POST.get('password_inp')
        confirm_password = request.POST.get('conf_password_inp')
    
        if username and password and confirm_password:
            if password == confirm_password:
                # Перевірка існування такого користувача
                try:
                    # Створення користувача
                    user = User.objects.create_user(
                        username=username,
                        password=password,
                    )
                    
                    # Створення профилю користувача
                    UserProfile.objects.create(user=user)
                    
                    return redirect('auth')
                except IntegrityError:
                    context["error"] = 'Такий користувач вже існує'
            else:
                context['error_message'] = 'Паролі не співпадають'    
        else:
            context['error_message'] = 'Заповніть усі поля'
    return render(request, 'auth_reg/reg.html', context)
```
У цьому файлі проходить відображення сторінок авторизації та реєстрації
Також тут виконується функціонал авторизації та реєстрації

### МОДЕЛІ ПРОЕКТУ
>[Повернутись до початку](#доброго-дня)
#### Додаток - course
```python
# Модель курса (базово - курс англійської мови)
class Course(models.Model):
    course_name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    
# Модель модулю, в якому зберігаються уроки, ця модель зберігає назву модулю, та його порядок з іншими модулями
class Module(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='modules')
    module_name = models.CharField(max_length=255)
    order = models.PositiveIntegerField(default=0)  

# Модель уроку, в якій зберігається його назва, зв'язок з моделлю модуля
# а також можливість його видаляти, та їх порядок
class Lesson(models.Model):
    module = models.ForeignKey(Module, on_delete=models.CASCADE, related_name='lessons')
    lesson_name = models.CharField(max_length=255, blank=True, null=True)
    can_delete = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

# Модель завдання в якій зберігаються речення для завдання, та додаткові слова для нього, та інше
class Task(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    task_name = models.CharField(max_length=10)
    excel_file = models.FileField(upload_to='excel_files/', blank=True, null=True)
    additional_words_file = models.FileField(upload_to='additional_words_files/', blank=True, null=True)
    
    english_sentences = models.JSONField(default=list)
    ukrainian_sentences = models.JSONField(default=list)
    additional_words = models.JSONField(default=list)
    current_index = models.PositiveIntegerField(default=0)
```

#### Додаток - auth_reg
```python
# Модель користувацього профілю, в якій зберігається зв'язок з оригінальною моделлю User
# та роль користувача на сайті: вчитель або студент
class UserProfile(models.Model):
    ROLE_CHOICES = (
        ('student', 'Student'),
        ('teacher', 'Teacher'),
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=7, choices=ROLE_CHOICES, default='student')
```

##### Діаграма зі структурою цих моделей
###### course
```mermaid
graph TD;
    A[Course] --> B[Module] --> C[Lesson] --> D[Task];
```

###### auth_reg
```mermaid
graph TD;
    A[User] --> B[UserProfile];
```

## Плани подальшого розвитку проекту
1. Збереження прогресу користувача
2. Покращена валідація авторизації та реєстрації з підтвердженням на пошті
3. Додати можливість змінювати типи завдань під час їх створенням
4. Зробити повноцінний дизайн сайту, з його плануванням у Figma
5. Додати можливість зміни теми сайту, та автоматична зміна теми під тему комп'ютера або телефона користувача
6. Повноцінна адаптація під планшети, телефони, та інші пристрої
7. Максимальне покращення читабельності коду проекту

## Хочете повернутись до початку файлу?
>[Повернутись до початку](#доброго-дня)

---
# English version
---

## Hello!
## Course Project - Course Project for Teaching

![Python](https://img.shields.io/badge/python-3.12.5-blue)
![Django](https://img.shields.io/badge/django-5.0-brightgreen)
![jQuery](https://img.shields.io/badge/jQuery-3.6.0-blue)
![Sortable.js](https://img.shields.io/badge/Sortable.js-1.14.0-orange)
![AJAX](https://img.shields.io/badge/AJAX-technology-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![HTML/CSS](https://img.shields.io/badge/HTML%2FCSS-blue)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.0-purple)
![Figma](https://img.shields.io/badge/Figma-design-blueviolet)
![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4%EF%B8%8F-blue)

## Project Description

This project is a course for teaching students and creating lessons and assignments for teachers. Teachers have a convenient interface for creating modules, lessons, and tasks for students, while students can quickly complete the tasks created.

The main advantage of the project is the extensive use of AJAX technology, which allows nearly all operations—filling out, creating, deleting, and completing tasks—to be performed quickly and without page refreshes.

## Table of Contents
- [Installation and Running](#installation-and-running)
- [Using Account Features](#using-account-features)
- [Project Pages](#project-pages)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Project Functionality](#project-functionality)
- [FRONTEND](#frontend)
- [BACKEND](#backend)
- [PROJECT MODELS](#project-models)
- [Future Development Plans](#future-development-plans)

## Installation and Running
### If Django is already installed
#### 1. Clone the repository
```
git clone https://github.com/FeliksNovoselskyi/course-tasks-practice.git
```
#### 2. Navigate to the main project directory containing the ```manage.py``` file
```
cd djangocourse_pr
```
#### 3. Install necessary libraries for creating tasks
```
pip install pandas
```
```
pip install openpyxl
```
#### 4. Start the local server
For Windows
```
python manage.py runserver
```
For MacOS/Linux
```
python3 manage.py runserver
```

### If Django is NOT installed
#### 1. Install Django
```
pip install django
```

#### 2. Clone the repository
```
git clone https://github.com/FeliksNovoselskyi/course-tasks-practice.git
```
#### 3. Navigate to the main project directory containing the ```manage.py``` file
```
cd djangocourse_pr
```
#### 4. Install necessary libraries for creating tasks
```
pip install pandas
```
```
pip install openpyxl
```
#### 5. Start the local server
For Windows
```
python manage.py runserver
```
For MacOS/Linux
```
python3 manage.py runserver
```

## Using Account Features 
>[Back to top](#hello)
#### To use teacher features
1. Go to the login page
2. Log in with the username ```testteacher``` and password ```123456```
3. Go to the course page and start using it

#### To use student features
1. Go to the login page
2. Then, go to the registration page
3. Create an account, which will initially be a student account
4. Log in to your account

## Project Pages
>[Back to top](#hello)
- **Home Page** - the main page of the project with information about the platform (currently an empty page)
- **Course Page** - a page that allows teachers to populate the course with modules, lessons, and tasks, and for students to complete them
- **Login and Registration Pages** - on these pages, you can create your account on the site and log in to it

## Technologies Used
>[Back to top](#hello)
- **[Python](https://www.python.org/)** — programming language used for creating the backend of the site
- **[Django](https://docs.djangoproject.com/en/5.0/)** — web framework used to build the project
- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** — main programming language used to enhance the user interface
- **[jQuery](https://jquery.com/)** — JavaScript library that simplifies development and interaction with the project
- **[Sortable](https://jqueryui.com/sortable/)** — jQuery plugin for convenient sorting of lessons and modules, as well as changing their sequence
- **[AJAX](https://api.jquery.com/category/ajax/)** — technology for fast and convenient data handling without page refreshes
- **[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)/[CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)** — languages for website layout, structure, and styling
- **[Bootstrap 5](https://getbootstrap.com/)** — frontend framework used to create some elements on the pages
- **[Figma](https://help.figma.com/hc/en-us)** — online service used for planning the site's design
- **[SQLite3](https://www.sqlite.org/docs.html)** - database used for the site development

## Project Structure
>[Back to top](#hello)
```mermaid
graph TD;
    A[djangocourse_pr] --> B[course] --> C[Application for the 
    home page and the course page];
    A --> D[auth_reg] --> E[Application for 
    registration pages];
```

## Project Functionality
### FRONTEND
>[Back to Top](#hello)

#### File `djangocourse_pr/course/static/js/task_redirect.js`
```javascript
document.addEventListener('DOMContentLoaded', function () {
    // Find the parent element that exists at page load
    const container = document.querySelector('.lessons')

    // Assign a click handler to the parent element
    container.addEventListener('click', function(event) {
        const target = event.target.closest('.course-icon-block.clickable-task, .task-name-popup')
        if (target) {
            const taskUrl = target.getAttribute('data-task-url')
            if (taskUrl) {
                window.location.href = taskUrl
            }
        }
    })
})
```
This file manages navigation to a unique page for each task by identifying elements that can be clicked to navigate to tasks and handling the click event to redirect to the appropriate task page

#### File `djangocourse_pr/course/static/js/selecting_module.js`
```javascript
document.addEventListener('DOMContentLoaded', function () {
    const lessonsContainer = document.querySelector('.lessons')
    const dropdownLessons = document.querySelector('#dropdown-lessons')
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    
    // Define a boolean variable moduleSelected
    window.moduleSelected = false
    
    let moduleBlocks = document.querySelectorAll('.module-block')
    
    // Retrieve lessons after dynamic content updates on the page
    // (for correct display of the selected module on the page)
    function updateModuleBlocks() {
        moduleBlocks = document.querySelectorAll('.module-block')
    }

    document.addEventListener('click', function(event) {
        const target = event.target.closest('.module-block')

        // Handle click on a module to display its lessons
        if (target) {
            const moduleId = target.dataset.moduleId

            moduleBlocks.forEach(
                block => block.classList.remove('selected-module')
            )

            // Add the class selected-module only to the selected module
            target.classList.add('selected-module')

            // Store the module id in the data attribute of the highlighted lessons
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
```
This file handles clicking on each module and sending an AJAX request to the server to retrieve lessons from the selected module. This ensures that only the content related to the selected module is displayed on the page.

#### File `djangocourse_pr/course/static/js/eng_course_management.js`
```javascript
$(document).ready(function() {
    // Single and universal function for ajax requests
    function ajaxRequest(url, type, data, successCallback) {
        $.ajax({
            url: url,
            type: type,
            data: data,
            contentType: false,  // Set to false by default as it suits all cases
            processData: false,  // Set to false by default as it suits all cases
            success: successCallback,
        })
    }

    // Check if a module is selected and display the corresponding content on the page
    function updateLessonDisplay() {
        var lessonsContainer = $('.lessons')
        var noLessonsMessage = $('#no-lessons-message')
    
        if (document.querySelectorAll('.module-block').length === 0) {
            noLessonsMessage.hide()
            return;
        }

        if (window.moduleSelected) {
            // Check if there are lesson elements in the current module
            if (lessonsContainer.children().length > 0) {
                noLessonsMessage.hide()
            } else {
                noLessonsMessage.show()
            }
        } else {
            noLessonsMessage.hide()
        }
    }

    // Check every millisecond if a module is selected by the user
    setInterval(updateLessonDisplay, 1)
    
    // Adding a module
    $('#addmoduleform').submit(function(event) {
        event.preventDefault()

        var moduleName = $('input[name=modulename]').val()
        var courseId = $('select[name=course_id]').val()
        
        var data = new FormData()
        data.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
        data.append('add_module', true)
        data.append('modulename', moduleName)
        data.append('course_id', courseId)

        ajaxRequest('/course/', 'POST', data, function(response) {
            if (response.error) {
                $('#error-message-module').text(response.error)
            } else if (response.addModule) {
                $('#modules-list').append(response.module_html)
                $('#dropdown-modules').append(`
                    <option value="${response.moduleId}">${response.moduleName}</option>
                `)
            }
        })
    })

    // Deleting a module
    $('#modules-list').on('submit', '#delete-module-form', function(event) {
        event.preventDefault()

        var $form = $(this)
        var moduleId = $form.find('input[name=module_id]').val()

        $('#delete-module-confirm-form').off('submit').on('submit', function(event) {
            event.preventDefault()

            var data = new FormData()
            data.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
            data.append('module_id', moduleId)
            data.append('delete_module', true)

            ajaxRequest('/course/', 'POST', data, function(response) {
                if (response.deleteModule) {
                    $form.closest('.module-block').remove()

                    // Set a delay before removing from the page to ensure the deleted item has time to load
                    setTimeout(() => {
                        const moduleLessons = document.querySelectorAll(`#module-lesson-id-${moduleId}`)
                        const moduleTasks = document.querySelectorAll(`#module-task-id-${moduleId}`)
                    
                        moduleLessons.forEach(element => element.remove())
                        moduleTasks.forEach(element => element.remove())
                    }, 1)

                    var $optionToRemove = $('#dropdown-modules').find(`option[value="${moduleId}"]`)
                    if ($optionToRemove.length) {
                        $optionToRemove.remove()
                    }

                    updateLessonDisplay()
                } else {
                    alert('Error deleting module: ' + response.error)
                }
            })
        })
    })

    // Adding a lesson
    $('#addlessonform').submit(function(event) {
        event.preventDefault()

        var $form = $(this)
        var lessonName = $('input[name=lessonname]').val()
        var moduleId = $form.find('select[name=module_id]').val()
        var currentModuleId = $('.lessons').attr('data-module-id')

        var data = new FormData()
        data.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
        data.append('add_lesson', true)
        data.append('lessonname', lessonName)
        data.append('module_id', moduleId)

        ajaxRequest('/course/', 'POST', data, function(response) {
            if (response.error) {
                $('#error-message-lesson').text(response.error)
            } else if (response.addLesson) {
                // Check if the current module matches the lesson's module

                if (parseInt(currentModuleId) === parseInt(moduleId)) {
                    $('.lessons').append(response.lesson_html)
                    $('#dropdown-lessons').append(`
                        <option value="${response.lessonId}">${response.lessonName}</option>
                    `)
                    updateLessonDisplay()
                }
            }
        })
    })

    // Deleting a lesson
    $('.lessons').on('submit', '#delete-lesson-formid', function(event) {
        event.preventDefault()

        var $form = $(this)
        var lessonId = $form.find('input[name=lesson_id]').val()

        var data = new FormData()
        data.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
        data.append('lesson_id', lessonId)
        data.append('delete_lesson', true)

        ajaxRequest('/course/', 'POST', data, function(response) {
            if (response.deleteLesson) {
                $form.closest('.lessons-from-backend').remove()

                updateLessonDisplay()

                var $optionToRemove = $('#dropdown-lessons').find(`option[value="${lessonId}"]`)
                if ($optionToRemove.length) {
                    $optionToRemove.remove()
                }
            } else {
                alert('Error deleting lesson: ' + response.error)
            }
        })
    })

    // Adding a task
    $('#addnameform').submit(function(event) {
        event.preventDefault()

        var selectedLesson = document.querySelector('#dropdown-lessons')
        var formData = new FormData()
        formData.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
        formData.append('taskname', $('input[name=taskname]').val())
        formData.append('taskfile', $('input[name=taskfile]')[0].files[0])
        formData.append('additional_words_file', $('input[name=additional_words_file]')[0].files[0])
        formData.append('selected_lesson_value', selectedLesson.value)
        formData.append('add_task', true)

        ajaxRequest('/course/', 'POST', formData, function(response) {
            if (response.addName) {
                $('#error-message').text(response.error)

                var lessonBlock = $('.lessons-from-backend').filter(function() {
                    return $(this).find('input[name=lesson_id]').val() === selectedLesson.value
                })

                lessonBlock.find('.lesson-tasks').append(response.task_html)
            } if (response.canDeleteLesson === false) {
                $('#delete-button-' + selectedLesson.value).remove()
            } if (response.error) {
                $('#error-message').text(response.error)
            }
        })
    })

    // Deleting a task
    $('.lessons').on('submit', '.delete-task-form', function(event) {
        event.preventDefault()

        var $form = $(this)
        var taskId = $form.find('input[name=task_id]').val()
        var lessonId = $form.find('input[name=lesson_id]').val()

        $('#delete-task-confirm-form').off('submit').on('submit', function(event) {
            event.preventDefault()

            var data = new FormData()
            data.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())
            data.append('task_id', taskId)
            data.append('lesson_id', lessonId)
            data.append('delete_task', true)

            ajaxRequest('/course/', 'POST', data, function(response) {
                if (response.deleteTask) {
                    $form.closest('.course-block').remove()

                    if (response.canDeleteLesson) {
                        $('.delete-lesson-form-' + lessonId).append(`
                            <button type="submit" name="delete_lesson" class="delete-lesson-btn" id="delete-button-${lessonId}">
                                <img src="/static/images/delete.png" alt="delete-lesson-img" class="delete-lessons-icon">
                            </button>
                        `)
                    }
                } else {
                    alert('Error deleting task: ' + response.error)
                }
            })
        })
    })
})
```
This file is used by the teacher to manage the course, and it handles the creation of modules, lessons, and tasks, as well as their deletion. Everything is done using AJAX technology

#### File `djangocourse_pr/course/static/js/elements_sortable.js`
```javascript
$(document).ready(function () {
    const $lessons = $('.lessons') // Get the lessons
    const $modules = $('#modules-list') // Get the modules
    const $userStatus = $('#user-status') // Get the user status

    const forLesson = 'lesson-id' // Attribute for lesson
    const forModule = 'module-id' // Attribute for module

    // Function for sorting elements on the page (e.g., lessons or modules)
    // Sortable library in jQuery
    function sortableContainer(container, dataAttr, sortableObjType) {
        if (container.length && $userStatus.val() == 'teacher') { // Check if the container is not empty and the user is a teacher
            new Sortable(container[0], {
                animation: 150,
                onEnd: function () {
                    const order = []
                    const containerCells = container.children() // Get all elements in the container
                    const csrfToken = $('meta[name="csrf-token"]').attr('content') // Get csrf from the meta tag in the template
                    // Iterate over each container element and save its id and order
                    containerCells.each(function (index) {
                        const cellId = $(this).data(dataAttr) // Get the element id from the data attribute
                        order.push({
                            id: cellId,
                            order: index + 1 // Add 1 to make the order start from 1 instead of 0
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
                        success: function () {},
                    })
                },
            })
        }
    }

    sortableContainer($lessons, forLesson, 'lesson') // Sort the lessons
    sortableContainer($modules, forModule, 'module') // Sort the modules
})
```
This file handles the reordering of elements on the page (for example, modules and lessons), and sending the new order of modules and lessons to the server for processing and receiving the necessary changes for the page afterwards

#### File `djangocourse_pr/course/static/js/sentences_task.js`
```javascript
$(document).ready(function() {
    const taskData = $('#task-data') // Get the block where the sentence is edited and where its Ukrainian translation is located
    let currentIndex = parseInt(taskData.data('current-index'), 10) // Get the index of the sentence the user is currently on
    
    const initialSentence = $('#column1').text().split(" ") // English version of the first sentence
    const buttons = $('.word-button') // Buttons with words for the first sentence
    const finalSentence = $('.final-sentence') // The sentence being assembled by the user
    const progressBarCells = $('.progress-bar-cell') // Progress bar cells
    const randomWordsFirstSentence = $('#randomwords_first') // Random words for the first sentence
    const changeFinalSentence = document.querySelector('.final-sentence') // Assembled sentence
    const finalSentencePlace = document.querySelector('.final-sentence-place') // Block with an underline for the assembled sentence
    // Get the undo button to hide it
    // if there are no words, and vice versa
    const undoBtn = document.querySelector('.undo-btn')

    // Flags
    let formSubmittedFlag = false
    let updateSentenceFlag = true
    let undoSentenceFlag = true
    let isFirstSentence = true
    let isUpdateWords = true

    // Prepare random words for the first sentence as an array
    let randomWordsFirstSentenceText = randomWordsFirstSentence.text()
    randomWordsFirstSentenceText = randomWordsFirstSentenceText.split(" ")

    let allWords = []

    // Function to submit the form
    // to move to the next sentences
    function submitForm() {
        setTimeout(function() {
            $('#nexttaskform').submit() // Submit the form after 2 seconds (for aesthetics and smoothness of use)
        }, 2000)
    }

    // Function to determine which words to update on buttons
    // depending on the sentence the user is currently on
    function checkSentenceForUpdateBtns() {
        // Condition to update button content
        // here it checks which sentence the user is on, and updates the button content accordingly
        if (isFirstSentence && isUpdateWords) {
            updateButtons(allWords)
        } else if (allWords.length > 0 && isUpdateWords) {
            updateButtons(allWords)
        }
    }

    // Function to shuffle words for buttons
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    // Function to update buttons after adding/removing a word
    function updateButtons(wordsArray) {
        wordsArray = shuffleArray(wordsArray)
        wordsArray = wordsArray.toString().toLowerCase().split(',')
        buttons.each(function(index) {
            if (index < wordsArray.length) {
                $(this).text(wordsArray[index])
            }
        })
    }

    // Universal function to prepare button content
    // for both the first sentence and all subsequent ones
    function prepareButtonsContent(initialSentenceArg, randomFirstWords, randomWordsArg) {
        allWords = initialSentenceArg.slice(0, 9)

        if (allWords.length < 9) {
            const neededWordsCountFS = 9 - allWords.length
            if (randomFirstWords) {
                randomWordsArg.splice(0, 1)
            }
            const additionalWordsFS = randomWordsArg.slice(0, neededWordsCountFS)
            allWords = allWords.concat(additionalWordsFS)
        }

        allWords = shuffleArray(allWords)
        allWords = allWords.toString().toLowerCase().split(',')

        // Check and replace duplicate words
        for (let i = 0; i < allWords.length; i++) {
            while (allWords.indexOf(allWords[i]) !== i) {
                allWords[i] = randomWordsArg.shift() // Replace duplicate word with a new one
            }
        }

        updateButtons(allWords)
    }

    // Add words for the first sentence to the buttons
    prepareButtonsContent(initialSentence, randomFirstWords=true, randomWordsFirstSentenceText)

    // Function to update the progress bar
    function updateProgressBar() {
        progressBarCells.each(function(index) {
            if (index < currentIndex) {
                $(this).addClass('correct')
            }
        })
    }

    // Handle click on one of the word buttons
    $('.word-button').click(function() {
        const buttonText = $(this).text()
        const currentSentence = finalSentence.text()

        if (currentSentence && updateSentenceFlag) {
            finalSentence.text(`${currentSentence} ${buttonText}`) // Add the new word to the existing ones, if any
        } else if (!currentSentence && updateSentenceFlag) {
            finalSentence.text(buttonText) // Assign the new word since there's nothing else
        }

        checkSentenceForUpdateBtns()
    })

    // Handle click event on the undo button to remove the last word
    $('.undo-btn').click(function() {
        // Get what has been entered and convert it to an array
        if (undoSentenceFlag) {
            const currentSentence = finalSentence.text()
            const currentWordsOfSentence = currentSentence.split(" ")
            currentWordsOfSentence.pop() // Remove the last element (last word)
            finalSentence.text(`${currentWordsOfSentence.join(' ')}`) // Convert back to text and set it
            
            checkSentenceForUpdateBtns()
        }
    })

    // Function to handle an incorrectly assembled sentence
    function incorrectSentence() {
        changeFinalSentence.style.color = 'red'
        finalSentencePlace.style.borderBottom = 'dashed 2px red'
        progressBarCells.eq(currentIndex).addClass('incorrect') // Highlight the current progress bar cell in red
        
        formSubmittedFlag = true
        updateSentenceFlag = false
        undoSentenceFlag = false
        isUpdateWords = false

        submitForm()
    }

    // Function to check the sentence
    function checkSentenceByInterval() {
        if (finalSentence.text() == '') {
            undoBtn.style.display = 'none'
            undoBtn.style.visibility = 'hidden'
        } else {
            undoBtn.style.display = 'flex'
            undoBtn.style.visibility = 'visible'
        }
        
        // Check if the form is submitted
        // otherwise, task checking will work incorrectly, and the task will be passed automatically
        if (formSubmittedFlag) return

        const userSentence = finalSentence.text() // Get the sentence assembled by the user
        let correctSentence = $('#column1').text() // Correct sentence
        correctSentence = correctSentence.toLowerCase()
        const userWords = userSentence.split(" ")
        const correctWords = correctSentence.split(" ")

        // Additional condition if the user somehow entered more words than needed
        if (userWords.length > correctWords.length) {
            incorrectSentence()
        } else if (userWords.length === correctWords.length)  {
            if (userSentence === correctSentence) {
                changeFinalSentence.style.color = 'orange'
                finalSentencePlace.style.borderBottom = 'dashed 2px orange'

                formSubmittedFlag = true
                updateSentenceFlag = false
                undoSentenceFlag = false
                isUpdateWords = false

                submitForm()
            } else {
                incorrectSentence()
            }
        } else {
            // If the sentence is not yet fully assembled
            changeFinalSentence.style.color = 'black'
            finalSentencePlace.style.borderBottom = 'dashed 2px rgb(28, 28, 28)'
            progressBarCells.eq(currentIndex).removeClass('incorrect')
        }
    }

    // Check the assembled sentence every 50 milliseconds
    setInterval(checkSentenceByInterval, 50)
    
    $('#nexttaskform').submit(function(event) {
        let isCorrect = changeFinalSentence.style.color === 'orange' ? 1 : 0;
        event.preventDefault()

        $.ajax({
            url: window.location.href,
            type: 'POST',
            data: {
                'current_index': currentIndex,
                'csrfmiddlewaretoken': $('input[name="csrfmiddlewaretoken"]').val(),
            },
            success: function(response) {
                if (response.error) {
                    window.location.href = allTasksUrl
                } else {
                    $('#column1').text(response.english_sentence)
                    $('#column2').text(response.ukrainian_sentence)
                    currentIndex = response.next_index
                    taskData.data('current-index', currentIndex) // Update the sentence on the page after checking its correctness

                    updateProgressBar()

                    isFirstSentence = false
                    
                    // Get the correct sentence and random words for subsequent sentences
                    let words = response.english_sentence.split(" ")
                    let randomWords = response.additional_words

                    // Add words for new sentences to the buttons
                    prepareButtonsContent(words, randomFirstWords=false, randomWords)
                    
                    finalSentence.text('')
                    formSubmittedFlag = false
                    updateSentenceFlag = true
                    undoSentenceFlag = true
                    isUpdateWords = true
                }
            },
        });
    });
});
```
This file provides a convenient, fast, and simple functioning of the sentence collection task
It processes:
1. Substitution of the next sentence in the task
2. Filling in the word blocks with the necessary words to complete the sentence, and additional ones
3. Change the order of words after each added and deleted word
4. Removing the last word from the sentence that the student is collecting
5. Processing whether the sentence assembly is done correctly
6. Updating the progress bar

And many other small moments that ensure convenient task completion by the student

### BACKEND
>[Back to top](#hello)
#### File `djangocourse_pr/utils.py`
```python
from django.http import JsonResponse
from auth_reg.models import *
import json

# Check if the user is authenticated to display their name on the page
def check_user_authentication(request, context):
    if request.user.is_authenticated:
        context['username'] = request.user.username
        context['signed_in'] = True

# Change the order of lessons or modules on the backend, saving this order in the database
def cell_order(cell_model, cell_order_from_request):
    try:
        cell_order = json.loads(cell_order_from_request)
        for cell in cell_order:
            order = cell['order']
            cell_id = cell['id']
            cell_model.objects.filter(id=cell_id).update(order=order)
        return JsonResponse({'success': True})
    except json.JSONDecodeError:
        return JsonResponse({'success': False, 'error': 'Error in data transmission'})
    
# Check the user's status and indicate what content should be on the page
def check_status(request_user):
    try:
        user_status = request_user

        return user_status.role
    except UserProfile.DoesNotExist: pass

```
This file is created for common functions in the project, and others, so as not to overload the project code in the `views.py` files

#### File `djangocourse_pr/course/views.py`
```python
from django.shortcuts import render, get_object_or_404
from django.template.loader import render_to_string
from django.http import JsonResponse

from django.urls import reverse
from .models import *
from auth_reg.models import *

import pandas
import utils

# Create your views here.
def main_view(request):
    context = {}
    
    utils.check_user_authentication(request, context)
        
    return render(request, 'course/main.html', context)

# For the course page with all modules, lessons, and tasks
def course_view(request):
    context = {}
    
    context['user_status'] = utils.check_status(request_user=UserProfile.objects.get(user=request.user))
    utils.check_user_authentication(request, context)
    
    # '_candelete' added to the name to distinguish from another variable 'all_lessons'
    all_lessons_candelete = Lesson.objects.all()
    all_tasks = Task.objects.all().values_list('lesson_id', flat=True)

    lesson_ids_with_tasks = set(all_tasks)

    for lesson in all_lessons_candelete:
        if lesson.id in lesson_ids_with_tasks:
            # If the lesson has tasks, prohibit deletion
            if lesson.can_delete:
                lesson.can_delete = False
                lesson.save()
        else:
            # If the lesson has no tasks, allow deletion
            if not lesson.can_delete:
                lesson.can_delete = True
                lesson.save()
        
    if request.method == 'POST':
        # If a module was selected
        if 'filter_by_module' in request.POST:
            module_id = request.POST.get('module_id')
            lessons_with_tasks = []
            lessons = Lesson.objects.filter(module_id=module_id).order_by('order')
            
            for lesson in lessons:
                tasks = Task.objects.filter(lesson=lesson)
                lessons_with_tasks.append({
                    'lesson': lesson,
                    'tasks': tasks,
                })

            # Get the template containing the lessons from the selected module
            # for sending via ajax, and then to the page
            lessons_html = render_to_string('course/lessons_partial.html', {
                'lessons_with_tasks': lessons_with_tasks,
                'user_status': utils.check_status(request_user=UserProfile.objects.get(user=request.user)),
            }, request=request)
            
            # Display only the lessons from the selected module in the lesson selection menu
            dropdown_lessons_html = render_to_string('course/lesson_dropdown_for_tasks.html', {
                'lessons_with_tasks': lessons_with_tasks,
            }, request=request)
            
            return JsonResponse({
                'lessons_html': lessons_html,
                'dropdown_lessons': dropdown_lessons_html,
            })
        
        # If changing the order of items on the page using the Sortable library
        # (lessons or modules)
        if 'cell_order' in request.POST:
            sortable_obj_type = request.POST['sortable_obj_type']
            
            if sortable_obj_type == 'lesson':
                utils.cell_order(cell_model=Lesson, cell_order_from_request=request.POST['cell_order'])
            if sortable_obj_type == 'module':
                utils.cell_order(cell_model=Module, cell_order_from_request=request.POST['cell_order'])
                
        # If the user is adding a task
        if 'add_task' in request.POST:
            task_name = request.POST.get('taskname')
            task_file = request.FILES.get('taskfile')
            additional_words_file = request.FILES.get('additional_words_file')
            selected_lesson_value = request.POST.get('selected_lesson_value')
            
            if task_name and task_file and additional_words_file and selected_lesson_value:
                sentences = pandas.read_excel(task_file)
                additional_words = pandas.read_excel(additional_words_file)
                
                english_sentences = []
                ukrainian_sentences = []
                additional_words_list = []

                for row in sentences.itertuples(index=False):
                    column1_value = row[0] # Sentences in English
                    column2_value = row[1] # Sentences in Ukrainian
                    
                    # Prepare sentences and lists for database insertion during lesson creation
                    cleaned_value_column1 = column1_value.strip()
                    lines_column1 = cleaned_value_column1.split('\n')
                    cleaned_value_column2 = column2_value.strip()
                    lines_column2 = cleaned_value_column2.split('\n')

                    lines_eng = []
                    lines_ukr = []

                    for line in lines_column1:
                        stripped_line = line.strip()
                        if stripped_line:
                            lines_eng.append(stripped_line)
                            
                    for line in lines_column2:
                        stripped_line = line.strip()
                        if stripped_line:
                            lines_ukr.append(stripped_line)

                    if lines_eng and lines_ukr:
                        english_sentences.extend(lines_eng)
                        ukrainian_sentences.extend(lines_ukr)

                for row in additional_words.itertuples(index=False):
                    word_value = row[0]
                    
                    cleaned_word_value = word_value.strip()
                    lines_words = cleaned_word_value.split('\n')
                    
                    lines_word_final = []
                    
                    for line in lines_words:
                        stripped_line = line.strip()
                        if stripped_line:
                            lines_word_final.append(stripped_line)
                    
                    if lines_word_final:
                        additional_words_list.extend(lines_word_final)
                
                selected_lesson = Lesson.objects.get(id=selected_lesson_value)
                selected_lesson.can_delete = False
                selected_lesson.save()
                
                task = Task.objects.create(
                    lesson = selected_lesson,
                    task_name = task_name,
                    english_sentences = english_sentences,
                    ukrainian_sentences = ukrainian_sentences,
                    additional_words = additional_words_list,
                )
                
                task_url = reverse('task_detail', args=[task.id])
                
                task_html = render_to_string('course/task_block.html', {
                    'task': task,
                    'module_id': selected_lesson.module_id,
                    'lesson_id': selected_lesson_value,
                    'task_url': task_url,
                    'user_status': utils.check_status(request_user=UserProfile.objects.get(user=request.user)),
                }, request=request)
        
                return JsonResponse({
                    'addName': True,
                    'canDeleteLesson': False,
                    'error': '',
                    'task_html': task_html,
                })
            else:
                return JsonResponse({'error': 'Fill in all fields'})
        
        # If a task is being deleted
        if 'delete_task' in request.POST:
            # Get the task ID that we need to delete
            task_id = request.POST.get('task_id')
            lesson_id = request.POST.get('lesson_id')
            
            try:
                # Get it from the database and delete it on the server side
                task = Task.objects.get(id=task_id)
                task.delete()
                
                remaining_tasks = Task.objects.filter(lesson_id=lesson_id).exists()
                
                if not remaining_tasks:
                    lesson = Lesson.objects.get(id=lesson_id)
                    lesson.can_delete = True
                    lesson.save()

                # Allow task deletion from the template
                return JsonResponse({'deleteTask': True, 'canDeleteLesson': not remaining_tasks})
            # If somehow the task does not exist
            except Task.DoesNotExist:
                return JsonResponse({'success': False, 'error': 'Task not found'})
            
        # If a lesson is being added
        if 'add_lesson' in request.POST:
            lesson_name = request.POST.get('lessonname')
            module_id = request.POST.get('module_id')
            
            if lesson_name and module_id:
                try:
                    module = Module.objects.get(id=module_id)
                except Module.DoesNotExist:
                    return JsonResponse({'error': 'Selected module does not exist'})
                
                lesson = Lesson.objects.create(lesson_name=lesson_name, module=module)
                lesson_id = lesson.id
                
                lesson_html = render_to_string('course/lesson_block.html', {
                    'lesson': lesson,
                    'user_status': utils.check_status(request_user=UserProfile.objects.get(user=request.user)),  
                }, request=request)
                
                return JsonResponse({
                    'addLesson': True,
                    'lessonId': lesson_id,
                    'lessonName': lesson_name,
                    'lesson_html': lesson_html,
                })
            else:
                return JsonResponse({'error': 'Fill in the lesson name field'})
        
        # If a lesson is being deleted
        if 'delete_lesson' in request.POST:
            lesson_id = request.POST.get('lesson_id')
            try:
                lesson = Lesson.objects.get(id=lesson_id)
                lesson.delete()
                return JsonResponse({'deleteLesson': True})
            except Lesson.DoesNotExist:
                return JsonResponse({'success': False, 'error': 'Lesson not found'})
        
        # If a module is being added
        if 'add_module' in request.POST:
            module_name = request.POST.get('modulename')
            course_id = request.POST.get('course_id')
            
            if module_name and course_id:
                course = Course.objects.get(id=course_id)
                module = Module.objects.create(course=course, module_name=module_name)
                module_id = module.id
                
                module_html = render_to_string('course/module_block.html', {
                    'module': module,
                    'user_status': utils.check_status(request_user=UserProfile.objects.get(user=request.user)),
                }, request=request)
                
                return JsonResponse({
                    'addModule': True,
                    'moduleId': module_id,
                    'moduleName': module_name,
                    'module_html': module_html,
                })
            else:
                return JsonResponse({'error': 'Fill in the module name field'})

        # If a module is being deleted
        if 'delete_module' in request.POST:
            module_id = request.POST.get('module_id')
            
            try:
                module = Module.objects.get(id=module_id)
                module.delete()
                return JsonResponse({'deleteModule': True})
            except Module.DoesNotExist:
                return JsonResponse({'success': False, 'error': 'Module not found'})
            
    all_lessons = Lesson.objects.all().order_by('order')
    lessons_with_tasks = []
    
    for lesson in all_lessons:
        tasks = Task.objects.filter(lesson=lesson)
        lessons_with_tasks.append({
            'lesson': lesson,
            'tasks': tasks,
        })
        
    courses = Course.objects.all()
    modules = Module.objects.all().order_by('order')
    context['courses'] = courses
    context['modules'] = modules
    context['lessons_with_tasks'] = lessons_with_tasks
    
    current_module_id = request.GET.get('module_id', None)
    context['current_module_id'] = current_module_id
    
    return render(request, 'course/course.html', context)

# Function for the page of each task
def task_detail_view(request, task_id):
    context = {}
    
    utils.check_user_authentication(request, context)
        
    task = get_object_or_404(Task, id=task_id)
    
    english_sentences = task.english_sentences
    ukrainian_sentences = task.ukrainian_sentences
    additional_words = task.additional_words
    
    if request.method == 'POST':
        # Get the current task from ajax
        current_index = int(request.POST.get('current_index', 0))

        # If not at the end of the sentence list, return the next sentence index
        if current_index < len(english_sentences) - 1:
            next_english_sentence = english_sentences[current_index + 1]
            next_ukrainian_sentence = ukrainian_sentences[current_index + 1]
            
            response_data = {
                'english_sentence': next_english_sentence,
                'ukrainian_sentence': next_ukrainian_sentence,
                'next_index': current_index + 1,
                'additional_words': additional_words,
            }
        else:
            response_data = {'error': True}

        return JsonResponse(response_data)

    # Get the first sentence in the task
    first_english_sentence = english_sentences[0]
    first_ukrainian_sentence = ukrainian_sentences[0]
    context['task'] = task
    context['first_english_sentence'] = first_english_sentence  # Pass the first English sentence
    context['first_ukrainian_sentence'] = first_ukrainian_sentence  # Pass the first Ukrainian sentence
    context['sentences_len'] = range(1, len(english_sentences) + 1)  # Pass the number of sentences
    context['additional_words_first'] = additional_words  # Pass additional words for the first sentence
    
    return render(request, 'course/task_detail.html', context)
```
This file provides the display of the main page, the course, and the assignment page
The functions for the course page and each assignment process AJAX requests and store the necessary information in the database

The course_view() function processes them:
- Creating modules
- Deleting modules
- Changing the location of the modules, and preserving their order
- Creating lessons
- Deleting lessons
- Change the location of lessons and keep them in order
- Creating tasks and parsing an Excel spreadsheet with its sentences
- Deleting a deleted lesson
- Loading the required lessons on the page after selecting the module

In the task_detail_view() function, the tasks are processed:
- Sentences are loaded from the database and sent to the template
- Additional words are loaded to collect sentences
- Calculates the index of the next sentence

#### File `djangocourse_pr/auth_reg/views.py`
```python
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.db.utils import IntegrityError
from auth_reg.models import *
import utils

# Create your views here.
# Function to handle authorization
def auth_view(request):
    context = {}
    
    utils.check_user_authentication(request, context)
    
    if 'submit_btn' in request.POST:
        # Check if the user is already logged in while trying to log in
        if request.user.is_authenticated:
            context['error'] = 'You are already logged in'
        else:
            username = request.POST.get('username_inp')
            password = request.POST.get('password_inp')
            
            if username and password:
                user = authenticate(username=username, password=password)
                
                if user:
                    login(request, user)
                    return redirect('auth')
                else:
                    context["error_message"] = 'Invalid username or password'
            else:
                context['error_message'] = 'Fill in all fields'
    if 'leave_btn' in request.POST:
        logout(request)
        return redirect('auth')
    return render(request, 'auth_reg/auth.html', context)

# Function to handle registration
def reg_view(request):
    context = {}
    
    utils.check_user_authentication(request, context)
        
    if request.method == 'POST':
        username = request.POST.get('username_inp')
        password = request.POST.get('password_inp')
        confirm_password = request.POST.get('conf_password_inp')
    
        if username and password and confirm_password:
            if password == confirm_password:
                # Check if such a user already exists
                try:
                    # Create the user
                    user = User.objects.create_user(
                        username=username,
                        password=password,
                    )
                    
                    # Create the user's profile
                    UserProfile.objects.create(user=user)
                    
                    return redirect('auth')
                except IntegrityError:
                    context["error"] = 'Such a user already exists'
            else:
                context['error_message'] = 'Passwords do not match'    
        else:
            context['error_message'] = 'Fill in all fields'
    return render(request, 'auth_reg/reg.html', context)
```
This file displays the authorization and registration pages
Also, the authorization and registration functionality is performed here