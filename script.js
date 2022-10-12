const showAnswer = document.querySelectorAll('.container-distance');

showAnswer.forEach(answer => {
    const reveal = answer.querySelector('.answer-btn');
    const answerContainer = answer.querySelector('.container-answer')

    reveal.addEventListener('click', () => {

        if (answerContainer.classList.contains('hide-answer') === false) {
            answerContainer.classList.add('hide-answer');
        } else if (answerContainer.classList.contains('hide-answer')) {
            answerContainer.classList.remove('hide-answer');
            answerContainer.classList.add('container-answer');
        } 
    })
})