var tileImages = [];
var tileArray = [];
var startButton = document.getElementById('start');
var gamePlay = false;
var timer = '';
var playLockout = false;
var gameBoard = document.getElementById('gameboard');
var cardFlipped = -1;
var tileFlippedOver = [];
var message = document.getElementById("message");

startButton.addEventListener('click', startGame);

function gameOver(){
	startButton.style.display = 'block';
	message.innerHTML = "Click to start new game";
	gamePlay = false;
	tileArray = [];
	tileFlippedOver = [];
}

function startGame(){
	cardFlipped = -1;
	playLockout = false;
	startButton.style.display = 'none';
	if (!gamePlay) {
		gamePlay = true;
		buildArray();
		tileArray = tileImages.concat(tileImages);
		shuffleArray(tileArray);
		buildBoard();
		message.innerHTML = "Click any tile";
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
	console.log(tileFlippedOver);
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
	playLockout = false;
	cardFlipped = -1;
	message.innerHTML = "Click any tile";
}

function checkSrc(v){
	var v = document.getElementById(v).src;
	return v;
}

function pickCard(tileIndex, t) {
	if(!isInArray(t.id, tileFlippedOver) && !playLockout ){
		console.log("in array");
		message.innerHTML = "Check for a match";
		if (cardFlipped >= 0) {
			cardFlip(t, tileIndex);
			var secondCard = tileIndex;
			playLockout = true;
			if ( checkSrc(tileFlippedOver[tileFlippedOver.length-1]) == checkSrc(tileFlippedOver[tileFlippedOver.length-2])) {
				//
				console.log("match");
				message.innerHTML = "Match found";
				playLockout = false;
				cardFlipped = -1;
				if (tileFlippedOver.length == tileArray.length ) {
					gameOver();
				}
			}else{
				//
				console.log("no match");
				message.innerHTML = "Match not found";
				timer = setInterval(hideCard,3000);
			}
		}else{
			cardFlipped = tileIndex;
			cardFlip(t, tileIndex);
		}
	}else{
		console.log("not in array");
		message.innerHTML = "Already clicked";
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