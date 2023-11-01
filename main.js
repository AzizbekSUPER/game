let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    gameTime = document.querySelector('.time'),
    gameBox = document.querySelector('.game__box')
    score = 0,
    timem = 0,
    interval = 0;

btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value > 4) {
        time = input.value
        input.value = ''
        score = 0
        clearInterval(interval)
        start()
        btn.classList.add('disabled')
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
    }
})


gameBox.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})


function start() {
    interval = setInterval(() => decrease(), 1000)
    createBall()
} 

function decrease() {
    if(time == 0) {
        end()
    }else {
        time = --time
        gameTime.innerHTML = time
    }
}

function end() {
    gameBox.innerHTML = `<h2 class="result">Вы набрали ${score} баллов</h2>`
    btn.classList.remove('disabled')

}


function createBall() {
    let ball = document.createElement('div')
    ball.classList.add('ball')
    let size = 40;
    ball.style.width = ball.style.height = size + 'px'
    ball.style.background = 'red'

    let cor = gameBox.getBoundingClientRect()
    let { width, height } = cor


    let x = random(0, width - size)
    let y = random(0, height - size)

    ball.style.left = x + 'px'
    ball.style.top = y + 'px'

    gameBox.append(ball)

}

function random(min,max) {
    return Math.floor(Math.random() * ( max + 1 - min ) + min)
}


// Домашка 

// 1) рандомный цвет
// 2) рандомный размер от 20px до 100px
// 3) рандомные фигурки