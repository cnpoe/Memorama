var tileImages = [];
var tileArray = [];
var startButton = document.getElementById('start');
var gamePlay = false;
var timer = '';
var gameBoard = document.getElementById('gameboard');
var cardFlipped = -1;
var tileFlippedOver = [];

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

function isInArray(v, array){
	return array.indexOf(v) > -1;
}


function cardFlip(t, tileIndex){
	t.src = "images/" + tileArray[tileIndex];
	tileFlippedOver.push(t.id);
}

function hideCard(tileIndex, id){
	for(var x = 0; x < 2; x++){
		var vid = tileFlippedOver.pop();
		document.getElementById(vid).src = "images/back.jpg";
		console.log(vid);
	}
	clearInterval(timer);
}

function pickCard(tileIndex, t) {
	if(!isInArray(t.id, tileFlippedOver)){
		console.log("in array");
		if (cardFlipped >= 0) {
			cardFlip(t, tileIndex);
			var secondCard = tileIndex;
			if (tileFlippedOver[tileFlippedOver.length-1] == tileFlippedOver[tileFlippedOver.length-2]) {
				//
				console.log("match");
			}else{
				//
				console.log("no match");
				timer = setInterval(hideCard,3000);
			}
		}else{
			cardFlipped = tileIndex;
			cardFlip(t, tileIndex);
		}
	}else{
		console.log("not in array");
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