# frozen_string_literal: true

Rails.application.routes.draw do
  get 'guitars/guitar_gallery'
  get 'guitars/welcome_page'

  # route to get the mock data:
  get '/guitars', to: 'guitars#index'

  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
