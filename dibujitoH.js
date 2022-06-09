
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var linea3 = 650;
var linea4 = 350;
var linea5 = 350;
var l = 0;
var A = 0;
var B = 0;
var yi, xf;

while(l < linea4){
	
	
	dibujarLinea("green", 0, l, 200, l);
    dibujarLinea("green", 0, l, 200, l);
	dibujarLinea("Red", 200, l, 650, l);
	dibujarLinea("Red", 200, l, 650, l);



	
	l = l + 1;
}




 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var linea3 = 1400;
var linea4 = 1000;
var linea5 = 160;
var l = 0;
var A = 700;
var B = 0;
var yi, xf;

while(A< linea3){
	
	
	dibujarLinea("red", A, 0, A, 116.66);
	dibujarLinea("yellow", A, 117, A, 233.32);
	dibujarLinea("green", A, 234, A, 350);
		dibujarLinea("red", A, 0, A, 116.66);
	dibujarLinea("yellow", A, 117, A, 233.32);
	dibujarLinea("green", A, 234, A, 350);
	
	A = A + 1;
}




 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}

 var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var linea3 = 650;
var linea4 = 1000;
var linea5 = 540;
var l = 400;
var A = 250;
var B = 0;
var yi, xf;

while(A< linea3){
	
	dibujarLinea("blue", A, 400, A, 435);
	dibujarLinea("white", A, 435.5, A, 470);
	dibujarLinea("blue", A, 470.5, A, 505);
	
	A = A + 1;
}
while(l< linea5){
	
	dibujarLinea("white", 0, l, 250, l);
	dibujarLinea("white", 0, l, 250, l);
	dibujarLinea("white", 0, l, 250, l);
	
	l = l + 1;
}

while(B< linea3){
	
	dibujarLinea("white", B, 505.5, B, 535);
	dibujarLinea("blue", B, 535.5, B, 570);
	dibujarLinea("white",B, 570.5, B, 605);
	dibujarLinea("blue", B, 605.5, B, 640);
	
	B = B + 1;
}




 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}


function circle(x,y,radius,color) {
        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.fill();        
}
 
function animate() {
        let x1=canvas.width/2+80*Math.sin(counter/Math.PI/4);
        let y1=canvas.height/2+80*Math.cos(counter/Math.PI/4);
        let x2=canvas.width/2+80*Math.sin(counter/Math.PI/4+Math.PI);
        let y2=canvas.height/2+80*Math.cos(counter/Math.PI/4+Math.PI);
 
        circle(x1,y1,80,'rgb(0,0,255)');
        circle(x2,y2,80, 'rgb(255,0,0)');
        
        counter++;
        window.requestAnimationFrame(animate);
}
 
let canvas = document.getElementById('dibujito');
let context = canvas.getContext('2d');
let counter=0;
window.requestAnimationFrame(animate);


 var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var linea3 = 650;
var linea4 = 1000;
var linea5 = 540;
var l = 400;
var A = 900;
var B = 0;
var yi, xf;

dibujarLinea("black", 840, 370, 740, 500);
dibujarLinea("black", 860, 380, 765, 510);
dibujarLinea("black", 880, 390, 790, 520);

dibujarLinea("black", 740, 570, 840, 700);
dibujarLinea("black", 770, 560, 860, 690);
dibujarLinea("black", 800, 550, 880, 680);

dibujarLinea("black", 1160, 380, 1260, 500);
dibujarLinea("black", 1180, 375, 1290, 493);
dibujarLinea("black", 1200, 370, 1320, 485);

dibujarLinea("black", 1260, 570, 1160, 680);
dibujarLinea("black", 1290, 580, 1180, 690);
dibujarLinea("black", 1320, 590, 1200, 700);






 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.lineWidth = 10;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}