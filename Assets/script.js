console.log('linked!');


// set shortcut variables to acces page elements
var body = document.body;

//var to later create all necessary elements
var btnElNav = document.createElement('button');
var btnEl1 = document.createElement('button');
var btnEl2 = document.createElement('button');
var btnEl3 = document.createElement('button');
var btnEl4 = document.createElement('button');


// variable to focue on id tags h1
var nav = document.querySelector('#nav')
var h1 = document.querySelector('#h1')
var pTag1 = document.querySelector('#pTag1')
var pTag2 = document.querySelector('#pTag2')
var buttonBin = document.querySelector('#button-bin')
var feedback = document.querySelector('#answer-feedback')
var wrongBtn = document.querySelector('#wrong')
var correctBtn = document.querySelector('#correct')
var footer = document.querySelector('#footer')


//start game with 60 seconds on the clock
var timeLeft = 59;



// LOAD HOME PAGE
homePage()

// HOME PAGE
function homePage() {
    // add nav button and set id attributes
    nav.appendChild(btnElNav).setAttribute('id', 'navBtnTxt')
    //ad onclick function for scoresPage 
    btnElNav.setAttribute('onclick', 'scoresPage()')
    //set nav button attribute text
    navBtnTxt.textContent = "Score Card"
    console.log('Home')


    //add text content of h1
    h1.textContent = 'Quiz Time';
    // add text content of p element
    pTag1.textContent = 'Game Rules go here'

    //start button
    //add to page and set attribute id
    buttonBin.appendChild(btnEl1).setAttribute('id', 'start-button')
    //set attribute onclick function to start game when button is clicked
    btnEl1.setAttribute('onclick', 'gameCountdown()')
    //set button text
    startButtonText = document.querySelector('#start-button')
    startButtonText.textContent = 'Start'

    //homepage footer
    footer.textContent = 'Samuel Fox, December 2020';
    footer.style.textAlign = 'center';
}




//Start countdown timer to start game
function gameCountdown() {
    btnElNav.removeAttribute('onclick', 'scoresPage()')

    //start countdown timer 3 seconds
    var timeTillStart = 3;

    var timeInterval = setInterval(function () {
        //replace nav bar text with countdown time
        navBtnTxt.textContent = '* ' + timeTillStart + ' *';
        timeTillStart--;
        h1.textContent = ''
        pTag1.textContent = 'Get Ready'
        buttonBin.innerHTML = ''

        //when coutdown finishes, clear content and start game
        if (timeTillStart === -1) {
            //nav bar text signal start
            navBtnTxt.textContent = 'Start!'

            // clear button bin
            gameStart();
            clearInterval(timeInterval);
        }

    }, 1000);
}




//Start countdown timer
function gameStart() {
    // launch question1 function
    question1()
    console.log('Game Started')

    var timeInterval = setInterval(function () {

        // add nav button and set id attributes
        nav.appendChild(btnElNav).setAttribute('id', 'navBtnTxt')

        //display countdown text
        navBtnTxt.textContent = timeLeft + ' seconds left!';
        //subtract 1 second
        timeLeft--;

        //when time is up, clear buttons and 
        if (timeLeft < 0) {
            //nav bar text alert
            navBtnTxt.textContent = 'Times Up!'
            //reset button-bin
            buttonBin.innerHTML = ''
            inputPlayerInfo();
            clearInterval(timeInterval);
        }

    }, 1000);
}





// START GAME / question 1 layout of 'main content'
function question1() {
    //add text content of h1
    h1.textContent = 'Question 1';
    // add text content of p element
    pTag1.textContent = 'ask question here'
    //create button element in our button bin

    //wrong button 1
    //add button to page & add id attribute
    buttonBin.appendChild(btnEl1).setAttribute('id', 'wrong-1')
    //set attribute onclick function
    btnEl1.setAttribute('onclick', 'wrong()')
    //focus on attribute & set text content
    document.querySelector('#wrong-1').textContent = 'wrong 1'

    //wrong button 2
    buttonBin.appendChild(btnEl2).setAttribute('id', 'wrong-2')
    btnEl2.setAttribute('onclick', 'wrong()')
    document.querySelector('#wrong-2').textContent = 'wrong 2'
    //wrong button 3
    buttonBin.appendChild(btnEl3).setAttribute('id', 'wrong-3')
    btnEl3.setAttribute('onclick', 'wrong()')
    document.querySelector('#wrong-3').textContent = 'wrong 3'

    //correct button
    buttonBin.appendChild(btnEl4).setAttribute('id', 'correct')
    btnEl4.setAttribute('onclick', 'correct()')
    document.querySelector('#correct').textContent = 'correct'

}


//onclick function for wrong answer
function wrong() {
    //report wrong answer to user
    feedback.textContent = 'try again';
    //reduce game clock time for wrong answer clicks
    timeLeft = timeLeft - 5
    //set display time for wrong answer feedback
    var feedbackTimer = 2;

    var feedbackInterval = setInterval(function () {
        feedbackTimer--;

        if (feedbackTimer === 0) {
            feedback.textContent = "";
            clearInterval(feedbackInterval);
        }

    }, 1000);
}


//onclick function for correct answers
function correct() {
    //report correct anser to user
    feedback.textContent = 'correct!';
    //set display time for correct answer feedback
    var feedbackTimer = 3;

    var feedbackInterval = setInterval(function () {
        feedbackTimer--;

        if (feedbackTimer === 0) {
            feedback.textContent = "";
            clearInterval(feedbackInterval);
        }

    }, 1000);
}



function inputPlayerInfo() {
    console.log('times up!')
}


// SCORE PAGE
function scoresPage() {
    //ad onclick function for scoresPage 
    btnElNav.setAttribute('onclick', 'homePage()')
    //set nav button attribute text
    navBtnTxt.textContent = "Home"
    console.log('Scores')

    //h1 text
    h1.textContent = 'Scores'
    // cleat pTag text
    pTag1.textContent = ""
    //clear button box
    buttonBin.innerHTML = ''

}