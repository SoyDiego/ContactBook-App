Rails.application.routes.draw do
  root to: 'home#index'
  namespace :api do 
    namespace :v1 do 
     resources :contacts, only: [:index, :create, :destroy, :update]
    end 
  end 
end