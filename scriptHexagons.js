// Jess Mear
// March 29 2016

// Graphics Experiements
// Rose Equations found on Wikipedia: https://en.wikipedia.org/wiki/Rose_%28mathematics%29

// Goals:
// More colors, even color changing as it goes
// make it stop when it's drawn once
// vary individual elements to create a variety of shapes. possibiliies, etc
// animate it being drawn
// add an interface to change the elements during runtime
// add "click to make a new one" functionality

// working version of rose

var my_canvas = document.getElementById('canvas');
var context = my_canvas.getContext("2d");
var canvasDimension = 600;
var theta = 0;
var x = 0;
var y = 0;

// changes the size of the rose
var amplitude = randomWholeNumber(canvasDimension/5, canvasDimension/2);

// max iterations of loop to run, hoping to use it to not run the for loop too many times
var maxLoop = 40000;

// changes the rose style
var kChoice = randomWholeNumber(0,1);
var n = randomWholeNumber(1,9);
var d = randomWholeNumber(1,9);
//From Wikipedia: If k is rational, then the curve is closed and has finite length. If k is irrational, then it is not closed and has infinite length.
if(kChoice) var k = Math.random(), maxLoop = 7000;
else var k = n/d, maxLoop=2000;

context.beginPath();

for (i=0; i< maxLoop; i++) {
	theta = 0.05*i;
	// changing the second theta changes the shape
	// theta +i, theta-i
	// both theta*i, or one * and one +or-
	// add d to one but no both creates ellipses (look like planet rings!)
	x = amplitude*Math.cos(k*theta)*Math.cos(theta)+canvasDimension/2;
	y = amplitude*Math.cos(k*theta)*Math.sin(theta)+canvasDimension/2;
	context.lineTo(x, y);
	context.font = "20px Arial";
	context.fillStyle = "white";
	//if(i==0) context.fillText("Start x: " + x + "       Start y: " + y,20,60);
	//if(i==0) var startX = x, startY = y;
	//if(i>0 && x === startX) i= maxLoop+1;
	
}

function randomWholeNumber(myMin, myMax) 
{
	myMax++;
	return Math.floor(Math.random()*(myMax-myMin)+myMin);
} 

function randomRGB(redMin, redMax, greenMin, greenMax, blueMin, blueMax, alphaMin, alphaMax) 
{
	if(redMin == undefined) redMin = 0;
	if(redMax == undefined) redMax = 255;
	if(greenMin == undefined) greenMin = 0;
	if(greenMax == undefined) greenMax = 255;
	if(blueMin == undefined) blueMin = 0;
	if(blueMax == undefined) blueMax = 255;
	if(alphaMin == undefined) alphaMin = 0;
	if(alphaMax == undefined) alphaMax = 1;
	var myAlpha = Math.random()*(alphaMax-alphaMin)+alphaMin;
	//var myAlpha = .9;
	return "rgba(" + randomWholeNumber(redMin, redMax) + "," + randomWholeNumber(greenMin, greenMax) + "," + randomWholeNumber(blueMin, blueMax) + "," + myAlpha + ")";
}
myAlpha = 1;
if(!kChoice) context.fillText("k is found by dividing " + n + "/" + d ,20,30);
else context.fillText("k is a random number between 0 and 1" ,20,30)
context.fillText("k: " + k ,20,60);

//context.fillText("myVar " + myVar ,20,540)
//context.fillText("n/d " + n + "/" + d ,20,570)
//context.fillText("RandomNum: " + myVar ,20,60);
//context.fillText("x: " + x + "       y: " + y,20,90);

context.strokeStyle = randomRGB(100, 255, 100, 255, 100, 255, 0.8, 1);//"rgba(" + myRed + "," + myGreen + "," + myBlue + "," + myAlpha + ")";
context.stroke();
context.endPath();
