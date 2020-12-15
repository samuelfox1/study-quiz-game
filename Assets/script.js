console.log('linked!');


// set shortcut variables to acces page elements
var body = document.body;

//var to later create all necessary elements
var btnEl0 = document.createElement('button');
var btnEl1 = document.createElement('button');
var btnEl2 = document.createElement('button');
var btnEl3 = document.createElement('button');
var btnEl4 = document.createElement('button');


// variable to focue on id tags header
var nav = document.querySelector('#nav')
var mainH1 = document.querySelector('#header')
var pTag1 = document.querySelector('#pTag1')
var buttonBin = document.querySelector('#button-bin')
var wrongBtn = document.querySelector('#wrong')
var correctBtn = document.querySelector('#correct')
var footer = document.querySelector('#footer')



// LOAD HOME PAGE
homePage()

// HOME PAGE
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
        question1()
    })
    //homepage footer
    footer.textContent = 'Samuel Fox, December 2020';
    footer.style.textAlign = 'center';
}


// SCORE PAGE
function scoresPage() {
    //header text
    mainH1.textContent = 'Scores'
    // cleat pTag text
    pTag1.textContent = ""
    //clear button box
    buttonBin.innerHTML = ''

    //set nav button attribute text
    navBtnTxt.textContent = "Home"
    navBtnTxt.addEventListener('click', function () {
        homePage()
    })

    //remove footer during game mode?
}





// START GAME / question 1 layout of 'main content'
function question1() {
    //add text content of header
    mainH1.textContent = 'Question 1';
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
    console.log('wrong')
}

//onclick function for correct answer
function correct() {
    console.log('correct')
}
