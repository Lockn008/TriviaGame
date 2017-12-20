//declare variables for use later on(questions, what questions have been used, correct responses, incorrect responses)
var questionBank = [0, 
	{
		question: "What country has the largest Muslim population in the world?",
		options: {
			choice1: "China",
			choice2: "Indonesia",
			choice3: "Saudi Arabia",
			choice4: "Egypt"},
		correctAns: "choice2",
		reason: "With over 225 million muslims the population of muslims in Indonesia surpasses the total population of Eqypt (95 mil) or Saudi Arabia (32 mil).",
		ansImg: "assets/images/IndonesiaReligion.jpg"
	},
	{
		question: "What body of water does the Colorado River flow directly into?",
		options: {
			choice1: "Gulf of California",
			choice2: "Pacific Ocean",
			choice3: "Gulf of Mexico",
			choice4: "Gulf of Colorado"},
		correctAns: "choice1",
		reason: "The Colorado River flows southwest from Colorado, through Utah, Arizona, and Mexico, into the Gulf of California.",
		ansImg: "assets/images/ColoradoRiver.jpg"
	},
	{
		question: "Which of the following was NOT part of the former country of Yugoslavia?",
		options: {
			choice1: "Serbia",
			choice2: "Croatia",
			choice3: "Slovenia",
			choice4: "Albania"},
		correctAns: "choice4",
		reason: "Yugoslavia broke apart into Serbia, Croatia, Slovenia, Macedonia, Bosnia and Herzegovina, and Montenegro between 1991 and 2006.  Albania was never a part (although was also a socialist dictatorship).",
		ansImg: "assets/images/Yugoslavia.png"
	}, 
	{
		question: "Which of the following cities is furthest north?",
		options: {
			choice1: "Edmonton, Canada",
			choice2: "Moscow, Russia",
			choice3: "Edinburgh, UK",
			choice4: "Copenhagen, Denmark"},
		correctAns: "choice3",
		reason: "Edinburgh is the farthest north, at 55.95 N.  Moscow, at 55.75 N, and Copenhagen, at 55.68 N are close, but Edmonton is further south, at only 53.54 N.",
		ansImg: "assets/images/EdinburghLatitude"
	}];

var questionsAsked;
var correct;
var incorrect;
var questionIndex;
var timeRemaining;

var initializeGame = function () {
	correct = 0;
	incorrect = 0;
	questionsAsked = [0];
}

var selectQuestion = function () {
	questionIndex = Math.floor(Math.random() * questionBank.length); //select random number
	console.log(questionIndex);
	var checkRepeat = false; //set 
	for (var k = 0; k < questionsAsked.length; k++) { //start for loop, if random number matches number
		if (questionIndex == questionsAsked[k]) {
			checkRepeat = true;
			break;
		}
	}
	if (checkRepeat == true) {
		selectQuestion();
	} else {
		questionsAsked.push(questionIndex);
	}
}

var startDisplay = function () {
	var display = $('.game-body');
	var startButton = $("<div>");
	startButton.addClass("start-button");
	startButton.text("Start");
	display.append(startButton);
}

console.log(questionBank[1].options.choice1);
//console.log(questionBank[1].options.(questionBank[1].correctAns));//this ain't working for some reason
var questionDisplay = function (indexNum) {
	var display = $('.game-body');
	var questionText = $("<div>");
	questionText.addClass("question-text");
	questionText.text(questionBank[indexNum].question);
	var option1 = $("<div>");
	option1.addClass("option");
	option1.attr("value", "choice1");
	option1.text(questionBank[indexNum].options.choice1);
	var option2 = $("<div>");
	option2.addClass("option");
	option2.attr("value", "choice2");
	option2.text(questionBank[indexNum].options.choice2);
	var option3 = $("<div>");
	option3.addClass("option");
	option3.attr("value", "choice3");
	option3.text(questionBank[indexNum].options.choice3);
	var option4 = $("<div>");
	option4.addClass("option");
	option4.attr("value", "choice4");
	option4.text(questionBank[indexNum].options.choice4);
	display.append(questionText);
	display.append(option1);
	display.append(option2);
	display.append(option3);
	display.append(option4);

	$('.option').on("click", ".option", value, 
		if (value == questionBank[indexNum].correctAns) {
			break timer:question;
			correct++;
		} else {
			break timer:question;
			incorrect++;
		}
	)

	timer.question(30);
}


var answerDisplay = function (indexNum) {
	var display = $('.game-body');
	var answerText = $("<div>");
	answerText.addClass("answer-text");
	answerText.text("Correct Answer: "/*+questionBank[indexNum].options.(questionBank[indexNum].correctAns)*/);  //therefore this aint working for some reason
	var reasonText = $("<div>");
	reasonText.addClass("reason-text");
	reasonText.text(questionBank[indexNum].reason);
	var answerImg = $("<img>");
	answerImg.addClass("answer-image");
	answerImg.attr("src", questionBank[indexNum].ansImg);
	display.append(answerText);
	display.append(reasonText);
	display.append(answerImg);

	timer.answer(5);
}

var endDisplay = function () {
	var display = $('.game-body');
	var score = $("<div>");
	score.addClass("score-board");
	var showScore = $("<div>");
	showScore.addClass("show-score");
	showScore.text("Here is how you did:");
	var showCorrect = $("<div>");
	showCorrect.addClass("score-box");
	showCorrect.text("Correct: ");
	var showIncorrect = $("<div>");
	showIncorrect.addClass("score-box");
	showIncorrect.text("Incorrect: ");
	var showUnanswered = $("<div>");
	showUnanswered.addClass("score-box");
	showUnanswered.text("Unanswered: ");
	var restart = $("<div>");
	restart.addClass("start-button");
	restart.text("Start Over?");
	score.append(showScore);
	score.append(showCorrect);
	score.append(showIncorrect);
	score.append(showUnanswered);
	display.append(score);
	display.append(restart);
}

var timer = {
	question: function (seconds) {
		for (var i = seconds; seconds > 0; seconds--) {
			(function() {break questionDisplay;}, 1000);
		}
	},
	answer: function (seconds) {
		for (var i = seconds; seconds > 0; seconds--) {
			(function() {break questionDisplay;}, 1000);
		}
	}
}

// var timer = function(seconds) {
// 	for (var i = seconds; seconds > 0; seconds--) {
// 		(function() {break questionDisplay;}, 1000);
// 	}
// }

var runGame = function () {
	initializeGame();
	while(questionsAsked.length < 5) {
		selectQuestion();
		questionDisplay(questionIndex);
		answerDisplay(questionIndex);
	}
	endDisplay();
}

startDisplay();
$('.start-button').on("click", runGame());

