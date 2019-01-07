module Api
module V1
class AdminController < Api::V1::ApiController
before_action :set_admin, only: [:show,:destroy,:edit]
def index
  @admins = Admin.all
  render json: @admins
end

def show
  @admin = Admin.find(params[:id])
  render json: @admin
end

def edit
  @admin = Admin.find(params[:id])
  render json: @admin
  redirect_to root_path
end

def destroy
  @admin = Admin.find(params[:id])
  @admin.destroy
  redirect_to root_path
end


private

def set_admin
    @admin = Admin.find(params[:id])
  end


  def admin_params
    params.require(:admin,:admin_email,:admin_password).permit(:admin_coordinate,:slug)
  end
end

end
end
