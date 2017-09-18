var tileImages = [];
var startButton = document.getElementById('start');
var gamePlay = false;
var gameBoard = document.getElementById('gameboard');
var cardFlipped = -1;
startButton.addEventListener('click', startGame);


function startGame(){
	startButton.style.display = 'none';
	if (!gamePlay) {
		gamePlay = true;
		buildArray();
		tileArray = tileImages.concat(tileImages);
		shuffleArray(tileArray);
		buildBoard();
		console.log(tileArray);
	}
	console.log('started');
}

function buildBoard() {
	var html = "";
	for (var x = 0; x <= (tileArray.length - 1); x++) {
		html += '<div class="gameTile"><div class="gameTile">';
		html += '<img id="cardz' + x + '" src="images/back.jpg" onclick="pickCard(' + x + ',this)" class=flipImage></div></div>';
	}
	gameBoard.innerHTML = html;
}

function pickCard(tileIndex, t) {
	console.log(tileIndex);
	console.log(cardFlipped);
	console.log(this);
	if (cardFlipped >= 0) {
		if (tileIndex != cardFlipped) {
			t.src = "images/" + tileArray[tileIndex];
			var secondCard = tileIndex;
		}
		console.log('second', cardFlipped);
	}else{
		cardFlipped = tileIndex;
		t.src = "images/" + tileArray[tileIndex];
		console.log('first', cardFlipped);
	}
}

function buildArray() {
	for (var x = 1; x < 7; x++) {
		tileImages.push( x+'.jpg');
	}
}

function shuffleArray(array){
	for (var x = array.length -1; x > 0; x--) {
		var holder = Math.floor(Math.random() * (x+1));
		var itemValue = array[x];
		array[x] = array[holder];
		array[holder] = itemValue;
		console.log(holder);
	}
	return array;
}