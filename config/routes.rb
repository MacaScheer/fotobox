Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :new]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :index, :show, :delete] do
      resources :likes, only: [:create, :delete, :show]
      resources :comments, only: [:create, :delete, :show]
    end  
  end
  root to: "static_pages#root"
end
