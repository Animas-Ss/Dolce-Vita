let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu');

btnMenu.addEventListener('click', function (){
	menu.classList.toggle('mostrar');
});

//guardar el estado (columna activa)//

let columnaActiva = 1 ;

//seleccionar columna

const columnas = document.querySelectorAll(".trabajos_columnas");

// Escuchar los click

columnas.forEach((trabajos_columnas, indice) => {
	trabajos_columnas.addEventListener("click", function() {
		cambiarColumna(indice);
	});


});

 //cambiar el estado de las columnas a activo

function cambiarColumna(indice) {
	columnas[columnaActiva].classList.remove("activa")
	columnas[indice].classList.add("activa")
	columnaActiva = indice
};