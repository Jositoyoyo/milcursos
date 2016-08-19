//functions.js




//filtro ejercicios

$(document).ready(function(){

	$('#ejercios-filter li a').click(function(){

	$('#ejercios-filter li a.active').removeClass('active');
	$(this).addClass('active');

	var filterValue = 'cat' + $(this).text().toLowerCase().replace('','-');
	console.log(filterValue);

	if(filterValue === 'cat-todo'){
		$('.ejercicio-item').removeClass('ocultar');
		console.log(filterValue);
	}else{
		console.log(filterValue);
		$('.ejercicio-item').each(function(){
			console.log('check '+filterValue);
			if(!$(this).hasClass(filterValue)){
				console.log('ocultar');
				$(this).addClass('ocultar');
			}else{
				$(this).removeClass('ocultar');
				console.log('mostrar');
			}
		});
	}

	});


	

});