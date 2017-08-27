class PagesController < ApplicationController
  def form
  end

  def calculo
    @niños = params[:ninos].to_i
    @mujeres = params[:mujeres].to_i
    @hombres = params[:hombres].to_i
    @suma_invitados = @niños + @mujeres + @hombres

    @calidad = params[:calidad]
    @carne_total = @niños*0.2 + @mujeres*0.25 + @hombres*0.35

    if @calidad = "tipo1"
        @precio_carne = @carne_total*3800
        @carne = "Chorizo San Jorge"
    elsif @calidad = "tipo2"
        @precio_carne = @carne_total*6400
        @carne = "Sobrecostilla"
    elsif @calidad = "tipo3"
        @precio_carne = @carne_total*9500
        @carne = "Lomo Vetado"
    elsif @calidad = "tipo4"
        @precio_carne = @carne_total*20000
        @carne = "Wagyu"
    end

    @cerveza = params[:cerveza]
    @cerveza_total = @niños*0 + @mujeres*0.8 + @hombres*1.5




  end
end
