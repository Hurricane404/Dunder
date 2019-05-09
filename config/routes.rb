Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :servers, only: [:create, :show, :index, :destroy]
    resources :user_servers, only: [:create, :destroy, :index]
    resources :messages, only: [:index]
  end

  root to: 'static_pages#root'
  mount ActionCable.server, at: '/cable'
end


