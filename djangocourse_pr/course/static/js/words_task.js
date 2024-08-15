$(document).ready(function() {
    const taskData = $('#task-data')
    let currentIndex = parseInt(taskData.data('current-index'), 10)
    
    const initialSentence = $('#column1').text().split(" ")
    const buttons = $('.word-button')
    const finalSentence = $('.final-sentence')
    const progressBarCells = $('.progress-bar-cell')

    let randomWordsFirstSentence = ['I', 'You', 'We',
                                    'They', 'Grass', 'Night',
                                    'Sofi', 'She', 'It', 'He']

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    let allWordsFirstSentence = initialSentence.slice(0, 9)

    if (allWordsFirstSentence.length < 9) {
        const neededWordsCountFS = 9 - allWordsFirstSentence.length
        const additionalWordsFS = randomWordsFirstSentence.slice(0, neededWordsCountFS)
        allWordsFirstSentence = allWordsFirstSentence.concat(additionalWordsFS)
    }

    allWordsFirstSentence = shuffleArray(allWordsFirstSentence)

    buttons.each(function(index) {
        if (index < allWordsFirstSentence.length) {
            $(this).text(allWordsFirstSentence[index])
        }
    })

    function updateProgressBar() {
        progressBarCells.each(function(index) {
            if (index < currentIndex) {
                $(this).addClass('correct')
            }
        })
    }

    $('.word-button').click(function() {
        const buttonText = $(this).text()
        const currentSentence = finalSentence.text()

        if (currentSentence) {
            finalSentence.text(`${currentSentence} ${buttonText}`)
        } else {
            finalSentence.text(buttonText)
        }
    });

    function checkSentence() {
        const userSentence = finalSentence.text()
        const correctSentence = $('#column1').text()
        return userSentence === correctSentence
    }
    
    $('.undo-btn').click(function() {
        const currentSentence = finalSentence.text()
        const currentWordsOfSentence = currentSentence.split(" ")
        currentWordsOfSentence.pop()
        finalSentence.text(`${currentWordsOfSentence.join(' ')}`)
    })

    $('#nexttaskform').submit(function(event) {
        event.preventDefault()

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
                        window.location.href = allTasksUrl
                    } else {
                        $('#column1').text(response.column1)
                        $('#column2').text(response.column2)
                        currentIndex = response.next_index
                        taskData.data('current-index', currentIndex)

                        updateProgressBar()
                        
                        let words = response.column1.split(" ")
                        let buttons = $('.word-button')
                        let randomSentences = response.random_sentences

                        const randomIndex = Math.floor(Math.random() * randomSentences.length)
                        const randomIndex2 = Math.floor(Math.random() * randomSentences.length)
                        const randomWordsFirst = randomSentences[randomIndex].split(" ")
                        const randomWordsSecond = randomSentences[randomIndex2].split(" ")
                        const combinedRandomWords = randomWordsFirst.concat(randomWordsSecond)

                        let allSentenceWords = words.slice(0, 9)

                        if (allSentenceWords.length < 9) {
                            const neededWordsCount = 9 - allSentenceWords.length
                            const additionalWords = combinedRandomWords.slice(0, neededWordsCount)
                            allSentenceWords = allSentenceWords.concat(additionalWords)
                        }

                        allSentenceWords = shuffleArray(allSentenceWords)

                        buttons.each(function(index) {
                            if (index < allSentenceWords.length) {
                                $(this).text(allSentenceWords[index])
                            }
                        });
                        
                        finalSentence.text('');
                    }
                },
            });
        }
    });
});
