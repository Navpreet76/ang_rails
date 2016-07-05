Rails.application.routes.draw do
  
  root 'static_pages#index'
# --------Players Routes ------ #
  get "players" => "players#index"
  post "players" => "players#create"
  delete "players/:id" => "players#destroy"

# --------Teams Routes --------- #  
  get "teams" => "teams#index"
  post "teams" => "teams#create"
  delete "teams/:id" => "teams#destroy"
end
