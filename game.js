var question1 = prompt("Is Seattle a great music town?");
if (question1.toUpperCase() === "YES") {
	alert("Correct!  You rock.");
} else {
	alert("Incorrect. Seattle music rocks.");
}

var question2 = prompt("Is Kurt Cobain dead?");
if (question2.toUpperCase() === "YES") {
	alert("Correct. Dead as a doornail.");
} else {
	alert("Maybe not in spirit, but he is definitely in body!");
}

var question3 = prompt("Does Eddie Vedder love flannel?");
if (question3.toUpperCase() === "YES") {
	alert("Yes. So comfortable.");
} else {
	alert("Incorrect.  Flannel is mandatory in Seattle.")
}

console.log('Question 1 response: ' + question1);
console.log('Question 2 response: ' + question2);
console.log('Question 3 response: ' + question3);