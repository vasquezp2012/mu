//Qatar
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var linea3 = 140;
var linea4 = 350;
var linea5 = 50;
var linea2 = 235;
var linea6 = 320;
var linea7 = 350;
var l = 0;
var A = 50;
var B = -200;
var C =140;
var H = 235;
var Z = 320;
var yi, xf;

while(l < linea4){
	
	
	dibujarLinea("white", 0, l, 229, l);
dibujarLinea("#990033", 230, l, 461, l);
dibujarLinea("#990033", 461.1, l, 680, l);
	
	l = l + 1;

}

while(B < linea5){
	
	
	
	
     dibujarLinea("#990033", 230, B, 100, 0 );

	
	B = B + 1;
}
while(A < linea3){
	
	
	
	
     dibujarLinea("#990033", 230, A, 100, 100 );

	
	A = A + 1;
}
while(C < linea2){
	
	
	
	
     dibujarLinea("#990033", 230, C, 100, 200 );

	
	C = C + 1;
}
while(H < linea6){
	
	
	
	
     dibujarLinea("#990033", 230, H, 100, 280 );

	
	H = H + 1;
}
while(Z < linea7){
	
	
	
	
     dibujarLinea("#990033", 230, Z, 100, 350 );

	
	Z = Z + 1;
}




 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}

//Ecuadro
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
	
	
	dibujarLinea("yellow", A, 0, A, 116.66);
	dibujarLinea("blue", A, 117, A, 233.32);
	dibujarLinea("red", A, 234, A, 350);
	dibujarLinea("yellow", A, 0, A, 116.66);
	dibujarLinea("blue", A, 117, A, 233.32);
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


 //senegal


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
	
	
dibujarLinea("green", 0, l, 229, l);
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

 //Netherlands
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
	
	
	dibujarLinea("red", A, 365, A, 468.66);
	dibujarLinea("white", A, 469, A, 583.66);
	dibujarLinea("blue", A, 584, A, 700 );
	
	A = A + 1;
}




 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}


