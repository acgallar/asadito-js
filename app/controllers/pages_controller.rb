class PagesController < ApplicationController
  def form

  end

  def calculo
    @niños = params[:niños].to_i
    @mujeres = params[:mujeres].to_i
    @hombres = hombres[:hombres].to_i
    @suma_invitados = @niños + @mujeres + @hombres
  end
end
