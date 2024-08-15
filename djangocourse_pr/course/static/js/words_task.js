$(document).ready(function() {
    const taskData = $('#task-data') // получаем блок со всеми предложениями, и укр. и англ.
    let currentIndex = parseInt(taskData.data('current-index'), 10) // получаем индекс предложения, на котором находимся
    
    const initialSentence = $('#column1').text().split(" ") // получаем английскую версию первого предложения
    const buttons = $('.word-button') // получаем кнопки со словами для первого предложения
    const finalSentence = $('.final-sentence') // получаем предложение, собираемое пользователем
    const progressBarCells = $('.progress-bar-cell') // получаем прогресс бар
    const randomWordsFirstSentence = $('#randomwords_first') // получаем рандомные слова для первого предложения

    let randomWordsFirstSentenceText = randomWordsFirstSentence.text()
    randomWordsFirstSentenceText = randomWordsFirstSentenceText.split(" ")

    // метод перемешивание массива с требуемыми для предложения словами и дополнительными
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    // получаем те слова, который нужны для сбора 1-го предложения
    let allWordsFirstSentence = initialSentence.slice(0, 9)

    // если массив слов для первого предложения меньше 9, добавляем случайные слова из дополнительного массива
    if (allWordsFirstSentence.length < 9) {
        const neededWordsCountFS = 9 - allWordsFirstSentence.length
        // убираем в списке слов первый индекс (там пустая строка)
        randomWordsFirstSentenceText.splice(0, 1)
        const additionalWordsFS = randomWordsFirstSentenceText.slice(0, neededWordsCountFS)
        allWordsFirstSentence = allWordsFirstSentence.concat(additionalWordsFS)
    }

    // перемешиваем массив слов для первого предложения
    allWordsFirstSentence = shuffleArray(allWordsFirstSentence)

    // заполняем все кнопки со словами для первого предложения
    buttons.each(function(index) {
        if (index < allWordsFirstSentence.length) {
            $(this).text(allWordsFirstSentence[index])
        }
    })

    // функция обновления прогресса
    function updateProgressBar() {
        // добавление каждой ячейке класса с цветом, который символизирует выполнение предложения
        progressBarCells.each(function(index) {
            if (index < currentIndex) {
                $(this).addClass('correct')
            }
        })
    }

    // обрабатываем клик на одну из кнопок со словами
    $('.word-button').click(function() {
        // получаем слово в кнопке, и то, что уже введено
        const buttonText = $(this).text()
        const currentSentence = finalSentence.text()
        // console.log(currentSentence)
        if (currentSentence) {
            finalSentence.text(`${currentSentence} ${buttonText}`) // задаем новое слово к старым, если они есть
        } else {
            finalSentence.text(buttonText) // просто задаем новое слово, ибо до него ничего нет
        }
    })

    // обрабатываем событие клика на кнопку удаления последнего слова
    $('.undo-btn').click(function() {
        // получаем то что уже введено, и преобразуем в массив
        const currentSentence = finalSentence.text()
        const currentWordsOfSentence = currentSentence.split(" ")
        currentWordsOfSentence.pop() // удаляем последний элемент (последнее слово)
        finalSentence.text(`${currentWordsOfSentence.join(' ')}`) // преобразуем снова в текст, и задаем
    })

    // функция проверки правильности предложения
    function checkSentence() {
        const userSentence = finalSentence.text() // получаем то, что собрал пользователь
        const correctSentence = $('#column1').text() // получаем то, что нужно собрать
        // проверяем
        return userSentence === correctSentence
    }

    $('#nexttaskform').submit(function(event) {
        // не даем форме сразу отправиться
        event.preventDefault()

        // проверяем, верно ли собрано предложение
        if (checkSentence()) {
            $.ajax({
                url: window.location.href,
                type: 'POST',
                data: {
                    'current_index': currentIndex,
                    'csrfmiddlewaretoken': $('input[name="csrfmiddlewaretoken"]').val(),
                },
                success: function(response) {
                    if (response.error) {
                        window.location.href = allTasksUrl // в случае ошибки перенаправляем на страницу со всеми заданиями
                    } else {
                        $('#column1').text(response.column1) // получаем английское предложение с бекенда
                        $('#column2').text(response.column2) // получаем украинское предложение с бекенда
                        currentIndex = response.next_index // получаем с бекенда индекс следующего предложения
                        taskData.data('current-index', currentIndex) // меняем предложение на странице после проверки на его правильность

                        // обновление прогресса после верного прохождения предложения
                        updateProgressBar()
                        
                        let words = response.column1.split(" ") // получаем предложение, которое нужно собрать
                        let buttons = $('.word-button') // получаем все кнопки, для сбора предложения
                        let randomWords = response.random_words // получаем рандомные слова для заполнения пустых кнопок ими

                        // получение требуемых слов из английского предложения
                        let allSentenceWords = words.slice(0, 9)

                        // проверка на то, сколько требуемых для выполнения предложения слов из 9
                        // исходя из этого, вычисление сколько кнопок остаются пустыми, и в массиве заполняются пустые места для них
                        if (allSentenceWords.length < 9) {
                            const neededWordsCount = 9 - allSentenceWords.length
                            const additionalWords = randomWords.slice(0, neededWordsCount)
                            allSentenceWords = allSentenceWords.concat(additionalWords)
                        }

                        // перемешивание массива со словами для кнопок для сбора предложения
                        allSentenceWords = shuffleArray(allSentenceWords)

                        // заполнение текста кнопок для сбора слов
                        buttons.each(function(index) {
                            if (index < allSentenceWords.length) {
                                $(this).text(allSentenceWords[index])
                            }
                        });
                        
                        // очистка предыдущего предложения от его слов
                        // для того чтобы новое предложение было изначально пустым
                        finalSentence.text('');
                    }
                },
            });
        }
    });
});
