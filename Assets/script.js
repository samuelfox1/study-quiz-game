console.log('linked!');


// set shortcut variables to acces page elements
var body = document.body;

//var to later create all necessary elements
btnEl0 = document.createElement('button');
btnEl1 = document.createElement('button');
btnEl2 = document.createElement('button');
btnEl3 = document.createElement('button');
btnEl4 = document.createElement('button');


// variable to focue on id tags header
var nav = document.querySelector('#nav')
var mainH1 = document.querySelector('#header')
var pTag1 = document.querySelector('#pTag1')
var buttonBin = document.querySelector('#button-bin')

//nav link home / scores

var footer = document.querySelector('#footer')

//footer text and styling
footer.textContent = 'Samuel Fox, December 2020';
footer.style.textAlign = 'center';

//lauch program at main page
homePage()

// home page layout of 'main content'
function homePage() {
    // add nav button
    nav.appendChild(btnEl0)
    //set new nav button attribute
    btnEl0.setAttribute('id', 'navBtnTxt')
    //set nav button attribute text
    navBtnTxt.textContent = "Score Card"
    navBtnTxt.addEventListener('click', function () {
        scoresPage()
    })


    //add text content of header
    mainH1.textContent = 'Quiz Time';
    // add text content of p element
    pTag1.textContent = 'press button to start game'

    //create start button element
    //set id attribute to start button element
    btnEl1.setAttribute('id', 'start-button')
    //append start button to page
    buttonBin.appendChild(btnEl1)
    // add start button id
    startBtn = document.querySelector('#start-button')
    startBtn.textContent = 'Start'

    startBtn.addEventListener('click', function () {
        //remove nav button on game start
        nav.innerHTML = ''
        startGame()
    })
}

function scoresPage() {
    //header text
    mainH1.textContent = 'Recent Scores'
    // cleat pTag text
    pTag1.textContent = ""
    //clear button box
    buttonBin.innerHTML = ''

    //set nav button attribute text
    navBtnTxt.textContent = "Home"
    navBtnTxt.addEventListener('click', function () {
        homePage()
    })

}


// start game / question 1 layout of 'main content'
function startGame() {
    //add text content of header
    mainH1.textContent = 'Question 1';

    // add text content of p element
    pTag1.textContent = 'ask question here'

    //create button element in our button bin
    //set id attribute to button element
    btnEl1.setAttribute('id', 'wrong-1')
    //append button to page
    buttonBin.appendChild(btnEl1)
    // add id
    button = document.querySelector('#wrong-1')
    button.textContent = 'wrong 1'

    btnEl2.setAttribute('id', 'wrong-2')
    buttonBin.appendChild(btnEl2)
    button = document.querySelector('#wrong-2')
    button.textContent = 'wrong 2'

    btnEl3.setAttribute('id', 'wrong-3')
    buttonBin.appendChild(btnEl3)
    button = document.querySelector('#wrong-3')
    button.textContent = 'wrong 3'

    btnEl4.setAttribute('id', 'correct')
    buttonBin.appendChild(btnEl4)
    button = document.querySelector('#correct')
    button.textContent = 'correct'


}

