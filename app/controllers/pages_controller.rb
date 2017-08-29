class PagesController < ApplicationController
  def form
  end

  def calculo
    @calidad_hash = [["Beca JUNAEB","t1"], ["Yerno sin Aguinaldo","t2"], ["Recién Pagado","t3"], ["Alexis Sánchez","t4"]].to_h.invert

    #Parámetros
    @ninos = params[:ninos].to_i
    @mujeres = params[:mujeres].to_i
    @hombres = params[:hombres].to_i
    @calidad = params[:calidad]

    #Calculos Personas
    @suma_invitados = @ninos + @mujeres + @hombres

    #Calculos Cantidad de Carnes
    @carne_total = @ninos*0.2 + @mujeres*0.25 + @hombres*0.35
    @embutido_total = @ninos*0.05 + @mujeres*0.05 + @hombres*0.1
    @carbon = (@carne_total + @embutido_total)*3/5
    @carbon = @carbon.round(0)
    @pan = (@ninos*1 + @mujeres*1 + @hombres*2)/2.to_i

    #Asado según tipo 
    if @calidad == "t1"
        #Carne
        @precio_carne = @carne_total*0
        @carne = ""
        #Embutido
        @embutido_total = @embutido_total*2
        @carbon = (@embutido_total*3/5).round(0)
        @pan = @pan*2
        @precio_embutido = @embutido_total*3800
        @embutido = "Chorizo San Jorge"

    elsif @calidad == "t2"
        @precio_carne = @carne_total*6400
        @carne = "Sobrecostilla"
        @precio_embutido = @embutido_total*3800
        @embutido = "Chorizo San Jorge"

    elsif @calidad == "t3"
        @precio_carne = @carne_total*9500
        @carne = "Lomo Vetado"
        @precio_embutido = @embutido_total*5800
        @embutido = "Chorizo La Preferida"

    elsif @calidad == "t4"
        @precio_carne = @carne_total*20000
        @carne = "Wagyu"
        @precio_embutido = @embutido_total*7000
        @embutido = "Longaniza Llanquigue"

    end

    @precio_total = @precio_carne + @precio_embutido + @carbon * 2800 + @pan/12 * 1200 

    if @carbon == 0 

      @carbon = 1
      
    end



    @cerveza = params[:cerveza]
    @cerveza_total = @ninos*0 + @mujeres*0.8 + @hombres*1.5




  end
end
