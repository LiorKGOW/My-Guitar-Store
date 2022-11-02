Rails.application.routes.draw do
  root 'home#index'
  get '/guitars', to: 'guitars#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
