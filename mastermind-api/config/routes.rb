Rails.application.routes.draw do
  resources :games
  resources :users
  
  get '/mastermind', to: 'mastermind#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
