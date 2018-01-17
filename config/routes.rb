Rails.application.routes.draw do
  resources :tasks

  root 'tasks#index' #tasks_url --- check this in http://localhost:3000/rails/info/routes here you can see where it goes

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
