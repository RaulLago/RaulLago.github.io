var elem1;
var elem2;
var num1;
var num2;
var aux = false;
var operando = false;
var aciertos = 0;

var letras = ["A", "B", "C", "D", "E", "F", "G", "H", "A", "B", "C", "D", "E", "F", "G", "H"];

window.onload = function(){
	uno = document.getElementById("uno");
	dos = document.getElementById("dos");
	tres = document.getElementById("tres");
	cuatro = document.getElementById("cuatro");
	cinco = document.getElementById("cinco");
	seis = document.getElementById("seis");
	siete = document.getElementById("siete");
	ocho = document.getElementById("ocho");
	nueve = document.getElementById("nueve");
	diez = document.getElementById("diez");
	once = document.getElementById("once");
	doce = document.getElementById("doce");
	trece = document.getElementById("trece");
	catorce = document.getElementById("catorce");
	quince = document.getElementById("quince");
	dieciseis = document.getElementById("dieciseis");
	
	tarjetas = [uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince, dieciseis];
	tarjetasVal = [];
	Inicializar();
}

function Inicializar(){
	var al;
	
	for(var i=0; i<16; i++){
		al = Math.floor(Math.random() * (15 - i));
		tarjetasVal.push(letras[al]);
		letras.splice(al, 1);
		
		tarjetas[i].innerHTML = "<span>" + tarjetasVal[i] + "</span>";
	}
}

function PulsarTarjeta(elemento, num){
	if(operando == false){
		if(aux == false && elemento.style.backgroundColor != "white"){
			elem1 = elemento;
			num1 = num;
			elemento.style.backgroundColor = "white";
			aux = true;
		}
		else if(elemento != elem1 && elemento.style.backgroundColor != "white"){
			elem2 = elemento;
			num2 = num;
			elemento.style.backgroundColor = "white";
			aux = false;
			operando = true;
			setTimeout(ComprobarPareja, 1000);
		}
	}
}

function ComprobarPareja(e1, e2, n1, n2){
	if(tarjetasVal[num1] == tarjetasVal[num2]){
		aciertos++;
		if(aciertos == 8){
			alert("Has ganado");
		}
	}
	else{
		elem1.style.backgroundColor = "rgb(25, 158, 218)";
		elem2.style.backgroundColor = "rgb(25, 158, 218)";
	}
	operando = false;
}