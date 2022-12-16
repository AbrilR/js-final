let answers = [
    "It is certain.", 
    "It is decidedly so.", 
    "Without a doubt.", 
    "Yes, definitely.", 
    "You may rely on it.", 
    "As I see it, yes.", 
    "Most likely.", 
    "Outlook good.", 
    "Yes.", 
    "Signs point to yes.", 
    "Reply hazy, try again.", 
    "Ask again later.", 
    "Better not tell you now.", 
    "Cannot predict now.", 
    "Concentrate and ask again.", 
    "Don't count on it.", 
    "My reply is no.", 
    "My sources say no.", 
    "Outlook not so good.", 
    "Very doubtful."
];

const clicker = document.getElementsByClassName('button');
const response = document.getElementById('answer');
const askQuestion = document.getElementsByClassName('askQuestion');
const questions = document.getElementById('question');


clicker[0].addEventListener("click", askButton);

function askButton() {
    let results = Math.floor(answers.length * Math.random());
    let answer = answers[results];
    document.getElementById("8ball").src = "img/GreenHands8BallResult.png";
    // alert(answer); 
    response.innerHTML = answer;
    console.log(questions.value);
    questions.value = "";
}