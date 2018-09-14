//Reto 1
function arruinarImagen(idTag, idImg)
{
	var boton = document.createElement('input');
	boton.type = 'button';
	boton.id = 'btnArruinar';
	boton.value = 'Arruinar';
 
	document.getElementById(idTag).appendChild(boton);
	
	boton.addEventListener("click", function(){
		document.getElementById(idImg).src = "./arruinarPW/curanderoArruinado.png";
	});
}
//Reto 2
function arruinarPW()
{
	var boton = document.createElement('input');
	boton.type = 'button';
	boton.id = 'btnArruinar';
	boton.value = 'Arruinar';
 
	document.getElementById("principal").appendChild(boton);
	
	boton.addEventListener("click", function(){
		//document.body.style.backgroundColor='pink';
		//document.getElementById("principal").style.background='pink';
		
		document.getElementById("principal").classList.toggle('rosa');
		document.getElementById("edinson").classList.toggle('rosa');
		document.getElementById("luisa").classList.toggle('rosa');
		document.getElementById("carlos").classList.toggle('rosa');
		document.getElementById("sandra").classList.toggle('rosa');
		document.getElementById("karen").classList.toggle('rosa');
		document.getElementById("sugerencia").classList.toggle('rosa');
		
		document.getElementById("logo").src = "./arruinarPW/unicornio.jpg";
		document.getElementById("frame").src = "./arruinarPW/unicornio.jpg";
		document.getElementById("imgE").src = "./arruinarPW/unicornio.jpg";
		document.getElementById("imgL").src = "./arruinarPW/unicornio.jpg";
		document.getElementById("imgC").src = "./arruinarPW/unicornio.jpg";
		document.getElementById("imgS").src = "./arruinarPW/unicornio.jpg";
		document.getElementById("imgK").src = "./arruinarPW/unicornio.jpg";
	});
}
//Reto 3
function eventoImagen(idImg) {
	document.getElementById(idImg).onmouseover = function() {
		document.getElementById(idImg).src = "./arruinarPW/curanderoCuernos.png";
	}
	document.getElementById(idImg).onmouseout = function() {
		document.getElementById(idImg).src = "./pagina/curandero.png";
	}
}
//Reto 4
function eventoSonido(idImg) {
	var grito = document.createElement('audio');
	grito.type = 'audio/mp3';
	grito.id = 'grito';
	grito.src = './arruinarPW/grito.mp3';
	grito.display = 'none';
	
	document.getElementById(idImg).appendChild(grito);
	
	var audio = document.getElementById("grito");
	
	document.getElementById(idImg).onmouseover = function() {
		document.getElementById(idImg).src = "./arruinarPW/curanderoCuernos.png"; //Reto 3
		audio.play();
	}
	document.getElementById(idImg).onmouseout = function() { //Reto 3
		document.getElementById(idImg).src = "./pagina/curandero.png"; 
	}
}
//Reto 5
function cambiarVocales(id)
{
	var cambiar = document.getElementById(id).innerHTML;
	
	cambiar = cambiar.replace(/a/g, "♦");
	cambiar = cambiar.replace(/A/g, "♦");
			
	cambiar = cambiar.replace(/e/g, "♥");
	cambiar = cambiar.replace(/E/g, "♥");
			
	cambiar = cambiar.replace(/i/g, "♠");
	cambiar = cambiar.replace(/I/g, "♠");
			
	cambiar = cambiar.replace(/o/g, "(:");
	cambiar = cambiar.replace(/O/g, "(:");
			
	cambiar = cambiar.replace(/u/g, ":(");
	cambiar = cambiar.replace(/U/g, ":(");
			
	document.getElementById(id).innerHTML = cambiar;
}
//Reto 6
function cambiarAñoNacimiento(idAño, idName)
{
	var name = document.getElementById(idName).innerHTML;
	name = "Ahora eres un niño " + name;
	var cambiar = document.getElementById(idAño).innerHTML;
	
	if(cambiar != name){
		cambiar = parseInt(cambiar);
	
		if(cambiar > 2008){
			cambiar = name;
		} else { cambiar = cambiar + 1; }
				
		document.getElementById(idAño).innerHTML = cambiar;
	}
}
function verificarEvento(idAño, idName) {
	document.body.onkeyup = function() {
		//console.log(event.keyCode);
		if(event.keyCode.toString() == "38"){
			cambiarAñoNacimiento(idAño, idName);
		}
	}
}
//Reto 7
function animarLibros(idTag)
{
	var boton = document.createElement('input');
	boton.type = 'button';
	boton.id = 'btnMover';
	boton.value = 'Mover';
 
	document.getElementById(idTag).appendChild(boton);
	//document.body.appendChild(boton);
	
	boton.addEventListener("click", function(){
		var book = document.getElementsByClassName("libro")[0];
		book.style.marginTop = "0px";
		
		book = document.getElementsByClassName("libro")[1];
		book.style.marginTop = "200px";
		
		book = document.getElementsByClassName("libro")[2];
		book.style.marginTop = "-100px";
		book.style.marginLeft = "100px";
		
		/*var book1 = document.getElementsByClassName("libro")[0];
		book1.style.marginTop = "-100px";
		
		var book2 = document.getElementsByClassName("libro")[1];
		book2.style.marginTop = "200px";
		
		var book3 = document.getElementsByClassName("libro")[2];
		book3.style.marginLeft = "100px";*/
	});
}
//Reto 8
function animar()
{
	var btn = document.createElement('input');
	btn.type = 'button';
	btn.id = 'btnMov';
	btn.value = 'Mover';
	 
	document.getElementById("divImgE").appendChild(btn);
		
	var img = document.getElementById("imgE");
	var i = 300;
		
	btn.addEventListener("click", function(){
		if(i == -50){ 
			img.style.marginLeft = "-50px"; 
			i = 300;
		}
		else{ 
			img.style.marginLeft = i + "px"; 
			i = i - 10;
		}
	});
}
function PW_Tenebrosa()
{
	var boton = document.createElement('input');
	boton.type = 'button';
	boton.id = 'btnTinebroso';
	boton.value = 'Tenebroso...';
 
	document.getElementById("principal").appendChild(boton);
	
	boton.addEventListener("click", function(){
		document.getElementById("principal").style.background='black';
		document.getElementById("edinson").style.background='black';
		document.getElementById("luisa").style.background='black';
		document.getElementById("carlos").style.background='black';
		document.getElementById("sandra").style.background='black';
		document.getElementById("karen").style.background='black';
		document.getElementById("sugerencia").style.background='black';
		
		var cambiar = document.getElementsByTagName("iframe");
		for(var i = 1; i < 6; i++){
			cambiar[i].src = 'https://www.youtube.com/embed/CTjQlFMAtz0?rel=0&amp;showinfo=0';
		}
		
		cambiar = document.getElementsByClassName("libro");
		for(var i = 0; i < cambiar.length; i++){
			cambiar[i].src = './arruinarPW/libroTenebroso.png';
		}
		
		document.getElementById("CE").src = "./arruinarPW/grito.mp3";
		
		document.getElementById("intro").innerHTML = "Desaparecieron...";
		document.getElementById("enunciado").innerHTML = '"-20 HP"';
		document.getElementById("autor").innerHTML = "- Ing. HendrysTobar";
	
		document.getElementById("logo").src = "./arruinarPW/logoTenebroso.png";
		document.getElementById("frame").src = "./arruinarPW/paisajeTenebroso.jpg";
		document.getElementById("imgE").src = "./arruinarPW/imgTenebrosa.png";
		document.getElementById("imgL").src = "./arruinarPW/imgTenebrosa.png";
		document.getElementById("imgC").src = "./arruinarPW/imgTenebrosa.png";
		document.getElementById("imgS").src = "./arruinarPW/imgTenebrosa.png";
		document.getElementById("imgK").src = "./arruinarPW/imgTenebrosa.png";
		
		animar();
	});
}