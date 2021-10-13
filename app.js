// APP STATE //

const state = {
    player1: 0,
    player2: 0,
    currentQuestion: {}
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
    // if(event.target.innerText === )
}

const setBoard = (q) => {
    // Getting a random question
    const randomIndex = Math.floor(Math.random() * q.length)
    const randomQuestion = q[randomIndex]

    // Update question
    $question.text(randomQuestion.question)
    $a.text(randomQuestion.a)
    $b.text(randomQuestion.b)
    $c.text(randomQuestion.c)
    $d.text(randomQuestion.d)

    // Update player scores
    $p1score.text(state.player1)
    $p2score.text(state.player2)

    $("li").on('click', (event) => {
        chooseAnswer(event, randomQuestion)
    })
}


// Main App Logic //

const URL = "https://cdn.contentful.com/spaces/jhs542ollwe8/environments/master/entries?access_token=m5B22bsQCxRx4pHu1r-i9u9uLMyv2TZly-_xkS8gHkY&content_type=triviaq"
$.ajax(URL)
.then((data) => {
    questions = data.items.map((q) => q.fields)
    console.log(data)
    console.log(questions)

    setBoard(questions)
})