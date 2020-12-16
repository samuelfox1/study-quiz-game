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
var pointsLeft = 500;
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
    h1.textContent = 'Think Fast!';
    // add text content of p element
    pTag1.textContent = 'Welcome! This game will test your beginners coding knowledge. Every right answer will advance you to the next round. Every wrong answer will doc you 5 points on the score board. press Start to begin'


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
        navBtnTxt.textContent = pointsLeft + ' points left!';
        //deccrement game clock
        pointsLeft--;

        //when time is up, clear buttons and 
        if (pointsLeft < 1 || gameOver === true) {
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
    question: 'What does TLA stand for?',
    choices: ['two-little-apples', 'twin-ladder-accessories', 'three-letter-acronym', 'twirling-laundry-appliance',],
    answer: 'three-letter-acronym'
}, {
    title: 'question 2',
    question: 'What does URL stand for?',
    choices: ['urgent-red-light', 'unified-resource-link', 'unorganized-resource-list', 'up-real-late',],
    answer: 'unified-resource-link'
}, {
    title: 'question 3',
    question: 'What does RAM stand for',
    choices: ['real-angry-man', 'random-accessory-monkey', 'random-access-memory', 'its-just-an-animal',],
    answer: 'random-access-memory'
}, {
    title: 'question 4',
    question: 'What about API?',
    choices: ['alien-party-instrument', 'application-programming-interface', 'a-persons-intelligence', 'automotive-property-insurance',],
    answer: 'application-programming-interface'
}, {
    title: 'question 5',
    question: 'why are all of my answeres kebab case?',
    choices: ['i-thought-it-would-be-funny', 'i-like-the-way-it-looks', 'what-is-kebab-case', 'they-have-to-be-because-i-designed-my-program-poorly'],
    answer: 'they-have-to-be-because-i-designed-my-program-poorly'
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
            console.log(event.target.textContent)
            console.log(questionsArr[x].answer)
            console.log("correct")

            // correct()

            console.log('correct x = ' + x)
            x++
            question(x)

        }
        else {
            console.log('wrong')
            console.log('wrong x = ' + x)
            pointsLeft = pointsLeft - 5

            // tryAgain()
        }
    })

}





//onclick function for correct answers
function correct() {
    //report correct anser to user
    // feedback.textContent = ''
    // feedback.textContent = 'correct!';
    //set display time for correct answer feedback
    var feedbackTimer = 1;

    var feedbackIntervalCorrect = setInterval(function () {
        feedbackTimer--;

        if (feedbackTimer === 0) {
            feedback.textContent = "";
            clearInterval(feedbackIntervalCorrect);
        }

    }, 200);
}






//onclick function for wrong answer
function tryAgain() {
    //report wrong answer to user
    // feedback.textContent = ''
    // feedback.textContent = 'try again';
    //reduce game clock time for wrong answer clicks
    pointsLeft = pointsLeft - 5
    //set display time for wrong answer feedback
    var feedbackTimer = 1;

    var feedbackIntervalTryAgain = setInterval(function () {
        feedbackTimer--;

        if (feedbackTimer === 0) {
            feedback.textContent = "";
            clearInterval(feedbackIntervalTryAgain);
        }

    }, 200);
}




var inputName = ''
var userScoresArr = []

function inputPlayerInfo() {
    loadLocalStorage()

    h1.textContent = ''
    pTag1.textContent = ''
    buttonBin.innerHTML = ''
    inputName = prompt('Save that score! \n enter initials')
    userScoresArr.push(`${inputName} - ${pointsLeft} points`)
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
    //clear button boxes
    buttonBin.innerHTML = ''
    buttonStart.innerHTML = ''
    //add clear data box
    buttonBin.appendChild(btnEl0).setAttribute('id', 'clear-local-data')
    document.querySelector('#clear-local-data').textContent = 'Clear'
    btnEl0.addEventListener('click', function () {
        localStorage.removeItem('userScoresArr')
    })
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







