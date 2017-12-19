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



console.log(questionsAsked);

var runGame = function () {
}