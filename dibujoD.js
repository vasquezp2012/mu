//Ingla
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var linea3 = 600;
var linea4 = 350;
var linea5 = 350;
var linea = 140;
var l = 173;
var A = 0;
var B = 0;
var C = 0;
var yi, xf;



while(C < linea){
	dibujarLinea("red", 0, C, 170, C);
	dibujarLinea("red", 200, C, 600, C);
	
	C = C + 1;
}

while(l < linea5){
	dibujarLinea("red", 0, l, 170, l);
	dibujarLinea("red", 200, l, 600, l);
	
	l = l + 1;
}



 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}

//Off 1
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
	
	
	dibujarLinea("blue", A, 0, A, 116.66);
	dibujarLinea("blue", A, 117, A, 233.32);
	dibujarLinea("blue", A, 234, A, 350);
	dibujarLinea("blue", A, 0, A, 116.66);
	dibujarLinea("blue", A, 117, A, 233.32);
	dibujarLinea("blue", A, 234, A, 350);
	A = A + 1;
}




 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();

}

//Francia
var lienzo = d.getContext("2d");
var linea3 = 650;
var linea4 = 680;
var linea5 = 680;
var l = 380;
var A = 250;
var B = 380;
var yi, xf;


while(B < linea5)
{
	dibujarLinea("blue", 0, B, 200, B);
	dibujarLinea("#FFFFFF", 200, B, 400, B);
	dibujarLinea("red", 400, B, 600, B);
	B = B +1;
}



 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}



//Tusinia
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