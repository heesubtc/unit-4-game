// make var random number generator for new game (19-120)
// make var random number generator for all crystals (1-12)
// function to restart game and reassign random number
// make if statement win-loss counter that updates when userscore = (newgame random number generator)
    // if newgame number = userscore,win else if userscore > computer#, lose 



// Math.floor(Math.random() * (max-min + 1) + min;
// random number for computer at refresh 19-120 and assign to var
var computerChoice = Math.floor(Math.random() * (120 - 19 + 1) + 19);
// generate random numbers 1-12 for each crystal and assign to var
var greenselect = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var redselect = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var purpleselect = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var whiteselect = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var winCount = 0;
var loseCount = 0;
var userTotalScore = 0;

// fucntion to generate new number
function newNumber() {
    computerChoice = Math.floor(Math.random() * (120 - 19 + 1) + 19);
}

// Function to reshuffle andom numbers for crystals.  Need 12 numbers.  Function to shuffle numbers
function shuffleCrystalValues(){
	greenselect = Math.floor(Math.random() * (12 - 1 + 1) + 1);
	redselect = Math.floor(Math.random() * (12 - 1 + 1) + 1);
	purpleselect = Math.floor(Math.random() * (12 - 1 + 1) + 1);
	whiteselect = Math.floor(Math.random() * (12 - 1 + 1) + 1);
}

// function to count wins and losses with if else
function gamePlay(){
	if (userTotalScore === computerChoice) {
		winCount++;
		$('#win-counter').text(winCount);
		$('#winloss').text('You win!');
		newNumber();
		$('#random-number').text(computerChoice);
		userTotalScore = 0;
		$('#current-score').text(userTotalScore);
		shuffleCrystalValues();
	} else if (userTotalScore > computerChoice) {
		loseCount++;
		$('#loss-counter').text(loseCount);
		$('#winloss').text('You lose!');
		newNumber();
		$('#random-number').text(computerChoice);
		userTotalScore = 0;
		$('#current-score').text(userTotalScore);
		shuffleCrystalValues();
	}
}

$('#random-number').text(computerChoice);

// when each crystal clicked update score on screen and run gamePlay function
$('#greencrystal').on('click', function() {
	userTotalScore = userTotalScore + greenselect;
	$('#current-score').text(userTotalScore);
	gamePlay();
});

$('#redcrystal').on('click', function() {
	userTotalScore = userTotalScore + redselect;
	$('#current-score').text(userTotalScore);
	gamePlay();
});

$('#purplecrystal').on('click', function() {
	userTotalScore = userTotalScore + purpleselect;
	$('#current-score').text(userTotalScore);
	gamePlay();
});

$('#whitecrystal').on('click', function() {
	userTotalScore = userTotalScore + whiteselect;
	$('#current-score').text(userTotalScore);
	gamePlay();
});
