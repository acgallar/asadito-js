class PagesController < ApplicationController
  def form
  end

  def calculo
    @niños = params[:ninos].to_i
    @mujeres = params[:mujeres].to_i
    @hombres = params[:hombres].to_i
    @suma_invitados = @niños + @mujeres + @hombres

    @carne = params[:carne]
    @carne_total = @niños*0.2 + @mujeres*0.25 + @hombres*0.3

    if @carne = "Lomo Vetado"
        @precio_carne = @carne_total*9500
    elsif @carne = "Lomo Liso"
        @precio_carne = @carne_total*8500
    elsif @carne = "Huachalomo"
        @precio_carne = @carne_total*4500
    end

    @cerveza = params[:cerveza]
    @cerveza_total = @niños*0 + @mujeres*0.8 + @hombres*1.5




  end
end
