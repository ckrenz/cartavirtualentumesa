


function mostrarScroll(){

var animacionComo = document.querySelector('#como');
let alturaComo = animacionComo.getBoundingClientRect().top;
let pantalla = window.innerHeight;

	if(alturaComo <= pantalla) {
		animacionComo.style.opacity = 1;
	}
}

window.addEventListener('scroll' , mostrarScroll);

function mostrarScrollBeneficios(){
	
var animacionBeneficios = document.querySelector('#beneficios');
let alturaBeneficios = animacionBeneficios.getBoundingClientRect().top;
let pantalla = window.innerHeight;

	if(alturaBeneficios < pantalla) {
		animacionBeneficios.style.opacity = 1;
	}
}

window.addEventListener('scroll' , mostrarScrollBeneficios);


function mostrarScrollCeluqr(){
	
var animacionCeluqr = document.querySelector('#celuqr');
let alturaCeluqr = animacionCeluqr.getBoundingClientRect().top;
let pantalla = window.innerHeight;

	if(alturaCeluqr < pantalla) {
		animacionCeluqr.style.transform = "translate(0.3%, 	0)";
	}
}

window.addEventListener('scroll' , mostrarScrollCeluqr);


function mostrarScrollEj(){
	
var animacionEj = document.querySelector('#ej');
let alturaEj = animacionEj.getBoundingClientRect().top;
let pantalla = window.innerHeight/2;

	if(alturaEj < pantalla) {
		animacionEj.style.opacity = 1;
	}
}

window.addEventListener('scroll' , mostrarScrollEj);

function mostrarScrollPlanes(){
	
var animacionPlanes = document.querySelector('#planes');
let alturaPlanes = animacionPlanes.getBoundingClientRect().top;
let pantalla = window.innerHeight;

	if(alturaPlanes < pantalla) {
		animacionPlanes.style.opacity = 1;
	}
}

window.addEventListener('scroll' , mostrarScrollPlanes);

function mostrarScrollContacto(){
	
var animacionContacto = document.querySelector('#contacto');
let alturaContacto = animacionContacto.getBoundingClientRect().top;
let pantalla = window.innerHeight/2;

	if(alturaContacto < pantalla) {
		animacionContacto.style.opacity = 1;
	}
}

window.addEventListener('scroll' , mostrarScrollContacto);