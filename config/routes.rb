Rails.application.routes.draw do


  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'welcome#index'

  resources :posts
  



  resources :contact, except: [:new, :create, :edit, :update, :destroy, :show]

  namespace :api do
    namespace :v1 do
      resources :contact
    end
  end

end
