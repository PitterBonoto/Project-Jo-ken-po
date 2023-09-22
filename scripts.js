
const result = document.querySelector('.result')
const humanScore = document.querySelector('#humanPoints')
const machineScore = document.querySelector('#machinePoints')
const humanImg = document.querySelector('.human-speak')
const machineImg = document.querySelector('.machine-speak')
const sheldon = document.querySelector('.sheldon-direita')
const boneco = document.querySelector('.boneco-esquerda')

let humanPoints = 0
let machinePoints = 0


function humanChoice(valueHuman) {
    
    checkGame(valueHuman, machineChoice())
    humanImg.innerHTML = valueHuman
}



function machineChoice() {
    const choices = ['pedra', 'papel', 'tesoura', 'lagarto', 'spock']
    let randomNumber = Math.floor(Math.random() * 5);
    machineImg.innerHTML = choices[randomNumber]
    return choices[randomNumber]
    
}



function checkGame(human, machine) {
    if (human === machine) {
        result.innerHTML = 'EMPATOU!'
        result.style.color = "#292929"
        sheldon.src = 'assets/sheldon-empatou.gif'
        boneco.src = 'assets/boneco-empatou.gif'

    } else if ((human === 'tesoura' && machine === 'papel') ||
        (human === 'papel' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'lagarto') ||
        (human === 'lagarto' && machine === 'spock') ||
        (human === 'spock' && machine === 'tesoura') ||
        (human === 'tesoura' && machine === 'lagarto') ||
        (human === 'lagarto' && machine === 'papel') ||
        (human === 'papel' && machine === 'spock') ||
        (human === 'spock' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'tesoura')) {
        result.innerHTML = 'PARABÉNS, VOCÊ GANHOU!'
        result.style.color = "#040442"
        humanPoints++
        humanScore.innerHTML = humanPoints
        sheldon.src = 'assets/sheldon-perdeu.gif'
        boneco.src = 'assets/boneco-ganhou.gif'

    } else {
        result.innerHTML = 'O SHELDON GANHOU!'
        result.style.color = "#b10101"
        machinePoints++
        machineScore.innerHTML = machinePoints
        sheldon.src = 'assets/sheldon-ganhou.gif'
        boneco.src = 'assets/boneco-perdeu.gif'
    }
}




