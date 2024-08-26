$(document).ready(function() {
    const taskData = $('#task-data') // Получаем блок где редактируется предложение, а также где находится его украинский перевод
    let currentIndex = parseInt(taskData.data('current-index'), 10) // Получаем индекс предложения, на котором находится пользователь
    
    const initialSentence = $('#column1').text().split(" ") // Английская версия первого предложения
    const buttons = $('.word-button') // Кнопки со словами для первого предложения
    const finalSentence = $('.final-sentence') // Предложение собираемое пользователем
    const progressBarCells = $('.progress-bar-cell') // Ячейки прогресс бара
    const randomWordsFirstSentence = $('#randomwords_first') // Случайные слова для первого предложения
    const changeFinalSentence = document.querySelector('.final-sentence') // Собираемое предложение
    const finalSentencePlace = document.querySelector('.final-sentence-place') // Блок с подчеркиванием собираемого предложения
    
    // Флаги
    let formSubmittedFlag = false
    let updateSentenceFlag = true
    let undoSentenceFlag = true
    let isFirstSentence = true
    let isUpdateWords = true

    // Подготавливаем рандомные слова для первого предложения, в виде массива
    let randomWordsFirstSentenceText = randomWordsFirstSentence.text()
    randomWordsFirstSentenceText = randomWordsFirstSentenceText.split(" ")

    let allWords = []

    // Функция отправки формы
    // для перехода на следующие предложения
    function submitForm() {
        setTimeout(function() {
            $('#nexttaskform').submit() // Отправка формы через 2 секунды (для красоты и плавности использования)
        }, 2000);
    }

    // Функция в которой определяется какими словами обновлять кнопки
    // в зависимости от предложения на котором находится пользователь
    function checkSentenceForUpdateBtns() {
        // Условие для обновления контента кнопок
        // тут проверяется на каком предложении пользователь, в зависимости от этого обновляем контент кнопок на нужный
        if (isFirstSentence && isUpdateWords) {
            updateButtons(allWords)
        } else if (allWords.length > 0 && isUpdateWords) {
            updateButtons(allWords)
        }
    }

    // Функция для перемешивания слов для кнопок
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    // Функция обновления кнопок, после добавления/удаления слова
    function updateButtons(wordsArray) {
        wordsArray = shuffleArray(wordsArray)
        wordsArray = wordsArray.toString().toLowerCase().split(',')
        buttons.each(function(index) {
            if (index < wordsArray.length) {
                $(this).text(wordsArray[index])
            }
        })
    }

    // Универсальная функция подготовки слов для кнопок
    // как для первого предложения, так и для всех последующих
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

        // Проверка и замена дублирующихся слов
        for (let i = 0; i < allWords.length; i++) {
            while (allWords.indexOf(allWords[i]) !== i) {
                allWords[i] = randomWordsArg.shift() // Заменяем повторяющееся слова на новое
            }
        }

        updateButtons(allWords)
    }

    // Добавляем слова первого предложения в кнопки
    prepareButtonsContent(initialSentence, randomFirstWords=true, randomWordsFirstSentenceText)

    // Функция обновления прогресс бара
    function updateProgressBar() {
        progressBarCells.each(function(index) {
            if (index < currentIndex) {
                $(this).addClass('correct')
            }
        })
    }

    // Обрабатываем клик на одну из кнопок со словами
    $('.word-button').click(function() {
        const buttonText = $(this).text()
        const currentSentence = finalSentence.text()
        // console.log(currentSentence)
        if (currentSentence && updateSentenceFlag) {
            finalSentence.text(`${currentSentence} ${buttonText}`) // Добавляем новое слово к старым, если они есть
        } else if (!currentSentence && updateSentenceFlag) {
            finalSentence.text(buttonText) // Просто задаем новое слово, ибо до него ничего нет
        }

        checkSentenceForUpdateBtns()
    })

    // Обрабатываем событие клика на кнопку удаления последнего слова
    $('.undo-btn').click(function() {
        // Получаем то что уже введено, и преобразуем в массив
        if (undoSentenceFlag) {
            const currentSentence = finalSentence.text()
            const currentWordsOfSentence = currentSentence.split(" ")
            currentWordsOfSentence.pop() // Удаляем последний элемент (последнее слово)
            finalSentence.text(`${currentWordsOfSentence.join(' ')}`) // Преобразуем снова в текст, и задаем
            
            checkSentenceForUpdateBtns()
        }
    })

    // Функция обработки неправильно собраного предложения
    function incorrectSentence() {
        changeFinalSentence.style.color = 'red'
        finalSentencePlace.style.borderBottom = 'dashed 2px red'
        progressBarCells.eq(currentIndex).addClass('incorrect') // Выделяем текущую ячейку прогресс-бара красным цветом
        
        formSubmittedFlag = true
        updateSentenceFlag = false
        undoSentenceFlag = false
        isUpdateWords = false

        submitForm()
    }

    // Функция проверки предложения
    function checkSentenceByInterval() {
        // Проверяем отправляется ли форма
        // в ином случае проверка заданий будет работать не корректно, и задание будет проходится автоматически
        if (formSubmittedFlag) return

        const userSentence = finalSentence.text() // Получаем предложение, собранное пользователем
        let correctSentence = $('#column1').text() // Правильное предложение
        correctSentence = correctSentence.toLowerCase()
        const userWords = userSentence.split(" ")
        const correctWords = correctSentence.split(" ")
        // console.log(userWords)
        // console.log(correctWords)

        // Дополнительно условие если каким-то образом пользователь ввёл слов больше чем нужно
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
            // Если предложение ещё не собрано до конца
            changeFinalSentence.style.color = 'black'
            finalSentencePlace.style.borderBottom = 'dashed 2px rgb(28, 28, 28)'
            progressBarCells.eq(currentIndex).removeClass('incorrect')
        }
    }

    // Проверяем собираемое предложение каждый 100 миллисекунд
    setInterval(checkSentenceByInterval, 100)
    
    $('#nexttaskform').submit(function(event) {
        let isCorrect = changeFinalSentence.style.color === 'orange' ? 1 : 0;
        // console.log(isCorrect)
        event.preventDefault()

        $.ajax({
            url: window.location.href,
            type: 'POST',
            data: {
                'current_index': currentIndex,
                // 'is_correct': isCorrect,
                'csrfmiddlewaretoken': $('input[name="csrfmiddlewaretoken"]').val(),
            },
            success: function(response) {
                if (response.error) {
                    window.location.href = allTasksUrl
                } else {
                    $('#column1').text(response.english_sentence)
                    $('#column2').text(response.ukrainian_sentence)
                    currentIndex = response.next_index
                    taskData.data('current-index', currentIndex) // Обновляем предложение на странице после проверки на его правильность

                    updateProgressBar()

                    isFirstSentence = false
                    
                    // Получаем верное предложение я рандомные слова для последующих предложений
                    let words = response.english_sentence.split(" ")
                    let randomWords = response.additional_words

                    // Добавляем слова новых предложений в кнопки
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
