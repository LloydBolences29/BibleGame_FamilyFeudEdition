
let TeamOneaddBtn = document.querySelector("#OneaddBtn")
let TeamOneminusBtn = document.querySelector("#OneMinusBtn")
let TeamTwoaddBtn = document.querySelector("#TwoaddBtn")
let TeamTwominusBtn = document.querySelector("#TwoMinusBtn")
let teamOneScore = document.querySelector("#teamOneScoreHeader")
let teamTwoScore = document.querySelector("#teamTwoScoreHeader")
let titleHeader = document.querySelector("#title-header")
let head = document.querySelector("head")
let questionBox = document.querySelector("#title-header")
let flashcardTitle = document.querySelector("span")
let answers = document.querySelector(".answer")
let contentBoxItem = document.querySelector(".contentBox")
let contentItems = document.querySelector(".content-item")
let incorrectAnswerResponse = document.querySelector(".incorrectAnswerResponse")
var questionAndAnswerIndex = 0;




const keyframes =
    `@keyframes fadeIn{
0% {opacity: 0%;}
100% {opacity: 100%}
}`



var questionBank = [
    {
        "question": "Disease / Karamdaman",
        "answers": [
            "Pagkabaog (Genesis 16:1)",
            "Pigsa (Exodus 9:9)",
            "Bukol (1 Samuel 5:6)",
            "Lagnat (Matthew 8:14-15)",
            "Ketong(2 Kings 5:1)",
            "Pagdurugo (Matthew 9:20)",
            "Pagkabulag (Mark 10:46)",
            "Paralisado (Matthew 4:24)"],



    },
    {
        "question": "Dreamer",
        "answers": [
            "Daniel (Daniel 7)",
            "Jacob (Genesis 28:10-22)",
            "Pharaoh",
            "Pharaoh's chief cupbearer (Genesis 41:22-32)",
            "Pharaoh's chief baker (Genesis 40:16-19)",
            "Nebuchadnezzar (Daniel 4:4-6)",
            "Joseph of Nazareth",
            "Magi (Matthew 2:12)"],

    },
    {
        "question": "Parables of Jesus Likened to the Kingdom of Heaven",
        "answers": [
            "Parable of the Wheat and Tares or Weeds (Matthew 13:24-30;36-43",
            "Parable of the Mustard Seed (Matthew 13:31-32)",
            "Parable of the Yeast or leaven (Matthew 13:33)",
            "Parable of the Hidden Treasure in the Field (Matthew 13:44)",
            "Parable of the Pearl of the Great Price (Matthew 13:45,46)",
            "Parable of the New and Old Treasures (Matthew 13:52)",
            "Parable of the Unmerciful/Unforgiving Servant (Matthew 18:23-35"],

    },
    {
        "question": "Prisoners",
        "answers": [
            "Joseph (Genesis 39:20)",
            "Samson (Judges 16:21)",
            "Micaiah (2 Chronicles 18:7)",
            "Jeremiah (Jeremiah 20)",
            "John the Baptist (Mark 6)",
            "Peter", "John", "Paul", "Silas"
        ],
    },
    {
        "question": "Birds",
        "answers": [
            "Tagak/Crane (Isaiah 38:14)",
            "Kalapati/Dove/Turtledove (Genesis 8:8)",
            "Agila/Eagle (Leviticus 11:13)",
            "Heron (Leviticus 11:19)",
            "Ostrich (Job 39:13)",
            "Kuwago/Owl (Leviticus 11:19)",
            "Pugo/Quail (1 samuel 26:20)",
            "Pabo/Peacock (Job 39:13)",
            "Uwak/Raven (Genesis 8:7)",
            "Maya/Sparrow (Psalms 84:3)",
            "Sisne/Swan (Leviticus 11:18)"
        ],

    },
    {
        "question": "Characters with Two Names/Surnames",
        "answers": [
            "Caesar Agustus (Luke 2:1)",
            "John Mark (Acts 12:12)",
            "Lebbaeus Thaddaeus (Matthew 10:3)",
            "Simon Peter/Simon Bar-jona (Acts 10:5; Matthew 16:17)",
            "Iscariot, Judas (Luke 22:3)",
            "Barsabas Justus (Acts 1:23)",
            "Judas Barsabas (Acts 15:22)",
            "Pontius Pilate (Matthew 27:2)",
            "Mary Magdalene (Matthew 27:56)",
            "Jesus Christ"],

    }
];

let questionBankLength = questionBank.length;

// Team One increment and decrement Button
TeamOneaddBtn.addEventListener('click', () => {
    teamOneScore.value = parseInt(teamOneScore.value) + 1;
});

TeamOneminusBtn.addEventListener('click', () => {
    if (teamOneScore.value <= 1) {
        teamOneScore.value = 0;
    } else {
        teamOneScore.value = parseInt(teamOneScore.value) - 1;
    }
});

// Team Two increment and decrement button

TeamTwoaddBtn.addEventListener('click', () => {
    teamTwoScore.value = parseInt(teamTwoScore.value) + 1;
    console.log(teamTwoScore.value)


});



