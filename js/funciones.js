//Menú movil

function menu() {
	
	var x = document.getElementById('myLinks');
	if (x.style.display === 'block') {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}
}

//AJAX lee el documento html o txt del servidor, recibe la url relativa
 
function leer(url){

	var docu=document.getElementById("main-section");//obtiene el elemento por el id donde se colocan los datos leidos.
	var solicitud;
	solicitud=new XMLHttpRequest();//Se crea un objeto XMLHttpRequest
	solicitud.addEventListener('load', mostrar);//envento load para el objeto XMLHttpRequest. (desencadena otros eventos relacionados).
	solicitud.open("GET", url,true);//ejecuta la petición Asincrono.
	solicitud.send(null);//no envía datos

}

var anchomini, 	anchomedio;

function mostrar(e){
	
	var docu=document.getElementById("main-section");//obtiene el elemento por el id donde se colocan los datos leidos.

	var datos=e.target;
	if(datos.readyState == 4 && datos.status==200)
	{
		
		docu.innerHTML=datos.responseText;
		
    }else{
        docu.innerHTML="¡Error fichero!"+' código de estado: '+datos.statusText;

	}

	 anchomini=document.getElementById('navbar_mini').offsetWidth;
	 anchomedio=document.getElementById('navbar').offsetWidth;

if (anchomini>0 || anchomedio>0){
		  ocultar_menu();
		  
   }
   
}

function ocultar_menu () {

        var enlaces = document.getElementById('myLinks');//obtiene el elemento por el id
		enlaces.style.display='none';// lo oculta cuando selecciones en el menú	item
	
	if (document.querySelectorAll("button").length>0)
	{

		var submenu= document.getElementById("submenu");
		var enlaces = document.querySelectorAll(".myLinks");
		var botones = document.querySelectorAll(".dropbtn");
		submenu.style.display='none';// lo oculta y no ocupa espacio en el diseño.
		
		for(i=1;i<botones.length;i++){
		
			enlaces[i].style.display = "none";// lo oculta y no ocupa espacio en el diseño.
			botones[i].style.marginTop = "0px";
			botones[i].setAttribute('contenido', "+");
		}
		
		botones[0].setAttribute('contenido', "+");
	
	}

}
// Leer mas
function moreless(m,t,p) {
	
	var moreText = document.getElementById(m);
    var btnText = document.getElementById(t);
    var puntos= document.getElementById(p);
	var txt=puntos.innerHTML;
	if (btnText.innerHTML === 'Leer menos') {

	  btnText.innerHTML = 'Leer más';
	  moreText.style.display = 'none';
	  puntos.innerHTML=txt +'..';
	
	} else {

	  puntos.innerHTML=txt.substr(0,txt.length-2); 
	  btnText.innerHTML = 'Leer menos';
	  moreText.style.display = 'inline';
	}
	
  } 

//imprimir html

function imprimir()
{
	
	if (anchomini>0 || anchomedio>0){
		ocultar_menu();
	}
	var btnText = document.getElementById('myBtn');
    if (btnText){
		if(btnText.innerHTML==='Leer más'){
			moreless('more','myBtn','puntos');
		}
	}
	//setTimeout(function(){ }, 700);
	
	var mywindow=window.open(this.href,this.target,'width=1185,height=600,top=220,left=367,toolbar=no,location=no,status=no,menubar=no');
	mywindow.document.write('<!DOCTYPE html><html lang="es"><head><title>Página de prueba</title><meta charset="UTF-8"/><link rel="icon" type="image/png" href="../img/print.png"><meta name="description" content=""/><meta name="author" content=""/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><link rel="stylesheet" type="text/css" href="css/print.css" media="all"/></head><body><div id="main-section"><div id="botones"><button type="button" id="btnCancel" class="no-print"  style="width:100px" onclick="window.close()">Cancelar</button><button type="button" id="btnPrint" class="no-print" style="width:100px" onclick="window.print()">Imprimir</button></div>'+document.getElementById('main-section').innerHTML+'</div></body></html>');
    mywindow.document.close(); // necesario para IE >= 10
    mywindow.focus(); // necesario para IE >= 10
	return false;

}

function inicio() {
		
	leer('../articulos/index.html');//Contenido principal al cargar el contenido de inicio

	var tab=document.getElementsByTagName('li');//selecciona los elementos li
	for(var i=0;i<tab.length;i++){//añade tabindex navegacion con tabulacion
		
		tab[i].tabIndex=1;
		tab[i].onkeypress=tab[i].onclick;//asigna el evento click al onkeydown
	}
}

function cambiar (ti,su) {//Cambia el Título y Subtitulo header

    var titulo=document.querySelector('header h1');//selecciona el selector header h1 Título
    var subtitulo=document.querySelector('header h2');//selecciona el selector header h2 Subtitulo
    if (ti!==undefined && su!==undefined) {
		titulo.innerHTML=ti;
		subtitulo.innerHTML=su;
	}else{
		titulo.innerHTML='Title default';// Por defecto título y subtitulo
		subtitulo.innerHTML='Subtitle default';
		
	}
}

//menu item variable i como parametro, para indicar el índice del menú.
function menu_mini(i) {

	var x = document.querySelectorAll(".myLinks");
	var y = document.querySelectorAll(".dropdown-content");
	var p = document.querySelectorAll(".dropbtn");
	var s = document.getElementById ("main-section");

	if (x[i].style.display === "inline") {//inline
		if((i+1)<p.length){
		  x[i].style.display = "none";
		  p[i+1].style.marginTop = "0px";
		  p[i].setAttribute('contenido', "+");
		  
		}else{// cuando sea el último elemento ira por este else del +
		  x[i].style.display = "none";
		  p[i].setAttribute('contenido', "+");
		 

		}
	} else {
		if((i+1)<p.length){
		  x[i].style.display = "inline";//inline
		  p[i].setAttribute('contenido', "-");
		}else{// cuando sea el último elemento ira por este else del -
		  x[i].style.display = "inline";//inline
		  p[i].setAttribute('contenido', "-");
		  		 
		}

	
	}
	if (i==0){p[i].style.marginBottom = 5+"px";}//margen inferior menú
}

var isVisible,  elem, navbar;

function visible() {//Comprueba si esta visible la barra menú.
	
if (document.querySelector("#navbar_mini").offsetWidth>0){
    isVisible=true;
}else{
	isVisible=false;
}  
 
}

function tamano () {//ajusta el ancho de barra menú
	
	  var arti = document.getElementById("main-section");
	  navbar.style.width=arti.offsetWidth + "px";
	 
}

function seleccion () {//selecciona una barra de menú según su visibilidad. 
  
   
  if (isVisible){
		
	navbar=document.getElementById("navbar_mini");
	elem=document.getElementById("submenu");
  
  } else {
	  
	navbar = document.getElementById("navbar");
    elem=document.getElementById("myLinks");
	  
  }
  	tamano();
	
}

function desplazamiento(){
	
	if (window.pageYOffset >= document.getElementById("header").offsetHeight && elem.style.display =='none') {//compara el desplazamiento Y superior del elemento con la ventana
	  navbar.classList.add("barra");//añade la clase al elemento
	  
  } else {
      navbar.classList.remove("barra");//elimina la clase al elemento
 }
	
	
}

addEventListener('load',inicio());

window.onresize = function(){//Cuando se cambia el tamaño.
 
 visible(); 
 seleccion();
 
};

window.onscroll = function(){//fija el menú a top con la clase barra

  visible(); 
  seleccion();
  desplazamiento();


};

window.addEventListener("orientationchange", function() {
  
  visible(); 
  seleccion();
  desplazamiento();
  
  
});