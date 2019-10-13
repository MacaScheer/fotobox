Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update, :destroy] do
      resources :followings, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :index, :show, :update, :destroy] do
      resources :comments, only: [:index]
    end
          resources :likes, only: [:create, :destroy, :show]
    resources :comments, only: [:create, :destroy, :show]
    resources :followings, only: [:create, :destroy, :show]
    get 'profile/posts/:id', :to => 'posts#profile_posts'
    get 'feed/posts', :to => 'posts#feed_posts'
    get 'explore/posts', :to => 'posts#explore_posts'
  
  end
end