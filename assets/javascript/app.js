$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 15,
		reset: function() {
			this.time = 15;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'Who started the Institute for mutants and has the ability to read minds?',
	possibleAnswers : ['A. Professor Xavier',
				 'B. Colossus',
				 'C. Lockheed',
				 'D. Gambit'],
	flags : [true, false, false, false],
	answer : 'A. Professor Xavier'
};

var q2 = {
	question: 'Which of these X-Men DOES NOT have blue skin or fur?',
	possibleAnswers: ['A. Mystique',
				 'B. Nightcrawler',
				 'C. Beast',
				 'D. Jubilee'],
	flags : [false, false, false,true,],
	answer : 'D. Jubilee'
};

var q3 = {
	question : 'What color was the first shot fired by the very first sentinel?',
	possibleAnswers : ['A. Red',
				 'B. Blue',
				 'C. Yellow',
				 'D. Purple'],
	flags : [false, true, false, false],
	answer : 'B. Blue'
};

var q4 = {
	question : 'Gambit uses cards to display his power. What kind of energy does he charge them up with?',
	possibleAnswers : ['A. Kinetic',
				 'B. Nuclear',
				 'C. Solar',
				 'D. Radiant'],
	flags : [true, false, false, false],
	answer : 'A. Kinetic'
};

var q5 = {
	question : 'I am a kind hearted, handicapped man who helps mutants to face the world.?',
	possibleAnswers : ['A. Magneto',
				 'B. Professor Xavier',
				 'C. Cyclops',
				 'D. Jean'],
	flags : [false, true, false, false],
	answer : 'B. Professor Xavier'
};

var q6 = {
	question : 'In what country was Magneto born?',
	possibleAnswers : ['A. Poland',
				 'B. Russia',
				 'C. Germany',
				 'D. France'],
	flags : [true, false, false, false],
	answer : 'A. Poland'
};

var q7 = {
	question : 'Who is the teenage leader of the team and uses optic blasts?',
	possibleAnswers : ['A. Logan',
				 'B. Jean Grey',
				 'C. Scott Summers',
				 'D. Storm'],
	flags : [false, false, true, false],
	answer : 'C. Scott Summers'
};

var q8 = {
	question : 'What is Magneto mutant power?',
	possibleAnswers : ['A. Teleporting',
				 'B. Control of magnetism',
				 'C. Portal Creation',
				 'D. shape-shifting'],
	flags : [false, true, false, false],
	answer : 'B. Control of magnetism'
};


var q9 = {
	question : 'Who has the ability to absorb peoples memories?',
	possibleAnswers : ['A. Storm',
				 'B. Phoenix Force',
				 'C. Aurora',
				 'D. Rogue'],
	flags : [false, false, false, true],
	answer : 'D. Rogue'
};

var q10 = {
	question : 'What is Mystiques power?',
	possibleAnswers : ['A. optic blasts',
				  'B. shape-shifting',
				  'C. telepath',
				  'D. healing'],
	flags : [false, true, false, false],
	answer : 'B. shape-shifting'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});

});