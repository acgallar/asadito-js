$(document).ready(
    function() {
      var text1 = $('#hombres');
      var text2 = $('#mujeres');
      var text3 = $('#ninos');
      var select1 = $('#calidad');


      $("#form").change(function(){

        if ((text1.val() + text2.val() + text3.val() <= 0) || text1.val() < 0 || text2.val() < 0 || text3.val() < 0 ){
          $("#btn_enviar_seleccion").addClass("btn-enviar");
          $("#btn_enviar_seleccion").prop("disabled", true);
          $("#completa-form").html('Complete con información válida');
          $("#completa-form").show();

        }
        else if (text1.val() != "" && text2.val() != "" && text3.val() != "" && select1.val() != "" ) {
          $("#btn_enviar_seleccion").removeClass("btn-enviar");
          $("#btn_enviar_seleccion").removeAttr("disabled");
          $("#completa-form").hide();
        }
      
        else{
          $("#btn_enviar_seleccion").addClass("btn-enviar");
          $("#btn_enviar_seleccion").prop("disabled", true);
          $("#completa-form").html('Complete los datos para continuar');
          $("#completa-form").show();
        }       
      });

      $(".hide_text").hide();
        $(".inv select").change(
            function() {
                $(".hide_text").hide();
                $("#" + this.value).show();
            });
        $("#language").change();


      if ( text1.val() < 0 ){
        text1.val() = 0
      }
      
       if ( text2.val() < 0 ){
        text2.val() = 0
      }

       if ( text3.val() < 0 ){
        text3.val() = 0
      }


    });