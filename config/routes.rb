Rails.application.routes.draw do
  resources :roots
  resources :darks
  resources :lights
  root "roots#index"
end
