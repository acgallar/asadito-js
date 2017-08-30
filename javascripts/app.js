$(document).ready(function($) {
	$('#btn_enviar_seleccion').on('click', function(){
	 event.preventDefault();
	 var hombres = parseInt($('#hombres').val());
	 var mujeres = parseInt($('#mujeres').val());
	 var ninos = parseInt($('#ninos').val());
	 var calidad = $('#calidad').val();
	 
	 var total_invitados = hombres + mujeres + ninos;
	 
	 var carne_total = ninos*0.2 + mujeres*0.25 + hombres*0.35;
	 var embutido_total = ninos*0.05 + mujeres*0.05 + hombres*0.1;
	 var carbon = Math.round((carne_total + embutido_total)*3/5);
	 var pan = Math.round((ninos*1 + mujeres*1 + hombres*2)/2);

	 switch (calidad) {
	    case "t1":
	        var precio_carne = carne_total*0;
	        var carne = "";
	        var embutido_total = embutido_total*2;
	        carbon = Math.round(embutido_total*3/5);
	        pan = pan*2;
	        var precio_embutido = embutido_total*3800;
	        var embutido = "Chorizo San Jorge";
	        break;
	    case "t2":
	        var precio_carne = carne_total*6400;
	        var carne = "Sobrecostilla";
	        var precio_embutido = embutido_total*3800;
	        var embutido = "Chorizo San Jorge";
	        break;
	    case "t3":
	        var precio_carne = carne_total*9500;
	        var carne = "Lomo Vetado";
	        var precio_embutido = embutido_total*5800;
	        var embutido = "Chorizo La Preferida";
	        break;
	    case "t4":
	        var precio_carne = carne_total*20000;
	        var carne = "Wagyu";
	        var precio_embutido = embutido_total*7000;
	        var embutido = "Longaniza Llanquihue";
	        break;
	  }

	  if (carbon == 0) {carbon = 1};

	  var precio_total = precio_carne + precio_embutido + carbon * 2800 + pan/12 * 1200;

	  var calidades = {
	    t1: "Beca JUNAEB",
	    t2: "Yerno sin Aguinaldo",
	    t3: "Recién Pagado",
	    t4: "Alexis Sánchez"
	  }

	  var tipo_asado = calidades[calidad]

	  $('#invitados').html(total_invitados);
	  $('#total-hombres').html(hombres);
	  $('#total-mujeres').html(mujeres);
	  $('#total-ninos').html(ninos);
	  $('#tipo-asado').html(tipo_asado);
	  $('#kilos-carne').html(carne_total);
	  $('#kilos-embutido').html(embutido_total);
	  $('#kilos-carbon').html(carbon);
	  $('#unidades-pan').html(pan);
	  $('#precio-total').html(precio_total);

	  $('#resultado').removeAttr('hidden');

	});
});