$(document).ready(function() {
    const taskData = $('#task-data');
    let currentIndex = parseInt(taskData.data('current-index'), 10);

    // const initialSentence = $('#column1').text().split(" ");
    // const buttons = $('.word-button');

    // buttons.each(function(index) {
    //     if (index < initialSentence.length) {
    //         $(this).text(initialSentence[index]);
    //     } else {
    //         $(this).text(randomWords[Math.floor(Math.random() * randomWords.length)]);
    //     }
    // });
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    $('#nexttaskform').submit(function(event) {
        event.preventDefault();

        $.ajax({
            url: window.location.href,
            type: 'POST',
            data: {
                'current_index': currentIndex,
                'csrfmiddlewaretoken': $('input[name="csrfmiddlewaretoken"]').val(),
            },
            success: function(response) {
                if (response.error) {
                    window.location.href = allTasksUrl;
                } else {
                    $('#column2').text(response.column2);
                    currentIndex = response.next_index;
                    taskData.data('current-index', currentIndex);

                    let words = response.column1.split(" ");
                    let buttons = $('.word-button');
                    let randomSentences = response.random_sentences;

                    const randomIndex = Math.floor(Math.random() * randomSentences.length);
                    const randomIndex2 = Math.floor(Math.random() * randomSentences.length);
                    const randomWordsFirst = randomSentences[randomIndex].split(" ");
                    const randomWordsSecond = randomSentences[randomIndex2].split(" ");
                    const combinedRandomWords = randomWordsFirst.concat(randomWordsSecond);

                    let allSentenceWords = words.slice(0, 9);

                    if (allSentenceWords.length < 9) {
                        const neededWordsCount = 9 - allSentenceWords.length;
                        const additionalWords = combinedRandomWords.slice(0, neededWordsCount);
                        allSentenceWords = allSentenceWords.concat(additionalWords);
                    }

                    allSentenceWords = shuffleArray(allSentenceWords);

                    buttons.each(function(index) {
                        if (index < allSentenceWords.length) {
                            $(this).text(allSentenceWords[index]);
                        } else {
                            $(this).text('');
                        }
                    });
                }
            },
        });
    });
});
