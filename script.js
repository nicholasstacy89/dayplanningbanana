
var choice = []
var answers;
var questions = [
	{
        question: "The condition of an if/else statement is enclosed within ____?",
        answers: {
            a: 'commas',
            b: 'curly brackets',
            c: 'parentheses'
            d: 'square brackets'
        },
        correctAnswer: 'b'
     },
    {
        question: "Commonly used data types do not include:",
        answers: {
            a: 'strings',
            b: 'booleans',
            c: 'alerts',
            d: 'numbers'
        },
        correctAnswer: 'c'
    },
    {
        question: "Arrays in JavaScript can be stored in"
        answers: {
            a: 'square brackets'
            b: 'other arrays'
            c: 'booleans'
            d: 'all the above'
        }
        correctAnswer: 'a'
	}
];

var timerE1 = document.getElementById('#timer')

function timer(){
	var timeLeft = 30;
	var timerInterval = setInterval(function () {
		if (timeLeft > 1) {
			timerE1.textContent = timeLeft + ' time remaining!!!!~feel the pressure~';
			timeLeft--;
		}
		else {
			timerE1.textContent = '';
			clearInterval(timerInterval);
			alert('You have Failed!');
		}
	}, 1000);
}

timer ();
init();