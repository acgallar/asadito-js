$(document).ready(function($) {
	$('#btn_enviar_seleccion').on('click', function(){
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
	        $('#carne').hide();
	        var embutido_total = embutido_total*2;
	        carbon = Math.round(embutido_total*3/5);
	        pan = pan*2;
	        var precio_embutido = embutido_total*5000;
	        var embutido = "Chorizo";
	        break;
	    case "t2":
	     	 $('#carne').show();
	        var precio_carne = carne_total*6000;
	        var carne = "Sobrecostilla.";
	        var alt_carne = "Pulpa de Cerdo, Abastero, Punta Picana y Asado Carnicero."
	        var precio_embutido = embutido_total*5000;
	        var embutido = "Chorizo";
	        break;
	    case "t3":
	      	$('#carne').show();
	        var precio_carne = carne_total*14500;
	        var carne = "Lomo Vetado";
	        var alt_carne = "Lomo liso, Punta de Ganso y Tapa Barriga."
	        var precio_embutido = embutido_total*5800;
	        var embutido = "Longaniza";
	        break;
	    case "t4":
	      	$('#carne').show();
	        var precio_carne = carne_total*22000;
	        var carne = "Punta Paleta Wagyu";
	        var alt_carne = "Filete, Lomo Vetado Prémium y Angus."
	        var precio_embutido = embutido_total*7000;
	        var embutido = "Longaniza";
	        break;
	  }

	  if (carbon == 0) {carbon = 1};

	  var precio_total = precio_carne + precio_embutido + carbon * 3200 + pan/12 * 1990;

	  var calidades = {
	    t1: "Presupuesto $",
	    t2: "Presupuesto $$",
	    t3: "Presupuesto $$$",
	    t4: "Presupuesto $$$$"
	  }

	  var tipo_asado = calidades[calidad]
	  var precio_invitado = Math.round(precio_total / total_invitados);
	  precio_total = numberWithCommas(Math.round(precio_total));
	  precio_invitado = numberWithCommas(Math.round(precio_invitado));

	  carne_total = (carne_total).toFixed(1);
	  embutido_total = (embutido_total).toFixed(1);

	  $('#invitados').html(total_invitados);
	  $('#total-hombres').html(hombres);
	  $('#total-mujeres').html(mujeres);
	  $('#total-ninos').html(ninos);
	  $('#tipo-asado').html(tipo_asado);
	  $('#kilos-carne').html(carne_total);
	  $('#kilos-embutido').html(embutido_total);
	  $('#tipo-carne').html(carne);
	  $('#alternativas-carne').html(alt_carne);
	  $('#tipo-embutido').html(embutido);
	  $('#kilos-carbon').html(carbon);
	  $('#unidades-pan').html(pan);
	  $('#precio-total').html(precio_total);
	  $('#precio-invitado').html(precio_invitado);

	  $('#form').slideUp("fast");
	  $('#resultado').attr('hidden', false);

	  return false;
	});

	$('#volver').on('click', function() {
	  $('#form').slideDown("fast");
	  $('#resultado').attr('hidden', true);
	  return false;
	});

	function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}
});