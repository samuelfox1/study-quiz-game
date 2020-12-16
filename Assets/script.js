console.log('linked!');


// set shortcut variables to acces page elements
var body = document.body;

//var to later create all necessary elements
var btnElNav = document.createElement('button');
var btnElStart = document.createElement('button');
var btnEl0 = document.createElement('button');
var btnEl1 = document.createElement('button');
var btnEl2 = document.createElement('button');
var btnEl3 = document.createElement('button');
var liEl0 = document.createElement('li');


// variable to focue on id tags h1
var nav = document.querySelector('#nav')
var h1 = document.querySelector('#h1')
var pTag1 = document.querySelector('#pTag1')
var pTag2 = document.querySelector('#pTag2')
var buttonBin = document.querySelector('#button-bin')
var buttonStart = document.querySelector('#button-start')
var feedback = document.querySelector('#answer-feedback')
var list = document.querySelector('#score-list')
var footer = document.querySelector('#footer')


//start game with 60 seconds on the clock
var timeLeft = 500;
var gameOver = false
var userObj = {
    name: '',
    score: '',
}
var userScoresArr = []
var x = 0


homePage()



// HOME PAGE
function homePage() {
    //remove list elements form page
    list.innerHTML = ''
    //reset game status to loop again if desired
    gameOver = false


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
    //add to page and set id tag
    buttonStart.appendChild(btnElStart).setAttribute('id', 'start-button')
    //set button text
    document.querySelector('#start-button').textContent = 'Start'
    //listen for button click
    btnElStart.addEventListener('click', function () {
        //start game countdown when clicked
        gameCountdown()
    })
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
        buttonStart.innerHTML = ''

        //when coutdown finishes, clear content and start game
        if (timeTillStart === -1) {
            //nav bar text signal start
            navBtnTxt.textContent = 'Start!'
            x = 0
            // clear button bin
            gameStart();
            //stop countdown timer
            clearInterval(timeInterval);
        }

    }, 1000);
}




//COUNTDOWN TO GAME START
function gameStart() {
    // launch questionArray[index-number] function
    question(0)
    console.log('Game Started')
    var timeInterval = setInterval(function () {

        // add nav button and set id attributes
        nav.appendChild(btnElNav).setAttribute('id', 'navBtnTxt')
        //display countdown text in nav button spot
        navBtnTxt.textContent = timeLeft + ' seconds left!';
        //deccrement game clock
        timeLeft--;

        //when time is up, clear buttons and 
        if (timeLeft < 0 || gameOver === true) {
            //reset button-bin
            buttonBin.innerHTML = ''
            clearInterval(timeInterval);
            inputPlayerInfo();
        }

    }, 1000);
}



////===================
var questionsArr = [{
    title: 'question1',
    question: 'ask question1 here',
    choices: ['Q1A1', 'Q1A2', 'Q1A3', 'Q1A4',],
    answer: 'Q1A4'
}, {
    title: 'question 2',
    question: 'ask question2 here',
    choices: ['Q2A1', 'Q2A2', 'Q2A3', 'Q2A4',],
    answer: 'Q2A2'
}, {
    title: 'question 3',
    question: 'ask question3 here',
    choices: ['Q3A1', 'Q3A2', 'Q3A3', 'Q3A4',],
    answer: 'Q3A1'
}, {
    title: 'question 4',
    question: 'ask question4 here',
    choices: ['Q4A1', 'Q4A2', 'Q4A3', 'Q4A4',],
    answer: 'Q4A3'
}, {
    title: 'question 5',
    question: 'ask question5 here',
    choices: ['Q5A1', 'Q5A2', 'Q5A3', 'Q5A4',],
    answer: 'Q5A3'
}];

//Button array used in for loop to create question & answer pages
var buttonArr = [
    btnEl0,
    btnEl1,
    btnEl2,
    btnEl3,
]


function question(x) {

    //if there are still question objects left in the array, load the next question
    if (x < questionsArr.length) {

        //add title Question[x]
        h1.textContent = questionsArr[x].title;
        // add question text here
        pTag1.textContent = questionsArr[x].question;

        //create answer buttons in our button bin
        for (let i = 0; i < questionsArr[x].choices.length; i++) {
            var text = questionsArr[x].choices[i]
            //add button to page & add id attribute
            buttonBin.appendChild(buttonArr[i]).setAttribute('id', questionsArr[x].choices[i])
            //focus on attribute & set text content
            document.querySelector(`#${questionsArr[x].choices[i]}`).textContent = text
        }
    } else {

        gameOver = true

    }

    buttonBin.addEventListener('click', function (event) {
        if (event.target.textContent === questionsArr[x].answer) {

            correct()
            x++
            question(x)

        } else {
            tryAgain()
        }
    })

}



//onclick function for wrong answer
function tryAgain() {
    //report wrong answer to user
    feedback.textContent = 'try again';
    //reduce game clock time for wrong answer clicks
    timeLeft = timeLeft - 5
    //set display time for wrong answer feedback
    var feedbackTimer = 1;

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
    var feedbackTimer = 2;

    var feedbackInterval = setInterval(function () {
        feedbackTimer--;

        if (feedbackTimer === 0) {
            feedback.textContent = "";
            clearInterval(feedbackInterval);
        }

    }, 1000);
}


var inputName = ''
var userScoresArr = []

function inputPlayerInfo() {
    loadLocalStorage()

    h1.textContent = ''
    pTag1.textContent = ''
    buttonBin.innerHTML = ''
    inputName = prompt('Save that score! \n enter initials')
    userScoresArr.push(`${inputName} - ${timeLeft}`)
    //may need to be array name\/ \/ update line 315 as well
    localStorage.setItem("userScoresArr", JSON.stringify(userScoresArr));
    scoresPage()
}



// SCORE PAGE
function scoresPage() {

    //ad onclick function for scoresPage 
    btnElNav.setAttribute('onclick', 'location.reload()')
    //set nav button attribute text
    navBtnTxt.textContent = "Home"

    //h1 text
    h1.textContent = 'Scores'
    // clear pTag text
    pTag1.textContent = ""
    //clear button box
    buttonBin.innerHTML = ''
    buttonStart.innerHTML = ''
    // loadScores()
    // init()
    loadLocalStorage()

}


//========================================================================



function loadLocalStorage() {
    var storedScores = JSON.parse(localStorage.getItem("userScoresArr"));

    if (storedScores !== null) {
        userScoresArr = storedScores;
    }

    loadUserScores();
}



function loadUserScores() {
    list.innerHTML = "";

    for (var i = 0; i < userScoresArr.length; i++) {
        var userScore = userScoresArr[i];

        var li = document.createElement("li");
        li.textContent = userScore;
        li.setAttribute("data-index", i);

        list.appendChild(li);
    }
}






