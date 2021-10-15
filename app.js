// APP STATE //

const state = {
    player1: 0,
    player2: 0,
    // currentQuestion: {},
    which: true,
    // quit: false
}

let questions = []

// Main DOM Element //

const $question = $("#question")
const $a = $("#a")
const $b = $("#b")
const $c = $("#c")
const $d = $("#d")
const $p1score = $('#player1 h4')
const $p2score = $('#player2 h4')
// console.log(p1score, p2score)

// Functions //

const chooseAnswer = (event, question) => {
    console.log(event)
    if(event.target.innerText === question.answer) {
        console.log("correct")
        // ❌
        // console.log(event.target)
        // $('#player1').children().eq(0).css('color','green')
        // $(event.target)

        if (state.which) {
            state.player1++
            state.which = !state.which
        } else {  
            state.player2++
            state.which = !state.which
        }
        setBoard(questions)
    } else {
        console.log("incorrect")
        setBoard(questions)
        state.which = !state.which
    }
}

const setBoard = (q) => {
    // Getting a random question
    const randomIndex = Math.floor(Math.random() * q.length)
    // const randomQuestion = q[randomIndex]
    const randomQuestion = q.splice(randomIndex, 1)[0] // 🤯 simple yet mindblowing


    // Update question
    $question.text(randomQuestion.question)
    $a.text(randomQuestion.a)
    $b.text(randomQuestion.b)
    $c.text(randomQuestion.c)
    $d.text(randomQuestion.d)

    // Update player scores
    $p1score.text(state.player1)
    $p2score.text(state.player2)

    $('li').off() // removes/fixes the compounding listeners

    $("li").on('click', (event) => {
        chooseAnswer(event, randomQuestion)
    })

    // ❗️
    console.log(q.length)
    if (q.length === 0) {
        if (state.player1 === state.player2) {
            alert(`It's a tie!`)
        } else if (state.player2 > state.player1) {
            alert(`Player 2 wins with ${state.player2} points!`)
        } else if (state.player1 > state.player2) {
            alert(`Player 1 wins with ${state.player1} points!`)
        }
    }

    // ❗️
}


// Rules
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', ()=> {
    modal_container.classList.add('show');
});

close.addEventListener('click', ()=> {
    modal_container.classList.remove('show');
});



// Main App Logic //

const URL = "https://cdn.contentful.com/spaces/jhs542ollwe8/environments/master/entries?access_token=m5B22bsQCxRx4pHu1r-i9u9uLMyv2TZly-_xkS8gHkY&content_type=triviaq"
$.ajax(URL)
.then((data) => {
    questions = data.items.map((q) => q.fields)
    console.log(data)
    console.log(questions)

    setBoard(questions)
})