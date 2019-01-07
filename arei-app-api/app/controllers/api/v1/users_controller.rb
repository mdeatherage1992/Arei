
module Api
  module V1
    class UsersController < Api::V1::ApiController
# before_action :set_user, only: [:show,:destroy,:edit]

def index
  @users = User.all
  render json: @users
end

def show
  @user = User.find_by(id:params[:id])
  respond_to do |format|
      format.json
      render :partial => "users/show.json"
  end
end

def edit
  @user = User.find(params[:id])
  render json: @user
  redirect_to root_path
end

def destroy
  @user = User.find(params[:id])
  @user.destroy
  redirect_to root_path
end



private

def set_user
    @user = User.find(params[:id])
  end


  def user_params
    params.require(:user).permit(:username,:user_password,:user_email,:slug,:user_coordinate)
  end
end


end
end
