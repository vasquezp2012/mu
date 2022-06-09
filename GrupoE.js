
var lienzo = document.getElementById("dibujito");
		if (dibujito && dibujito.getContext) {
		var contexto = dibujito.getContext("2d");
			if (contexto) {
					var X = lienzo.width/2;
					var Y = lienzo.height/2;
					var r = 75;
					contexto.strokeStyle = "#FC0101";
					contexto.fillStyle = "#FC0101";
					contexto.lineWidth = 5;
					contexto.arc(X,Y,r,0,2*Math.PI);
					contexto.fill();
					contexto.stroke();
			}
		}

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var linea3 = 680;
var linea4 = 1000;
var linea5 = 160;
var l = 0;
var A = 0;
var B = 0;
var yi, xf;

while(A< linea3){
	
	dibujarLinea("Red", A, 0, A, 100);
	dibujarLinea("yellow", A, 101, A, 250);
	dibujarLinea("Red", A, 251, A, 349);
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
var linea4 = 1000;
var linea5 = 160;
var l = 0;
var A = 701;
var B = 0;
var yi, xf;

while(A< linea3){
	
	dibujarLinea("black", A, 0, A, 116.66);
	dibujarLinea("yellow", A, 117, A, 233.32);
	dibujarLinea("red", A, 234, A, 350);
    dibujarLinea("black", A, 0, A, 116.66);
	dibujarLinea("yellow", A, 117, A, 233.32);
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
 var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var linea3 = 680;
var linea4 = 1000;
var linea5 = 160;
var l = 0;
var A = 0;
var B = 0;
var yi, xf;

while(A< linea3){
	
	dibujarLinea("blue", A, 355, A, 405);
	dibujarLinea("white", A, 406, A, 455);
	dibujarLinea("red", A, 456, A, 555);
	dibujarLinea("white", A, 556, A, 605);
	dibujarLinea("blue", A, 606, A, 655);

	
	A = A + 1;
}




 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){



 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();}



