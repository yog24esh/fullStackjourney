var numSquare = 6;
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); 
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1  = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");	

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquare = 3;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
})	;
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquare = 6
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
});
	
resetButton.addEventListener("click",function(){
	//new color + picknewRandomcolor from arrrary //choose color of quare
	colors = generateRandomColors(numSquare); 
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";


});

colorDisplay.textContent = pickedColor;
for(var i=0;i<squares.length;i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background ; 
		console.log(clickedColor+" "+pickedColor);

		if(clickedColor===pickedColor){
		 messageDisplay.textContent = "Correct";
		 changeColors(clickedColor);
		 h1.style.background = clickedColor ; 
		 resetButton.textContent = "Play Again";
		}
		else { 
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	
	})

}
function changeColors(color){
	//loop all square
	for(var i=0;i<squares.length;i++){
		squares[i].style.background = color;
	}
}
function pickColor(){
	//random no. (0,1]
	var random = Math.floor(Math.random() * colors.length ); 
	return colors[random];
}
function generateRandomColors(num){
	//make an array + add 6 or 3 random color to array + return array
	var arr = [];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
    //"rgb(r, g, b)"
   return  "rgb("+r+", "+g+", "+b+")"
}
