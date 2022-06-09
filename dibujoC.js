//Argentina
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
	
	
	dibujarLinea("#9BC7FA", A, 0, A, 116.66);
	dibujarLinea("white", A, 117, A, 233.32);
	dibujarLinea("#9BC7FA", A, 234, A, 350);
	dibujarLinea("#9BC7FA", A, 0, A, 116.66);
	dibujarLinea("white", A, 117, A, 233.32);
	dibujarLinea("#9BC7FA", A, 234, A, 350);
	A = A + 1;
}




 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}



//Arabia
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var linea1 = 350;
var linea2 = 1000;
var l = 0;
var yi, xf;

while(l < linea1)
{
	dibujarLinea("green", 0, l, 200, l);
	dibujarLinea("green", 200, l, 400, l);
	dibujarLinea("green", 400, l, 600, l);
	l = l +1;
}

function dibujarLinea(color,xInicial,yInicial,xFinal,yFinal)
{

	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xInicial,yInicial);
	lienzo.lineTo(xFinal,yFinal);
	lienzo.stroke();
	lienzo.closePath();

}




//Mexico
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
	dibujarLinea("green", 0, B, 200, B);
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


//Polanda
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
	
	dibujarLinea("white", A, 400, A, 540);
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