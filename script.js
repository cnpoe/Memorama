var tileImages = [];
var startButton = document.getElementById('start');
var gamePlay = false;
var gameBoard = document.getElementById('gameboard');

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
		html += '<div class="gameTile">';
		html += '<img id="cardz' + x + '" src="images/back.jpg" onclick="pickCard(' + x + ')" class=flipImage>';
	}
	gameBoard.innerHTML = html;
}

function buildArray() {
	for (var x = 0; x < 7; x++) {
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