var correctAnswers = 0;
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var userName = prompt('Please enter your name.');
alert('Welcome ' + userName + ', let\'s play a game!');

var questions = ['Is Seattle a great music town?', 'Is Kurt Cobain dead?', 'Does Eddie Vedder love flannel?'];
var answers = ['YES', 'Y', 'NO', 'N'];

function ques1 () {
var question1 = prompt(questions[0]);
	if (question1.toUpperCase() === answers[0] || question1.toUpperCase() === answers[1]) {
		one.className = 'correct';
		one.innerHTML = 'Correct!  You rock.' + '<br /><img src="images/bumbershoot.jpg" height="200" width="200" />';
		correctAnswers ++;
	} else {
		one.className = 'incorrect';
		one.innerHTML = 'Incorrect. Seattle music rocks.';
	}
}

function ques2 () {
	var question2 = prompt(questions[1]);
	if (question2.toUpperCase() === answers[0] || question2.toUpperCase() === answers[1]) {
		two.className = 'correct';
		two.innerHTML = 'Correct. Dead as a doornail.' + '<br /><img src="images/kurtcobain.jpg" height="200" width="200" />';
		correctAnswers ++;
	} else {
		two.className = 'incorrect';
		two.innerHTML = 'Maybe not in spirit, but he is definitely in body!';
	}
}

function ques3 () {
	var question3 = prompt(questions[2]);
	if (question3.toUpperCase() === answers[0] || question3.toUpperCase() === answers[1]) {
		three.className = 'correct';
		three.innerHTML = 'Yes. So comfortable.' + '<br /><img src="images/flannel.jpg" height="200" width="200" />';
		correctAnswers ++;
	} else {
		three.className = 'incorrect';
		three.innerHTML = 'Incorrect.  Flannel is mandatory in Seattle.';
	}
}

ques1();
ques2();
ques3();

alert('You got ' + correctAnswers + ' out of 3 answers correct, ' + userName + ', thanks for playing!');

console.log('Question 1 response: ' + question1);
console.log('Question 2 response: ' + question2);
console.log('Question 3 response: ' + question3);
