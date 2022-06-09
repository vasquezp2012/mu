//Ingla
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
	
	
	dibujarLinea("Red", 315, l, 340, l);
	dibujarLinea("Red", 315, l, 340, l);
	dibujarLinea("Red", 315, l, 340, l);
	
	l = l + 1;
}
while(A< linea3){
	
	dibujarLinea("Red", A, 140, A, 165);
	dibujarLinea("Red", A, 140, A, 165);
	dibujarLinea("Red", A, 140, A, 165);
	
	A = A + 1;
}

dibujarLinea("black", 0, l, 650, l);
dibujarLinea("black", A, 0, A, 350)



 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}

//Iran
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
	
	
	dibujarLinea("green", A, 0, A, 116.66);
	dibujarLinea("white", A, 117, A, 233.32);
	dibujarLinea("red", A, 234, A, 350);
	dibujarLinea("green", A, 0, A, 116.66);
	dibujarLinea("white", A, 117, A, 233.32);
	dibujarLinea("red", A, 234, A, 350);
	A = A + 1;
}




 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}

//Bandera EU
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
	
	dibujarLinea("red", A, 400, A, 420);
	dibujarLinea("white", A, 420.5, A, 440);
	dibujarLinea("red", A, 440.5, A, 460);
	dibujarLinea("white", A, 460.5, A, 480);
	dibujarLinea("red", A, 480.5, A, 500);
	dibujarLinea("white", A, 500.5, A, 520);
	dibujarLinea("red", A, 520.5, A, 540);
	A = A + 1;
}
while(l< linea5){
	
	dibujarLinea("blue", 0, l, 250, l);
	dibujarLinea("blue", 0, l, 250, l);
	dibujarLinea("blue", 0, l, 250, l);
	
	l = l + 1;
}

while(B< linea3){
	
	dibujarLinea("white", B, 540, B, 560);
	dibujarLinea("red", B, 560.5, B, 580);
	dibujarLinea("white",B, 580.5, B, 600);
	dibujarLinea("red", B, 600.5, B, 620);
	dibujarLinea("white", B, 620.5, B, 640);
	dibujarLinea("red", B, 640.5, B, 660);
	B = B + 1;
}




 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}

//Bandera Ucrania
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
	
	dibujarLinea("blue", A, 400, A, 540);
	dibujarLinea("yellow", A, 540.5, A, 680);
	
	A = A + 1;
}





 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}

