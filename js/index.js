var form = document.getElementById('form')
form.addEventListener('submit', handleSubmit)

const status = document.getElementById('status')
var attempt = document.getElementById('attempt')
var result = document.getElementById('result')

var Guess = {
    max: 10,
    attemptsNumber: 0, 
    numberDrawn: function randomValue(){
        return Math.round(Math.random() * this.max)
    }
}

var numberDrawm = Guess.numberDrawn()

function updateAttempt(attempt, value){
    attempt.innerHTML = 'Tentativa: ' + value
}

function handleSubmit(e){
    e.preventDefault()

    var kick = document.getElementById('kick').value

    if(!kick){
        alert('Digite algum valor!')
        return
    }

    updateAttempt(attempt, ++Guess.attemptsNumber)

    if(numberDrawm == kick){
        playAgain()
        status.innerHTML = 'Parabéns, você acertou!'
        result.style.transition = '0.4s'
        result.style.backgroundColor = '#37c978'
        result.style.color = '#fff'
        status.style.color = '#fff'
        clear()
    }else if(numberDrawm > kick){
        status.innerHTML = 'O número é maior!'
        
        clear()
    }else if(numberDrawm < kick){
        status.innerHTML = 'O número é menor!'
        
        clear()
    }
}

function playAgain(){
    document.getElementById('btnRestart').style.display = 'flex'
}

function restart(){
    document.location.reload(true)
}

function clear(){
    document.getElementById('kick').value = ''

}