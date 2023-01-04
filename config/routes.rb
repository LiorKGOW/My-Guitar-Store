# frozen_string_literal: true

Rails.application.routes.draw do
  get 'guitars/index'
  get 'guitars/show'
  get 'guitars/new'
  get 'guitars/edit'
  get 'guitars/delete'
  root 'home#index'
  get '/guitars', to: 'guitars#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