TeamTwominusBtn.addEventListener('click', () => {
    if (teamTwoScore.value <= 0) {
        teamTwoScore.value = 0;
    } else {
        teamTwoScore.value = parseInt(teamTwoScore.value) - 1;
    }

});

//Create an onclick animation on the span texts

let textAnimationFunc = (e) => {
    e.addEventListener('click', () => {
        flashcardTitle.style.color = "black"
        flashcardTitle.style.animation = "fadeIn 3s"



        let style = document.createElement('flashcardTextAnimationStyle')
        style.innerHTML = keyframes;
        head.appendChild(flashcardTextAnimationStyle);

    })
}

//Onclick anywhere on the screen function
let temp;
let myAnimationFunc = (e) => {
    e.addEventListener('click', () => {
        e.style.color = "black"
        e.style.animation = "fadeIn 2s"



        let style = document.createElement('STYLE');
        style.innerHTML = keyframes;
        head.appendChild(style);

    });




}


// Assigning the question

let assignTitleFunc = () => {

    let questionTitle = Object.values(questionBank[questionAndAnswerIndex])
    questionBox.innerHTML = questionTitle[0];
    questionBox.removeAttribute("style")




}

//assigning the answers

let assignAnswerFunc = () => {
    let questionAnswers = Object.values(questionBank[questionAndAnswerIndex])

    let flashcardAnswers = questionAnswers[1]
    let answerLength = flashcardAnswers.length;

    //loop through each array that was created by the Object.values
    for (let i = 0; i < answerLength; i++) {
        temp = document.createElement("div")
        temp.className = "content-item"
        temp.setAttribute('id', i)
        temp.classList.add("hidden")
        temp.innerHTML = flashcardAnswers[i]
        contentBoxItem.appendChild(temp)
        // myAnimationFunc(temp)
    }
}



//update the answer board

const deleteChild = () => {
    var child = contentBoxItem.lastElementChild;
    while (child) {
        contentBoxItem.removeChild(child);
        child = contentBoxItem.lastElementChild;
    }

}




assignTitleFunc();
myAnimationFunc(questionBox);
assignAnswerFunc();


let prevBtn = document.querySelector(".prevBtn")
let nextBtn = document.querySelector(".nextBtn")


//Add an event when the next and previous button was clicked
nextBtn.addEventListener('click', () => {

    if (questionAndAnswerIndex == 5) {
        nextBtn.disabled = true
    } else {
        questionAndAnswerIndex++
        nextBtn.disabled = false
        prevBtn.disabled = false

        deleteChild()
        assignTitleFunc();
        assignAnswerFunc();




    };

})



prevBtn.addEventListener('click', () => {
    if (questionAndAnswerIndex <= 0) {
        prevBtn.disabled = true
    } else {
        questionAndAnswerIndex--
        prevBtn.disabled = false
        nextBtn.disabled = false


        deleteChild()
        assignTitleFunc();
        assignAnswerFunc();

    }
})


//check answer

let userAnswer = document.querySelector("#input")
let submitBtn = document.querySelector(".submitBtn")

let checkAnswer = (guess) => {
    // for (let i = 0; i < questionBank[questionAndAnswerIndex].answers.length; i++) {
    //     //correct answer
    //     if (guess === questionBank[questionAndAnswerIndex].answers[i].toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')) {
    //         contentItems.forEach((contentItem) => {
    //             let answerNum = parseInt(contentItem.id);
    //             if (answerNum = i)
    //                 // contentItem.classList.remove("hidden");
    //                 console.log("true")
    //         })
    //         return true
    //     }else{return false}
    // }

    // let answerArray = Object.values(questionBank[questionAndAnswerIndex].answers)

    // if (questionBank[questionAndAnswerIndex].answers.some((answer) => answer === guess)) {
    //     console.log("true")
    //     console.log(questionBank[questionAndAnswerIndex].answers[questionAndAnswerIndex])
    //     return true;
    // } else {
    //     console.log(typeof answerArray)
    //     console.log(answerArray)
    //     console.log(typeof questionBank)

    //     return false
    // }



  
    let answerHolder = Object.values(questionBank[questionAndAnswerIndex].answers)
    //check if the user's answer is in the array
    let validateUserInput = answerHolder.some((answer) => answer = userAnswer)
    console.log(answerHolder)
    //log to console the value
    console.log(validateUserInput)

    //validation
    if (validateUserInput === true) {
        return true
    } else {
        return false
    }

}


let flag;
console.log(flag)
submitBtn.addEventListener('click', () => {
    console.log("submitted")
    let guess = userAnswer.value.toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}1234567890]/g, '')
    console.log(guess.value)

    flag = checkAnswer(guess)
    console.log(flag)

    if (flag === true) {
        incorrectAnswerResponse.classList.add("hidden")
        let answerId = parseInt(contentItems.id)
        if (answerID = i) {
            contentItem.classList.remove("hidden");

        }

        console.log("flag is true")
    }

    if (flag === false) {
        incorrectAnswerResponse.classList.remove("hidden")
        console.log("flag is false")
    }

    userAnswer.value = ""
})

console.log(questionBank[questionAndAnswerIndex].answers.some((answer) => answer === userAnswer))
// .replace(/[&\/\\#,+()$~%.'":*?<>{}1234567890]/g, '')
