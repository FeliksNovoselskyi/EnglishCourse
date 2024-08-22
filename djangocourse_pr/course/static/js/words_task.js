$(document).ready(function() {
    const taskData = $('#task-data') // получаем блок со всеми предложениями, и укр. и англ.
    let currentIndex = parseInt(taskData.data('current-index'), 10) // получаем индекс предложения, на котором находимся
    
    const initialSentence = $('#column1').text().split(" ") // получаем английскую версию первого предложения
    const buttons = $('.word-button') // получаем кнопки со словами для первого предложения
    const finalSentence = $('.final-sentence') // получаем предложение, собираемое пользователем
    const progressBarCells = $('.progress-bar-cell') // получаем прогресс бар
    const randomWordsFirstSentence = $('#randomwords_first') // получаем рандомные слова для первого предложения
    const changeFinalSentence = document.querySelector('.final-sentence') // текст собираемого предложения
    const finalSentencePlace = document.querySelector('.final-sentence-place') // блок с подчеркиванием собираемого предложения
    
    // флаги
    let formSubmittedFlag = false
    let updateSentenceFlag = true
    let undoSentenceFlag = true
    let isFirstSentence = true
    let isUpdateWords = true

    // подготавливаем рандомные слова для первого предложения, в виде массива
    let randomWordsFirstSentenceText = randomWordsFirstSentence.text()
    randomWordsFirstSentenceText = randomWordsFirstSentenceText.split(" ")

    let allSentenceWords = [] // создаем массив со словами для последующий предложений

    // метод перемешивание массива с требуемыми для предложения словами и дополнительными
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    // функция обновления кнопок, после добавления/удаления слова
    function updateButtons(wordsArray) {
        wordsArray = shuffleArray(wordsArray)
        wordsArray = wordsArray.toString().toLowerCase().split(',')
        buttons.each(function(index) {
            if (index < wordsArray.length) {
                $(this).text(wordsArray[index])
            }
        })
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
    allWordsFirstSentence = allWordsFirstSentence.toString()
    allWordsFirstSentence = allWordsFirstSentence.toLowerCase()
    allWordsFirstSentence = allWordsFirstSentence.split(',')

    // заполняем все кнопки со словами для первого предложения
    updateButtons(allWordsFirstSentence)

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
        if (currentSentence && updateSentenceFlag) {
            finalSentence.text(`${currentSentence} ${buttonText}`) // задаем новое слово к старым, если они есть
        } else if (!currentSentence && updateSentenceFlag) {
            finalSentence.text(buttonText) // просто задаем новое слово, ибо до него ничего нет
        }

        if (isFirstSentence && isUpdateWords) {
            updateButtons(allWordsFirstSentence)
        } else if (allSentenceWords.length > 0 && isUpdateWords) {
            updateButtons(allSentenceWords) // этот массив обновляется при загрузке нового предложения
        }
    })

    // обрабатываем событие клика на кнопку удаления последнего слова
    $('.undo-btn').click(function() {
        // получаем то что уже введено, и преобразуем в массив
        if (undoSentenceFlag) {
            const currentSentence = finalSentence.text()
            const currentWordsOfSentence = currentSentence.split(" ")
            currentWordsOfSentence.pop() // удаляем последний элемент (последнее слово)
            finalSentence.text(`${currentWordsOfSentence.join(' ')}`) // преобразуем снова в текст, и задаем
            
            if (isFirstSentence && isUpdateWords) {
                updateButtons(allWordsFirstSentence) // обновляется при загрузке 1-го предложения
            } else if (allSentenceWords.length > 0 && isUpdateWords) {
                updateButtons(allSentenceWords) // этот массив обновляется при загрузке нового предложения
            }
        }
    })

    // функция неправильно собраного предложения
    function incorrectSentence() {
        // меняем стили, в случае если предложение собрано неправильно
        changeFinalSentence.style.color = 'red'
        finalSentencePlace.style.borderBottom = 'dashed 2px red'
        progressBarCells.eq(currentIndex).addClass('incorrect') // выделяем текущую ячейку прогресс-бара красным цветом
        
        formSubmittedFlag = true
        updateSentenceFlag = false
        undoSentenceFlag = false
        isUpdateWords = false

        setTimeout(function() {
            $('#nexttaskform').submit() // отправка формы через 2 секунды
        }, 2000);
    }

    // функция проверки правильности предложения
    function checkSentenceByInterval() {
        if (formSubmittedFlag) return

        const userSentence = finalSentence.text() // получаем предложение, собранное пользователем
        let correctSentence = $('#column1').text() // правильное предложение
        correctSentence = correctSentence.toLowerCase()
        const userWords = userSentence.split(" ") // разбиваем предложение пользователя на слова
        const correctWords = correctSentence.split(" ") // разбиваем правильное предложение на слова
        // console.log(userWords)
        // console.log(correctWords)


        if (userWords.length > correctWords.length) {
            incorrectSentence()
        } else if (userWords.length === correctWords.length)  {
            if (userSentence === correctSentence) {
                // если предложение собрано правильно, меняем стили
                changeFinalSentence.style.color = 'orange'
                finalSentencePlace.style.borderBottom = 'dashed 2px orange'

                formSubmittedFlag = true
                updateSentenceFlag = false
                undoSentenceFlag = false
                isUpdateWords = false

                setTimeout(function() {
                    $('#nexttaskform').submit() // отправка формы через 2 секунды
                }, 2000)
            } else {
                incorrectSentence()
            }
        } else {
            // если предложение ещё не собрано или неправильно
            changeFinalSentence.style.color = 'black'
            finalSentencePlace.style.borderBottom = 'dashed 2px rgb(28, 28, 28)'
            progressBarCells.eq(currentIndex).removeClass('incorrect')
        }
    }

    setInterval(checkSentenceByInterval, 100)
    
    $('#nexttaskform').submit(function(event) {
        // не даем форме сразу отправиться
        let isCorrect = changeFinalSentence.style.color === 'orange' ? 1 : 0;
        // console.log(isCorrect)
        event.preventDefault()

        // проверяем, верно ли собрано предложение
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
                    window.location.href = allTasksUrl // в случае ошибки перенаправляем на страницу со всеми заданиями
                } else {
                    $('#column1').text(response.english_sentence) // получаем английское предложение с бекенда
                    $('#column2').text(response.ukrainian_sentence) // получаем украинское предложение с бекенда
                    currentIndex = response.next_index // получаем с бекенда индекс следующего предложения
                    taskData.data('current-index', currentIndex) // меняем предложение на странице после проверки на его правильность

                    // обновление прогресса после верного прохождения предложения
                    updateProgressBar()

                    isFirstSentence = false
                    
                    let words = response.english_sentence.split(" ") // получаем предложение, которое нужно собрать
                    let randomWords = response.additional_words // получаем рандомные слова для заполнения пустых кнопок ими

                    // получение требуемых слов из английского предложения
                    allSentenceWords = words.slice(0, 9)

                    // проверка на то, сколько требуемых для выполнения предложения слов из 9
                    // исходя из этого, вычисление сколько кнопок остаются пустыми, и в массиве заполняются пустые места для них
                    if (allSentenceWords.length < 9) {
                        const neededWordsCount = 9 - allSentenceWords.length
                        const additionalWords = randomWords.slice(0, neededWordsCount)
                        allSentenceWords = allSentenceWords.concat(additionalWords)
                    }

                    // перемешивание массива со словами для кнопок для сбора предложения
                    allSentenceWords = shuffleArray(allSentenceWords)
                    allSentenceWords = allSentenceWords.toString()
                    allSentenceWords = allSentenceWords.toLowerCase()
                    allSentenceWords = allSentenceWords.split(',')

                    // заполнение текста кнопок для сбора слов
                    updateButtons(allSentenceWords)
                    
                    // очистка предыдущего предложения от его слов
                    // для того чтобы новое предложение было изначально пустым
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
