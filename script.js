var tileImages = [];
var startButton = document.getElementById('start');

startButton.addEventListener('click', startGame);


function startGame(){
	startButton.style.display = 'none';
	if (!gamePlay) {
		gamePlay = true;
		buildArray();
		titleArray = titleImages.concat(titleImages);
		shuffleArray(titleArray);
		console.log(titleArray);
	}
	console.log('started');
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