//declare variables for use later on(questions, what questions have been used, correct responses, incorrect responses)
var questionBank = [0, 
	{
		question: "What country has the largest Muslim population in the world?",
		options: {
			1: "China",
			2: "Indonesia",
			3: "Saudi Arabia",
			4: "Egypt"},
		correctAns: 2
	},
	{
		question: "What body of water does the Colorado River flow directly into?",
		options: {
			1: "Gulf of California",
			2: "Pacific Ocean",
			3: "Gulf of Mexico",
			4: "Gulf of Colorado"},
		correctAns: 1
	},
	{
		question: "Which of the following was NOT part of the former country of Yugoslavia?",
		options: {
			1: "Serbia",
			2: "Croatia",
			3: "Slovenia",
			4: "Albania"},
		correctAns: 4
	}, 
	{
		question: "Which of the following cities is furthest north?",
		options: {
			1: "Edmonton, Canada",
			2: "Moscow, Russia",
			3: "Edinburgh, UK",
			4: "Copenhagen, Denmark"},
		correctAns: 3
	}];

var questionsAsked;
var correct;
var incorrect;
var questionIndex;

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

// initializeGame();
// selectQuestion();

var startDisplay = function () {
	var display = $('.game-body');
	var startButton = $("<div>");
	startButton.addClass("start-button");
	startButton.text("Start");
	display.append(startButton);
}

var questionDisplay = function (indexNum) {  //error, will not display, IDK why
	var display = $('.game-body');
	var questionText = $("<div>");
	questionText.addClass("question-text");
	questionText.text(questionBank[indexNum].question);
	var option1 = $("<div>");
	option1.addClass("option");
	option1.attr("value", 1);
	option1.text(questionBank[indexNum].options.1);
	var option2 = $("<div>");
	option2.addClass("option");
	option2.attr("value", 2);
	option2.text(questionBank[indexNum].options.2);
	var option3 = $("<div>");
	option3.addClass("option");
	option3.attr("value", 3);
	option3.text(questionBank[indexNum].options.3);
	var option4 = $("<div>");
	option4.addClass("option");
	option4.attr("value", 4);
	option4.text(questionBank[indexNum].options.4);
	display.append(questionText);
	display.append(option1);
	display.append(option2);
	display.append(option3);
	display.append(option4);
}

questionDisplay(1);

console.log(questionsAsked);

var runGame = function () {
}
