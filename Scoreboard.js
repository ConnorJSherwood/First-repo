let homeCount=0
let guestCount=0

let homePts=document.getElementById('home-pts')
let guestPts=document.getElementById('guest-pts')
let scoreText = document.getElementById('score-text')


function home1() {
    homeCount = homeCount +=1
    homePts.innerText=homeCount    
    if (homeCount > guestCount){
        scoreText.innerText = "Home team lead!"
     } else if (homeCount < guestCount) {
        scoreText.innerText = "Guest team is taking over!"
     } else {
        scoreText.innerText = "Ooooh it's neck and neck.."
     }
    }


function home2() {
    homeCount = homeCount +=2
    homePts.innerText=homeCount    
    if (homeCount > guestCount){
        scoreText.innerText = "Home team lead!"
     } else if (homeCount < guestCount) {
        scoreText.innerText = "Guest team is taking over!"
     } else {
        scoreText.innerText = "Ooooh it's neck and neck.."
     }
}

function home3() {
    homeCount = homeCount +=3
    homePts.innerText=homeCount   
    if (homeCount > guestCount){
        scoreText.innerText = "Home team lead!"
     } else if (homeCount < guestCount) {
        scoreText.innerText = "Guest team is taking over!"
     } else {
        scoreText.innerText = "Ooooh it's neck and neck.."
     } 
}



function guest1() {
    guestCount = guestCount +=1
    guestPts.innerText=guestCount  
    if (homeCount > guestCount){
        scoreText.innerText = "Home team lead!"
     } else if (homeCount < guestCount) {
        scoreText.innerText = "Guest team is taking over!"
     } else {
        scoreText.innerText = "Ooooh it's neck and neck.."
     }  
}

function guest2() {
    guestCount = guestCount +=2
    guestPts.innerText=guestCount    
    if (homeCount > guestCount){
        scoreText.innerText = "Home team lead!"
     } else if (homeCount < guestCount) {
        scoreText.innerText = "Guest team is taking over!"
     } else {
        scoreText.innerText = "Ooooh it's neck and neck.."
     }
}

function guest3() {
    guestCount = guestCount +=3
    guestPts.innerText=guestCount    
    if (homeCount > guestCount){
        scoreText.innerText = "Home team lead!"
     } else if (homeCount < guestCount) {
        scoreText.innerText = "Guest team is taking over!"
     } else {
        scoreText.innerText = "Ooooh it's neck and neck.."
     }
}

function resetScores() {
     homeCount=0
     guestCount=0
     homePts.innerText=homeCount 
     guestPts.innerText=guestCount 
     scoreText.innerText = "Rematch eh 😉 "
}

console.log('scoreText');