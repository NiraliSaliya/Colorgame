var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var massageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector ("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
hardBtn.classList.remove ("selected");
easyBtn.classList.add ("selected");
numSquares =3;
colors = generateRandomColors(numSquares);
pickedColor = pickcolor();
colordisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
	if(colors[i]){
		squares [i].style.background = colors[i];
	}else{
		squares[i].style.display = "none";
	}
   }
});

hardBtn.addEventListener("click", function(){
hardBtn.classList.add ("selected");
easyBtn.classList.remove ("selected");
numSquares =6;
colors = generateRandomColors(numSquares);
pickedColor = pickcolor();
colordisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
		squares [i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	colors= generateRandomColors(numSquares);
	pickedColor = pickcolor();
	colordisplay.textContent = pickedColor;
this.textContent = "New Colors"

	massageDisplay.textContent="";
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = colors [i];
	}
	h1.style.background = "steelblue";
})

colordisplay.textContent = pickedColor;

for (var i= 0; i < squares.length; i++){
	//add intial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add ckick listeners to squares
	squares[i].addEventListener("click", function(){
//grab color of clicked square
var clickedColor = this.style.backgroundColor;
//compare color to pickedcolor
console.log(clickedColor, pickedColor);


if (clickedColor === pickedColor){
	massageDisplay.textContent = "Correct!!"
	resetButton.textContent = "play again?"
	changeColors(clickedColor);
h1.style.background = clickedColor;

} else {
	this.style.backgroundColor = "#232323";
	massageDisplay.textContent = "Try Again!"
}
	});
}

function changeColors(color){
	for(var i = 0; i< colors.length; i++){
		squares[i].style.background = color;
	}
}
function pickcolor(){
	var random = Math.floor (Math.random() * colors.length);
	return colors [random];
}
function generateRandomColors(num){
	//make an array
	var arr =[]
	//add num random colors to array
	for(var i = 0; i< num; i++){
		arr.push(randomColor())
	}
	//return array
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256)

	var g = Math.floor(Math.random() * 256)

	var b = Math.floor(Math.random() * 256)
	"rgb(r, g, b)"
	return"rgb(" + r + ", " + g + ", " + b + ")";
}