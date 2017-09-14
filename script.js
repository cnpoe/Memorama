var tileImages = [];
var startButton = document.getElementById('start');

startButton.addEventListener('click', startGame);

for (var x = 0; x < 7; x++) {
	tileImages.push( x+'.jpg');
}


function startGame(){
	startButton.style.display = 'none';
	console.log('started');
}