//canada
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
	
	
dibujarLinea("Red", 0, l, 229, l);
dibujarLinea("#FFFFFF", 230, l, 461, l);
dibujarLinea("Red", 462, l, 680, l);
	
	l = l + 1;
}


 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}

//croatia
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
	dibujarLinea("white", A, 117, A, 233.32);
	dibujarLinea("blue", A, 234, A, 350);
	dibujarLinea("red", A, 0, A, 116.66);
	dibujarLinea("white", A, 117, A, 233.32);
	dibujarLinea("blue", A, 234, A, 350);
	A = A + 1;
}




 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}

//Belgium
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var linea3 = 650;
var linea4 = 700;
var linea5 = 350;
var l = 380;
var A = 0;
var B = 0;
var yi, xf;

while(l < linea4){
	
	
dibujarLinea("black", 0, l, 229, l);
dibujarLinea("yellow", 230, l, 461, l);
dibujarLinea("Red", 462, l, 680, l);
	
	l = l + 1;
}


 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}


//moroco
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var linea3 = 1400;
var linea4 = 1000;
var linea5 = 350;
var l = 0;
var A = 700;
var B = 0;
var yi, xf;

while(A< linea3){
	
	dibujarLinea("red", A, 400, A, 540);
	dibujarLinea("red", A, 540.5, A, 680);
	
	A = A + 1;
}





 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}