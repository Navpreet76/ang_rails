Rails.application.routes.draw do
  
  root 'static_pages#index'
# --------Player Routes ------ #
  get "players" => "players#index"
  post "players" => "players#create"

# --------Team Routes --------- #  
  get "teams" => "teams#index"
  post "teams" => "teams#create"
end
