Rails.application.routes.draw do
  get 'pages/form'
  get 'pages/calculo'
  root 'pages#form'
  #post 'pages', to: 'pages#calculo'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
