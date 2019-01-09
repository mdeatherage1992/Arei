Rails.application.routes.draw do


namespace :api do
   namespace :v1, defaults: { format: :json } do
       resources :admins,:products,:types,:users,:areas
   end
 end


 end
