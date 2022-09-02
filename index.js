let homeScore = document.getElementById('hs')
let guestScore = document.getElementById('gs')


let hScore = 0
let gScore = 0

function hAddOne() {
    hScore = hScore + 1
    homeScore.textContent = hScore
}

function hAddTwo() {
   hScore = hScore + 2
   homeScore.textContent = hScore
}

function hAddThree() {
   hScore = hScore + 3
   homeScore.textContent = hScore
}

function gAddOne() {
    gScore = gScore + 1
    guestScore.textContent = gScore
}

function gAddTwo() {
    gScore = gScore + 2
    guestScore.textContent = gScore
}

function gAddThree() {
    gScore = gScore + 3
    guestScore.textContent = gScore
}

function reset() {
    hScore = 0
    homeScore.textContent = hScore
    gScore = 0
    guestScore.textContent = gScore
}