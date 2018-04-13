Rails.application.routes.draw do
  devise_for :users
  root 'messages#index'
  resources :users, only: [:edit, :update]
  resources :groups, only: [:edit, :update, :new, :create] do
    resurces :messages, only[:index, :create]
  end
end
