




var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var linea3 = 680;
var linea4 = 350;
var linea5 = 350;
var l = 380;
var A = 0;
var B = 0;
var yi, xf;


while(A< linea3)
{
   	
	dibujarLinea("green", A, 0, A, 350);
	
	
	A = A + 1;
}


while(B < linea5){
	
	
	
	dibujarLinea("yellow", 350, B, 670, 170 );
     dibujarLinea("yellow", 350, B, 0, 170 );

	
	B = B + 1;
}




 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}


var lienzo = document.getElementById("dibujito");
if (dibujito && dibujito.getContext) {
var contexto = dibujito.getContext("2d");
if (contexto) {
var X = lienzo.width/2;
var Y = lienzo.height/2;
var r = 125;
			
					contexto.fillStyle = "blue";
					
					contexto.arc(350,175,r,0,2*Math.PI);
					contexto.fill();
					contexto.stroke();		
			}
		}


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
	dibujarLinea("blue", A, 117, A, 233.32);
	dibujarLinea("white", A, 234, A, 350);
	dibujarLinea("red", A, 0, A, 116.66);
	dibujarLinea("blue", A, 117, A, 233.32);
	dibujarLinea("white", A, 234, A, 350);
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
var linea3 = 500;
var linea4 = 680;
var linea5 = 680;
var l = 380;
var A = 380;
var B = 550;
var yi, xf;


	while(B < linea5){
	
	
	
	dibujarLinea("Red", 0, B, 315, B);
	dibujarLinea("Red", 360, B, 680, B);

	
	B = B + 1;
}

	while(A < linea3){
	
	
	
	dibujarLinea("Red", 0, A, 315, A);
	dibujarLinea("Red", 360, A, 680, A);

	
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
var linea3 = 1400;
var linea4 = 680;
var linea5 = 350;
var l = 350;
var A = 700;
var B = 0;
var yi, xf;


	
	while(l < linea4){
	
	
	dibujarLinea("green", 700, l, 933.33, l);
	dibujarLinea("Red", 934, l, 1166.66, l);
	dibujarLinea("yellow", 1166.66, l, 1400, l);
	
	l = l + 1;
}







 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}