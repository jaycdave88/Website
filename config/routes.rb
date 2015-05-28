Rails.application.routes.draw do


devise_for :users

authenticated :user do
  root to: "posts#index", as: :authenticated_root
end

unauthenticated do
  root to: "welcome#index"
end

  resources :posts do
    resources :comments
  end
  
  resources :games, only: [:index]

  get '/about', to: 'pages#about'
  
  resources :contact, except: [:new, :create, :edit, :update, :destroy, :show]

  namespace :api do
    namespace :v1 do
      resources :contact
    end
  end

end
