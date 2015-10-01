var correctAnswers = 0;

var userName = prompt('Please enter your name.');
alert('Welcome ' + userName + ', let\'s play a game!');

function ques1 () {
var question1 = prompt('Is Seattle a great music town?');
	if (question1.toUpperCase() === 'YES' || question1.toUpperCase() === 'Y') {
		alert('Correct!  You rock.');
		correctAnswers ++;
	} else {
		alert('Incorrect. Seattle music rocks.');
	}
}

function ques2 () {
	var question2 = prompt('Is Kurt Cobain dead?');
	if (question2.toUpperCase() === 'YES' || question2.toUpperCase() === "Y") {
		alert('Correct. Dead as a doornail.');
		correctAnswers ++;
	} else {
		alert('Maybe not in spirit, but he is definitely in body!');
	}
}

function ques3 () {
	var question3 = prompt('Does Eddie Vedder love flannel?');
	if (question3.toUpperCase() === 'YES' || question3.toUpperCase() === "Y") {
		alert('Yes. So comfortable.');
		correctAnswers ++;
	} else {
		alert('Incorrect.  Flannel is mandatory in Seattle.');
	}
}

ques1();
ques2();
ques3();

alert('You got ' + correctAnswers + ' out of 3 answers correct, ' + userName + ', thanks for playing!');

console.log('Question 1 response: ' + question1);
console.log('Question 2 response: ' + question2);
console.log('Question 3 response: ' + question3);