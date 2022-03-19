//Lectura de un archivo por ajax contador.php
var cajadatos;
function iniciar (elemento,url) {
    cajadatos= document.getElementById(elemento);
    traer(url);
}

function traer(url) {

    var solicitud= new XMLHttpRequest();//Se crea un objeto XMLHttpRequest
	solicitud.addEventListener('loadstart',crear);//crear elemento
	solicitud.addEventListener('load',ver);//Fin de la descarga
    solicitud.open("GET", url,true);//carga en la variable get la peticion
    solicitud.send(null);//envía la peticion

}
var b;

function crear() {
	
	b=document.createElement('p');
	
}

function ver(e){

    var datos=e.target;
	if(datos.readyState == 4 && datos.status==200)
	{
          b.innerHTML='Visitas web: '+datos.responseText;
	     
    }else{
          b.innerHTML="¡Error fichero!"+' '+datos.statusText;

    }
	
	 cajadatos.appendChild(b);
}
addEventListener('load', iniciar('footer','../contador/contador.php'));