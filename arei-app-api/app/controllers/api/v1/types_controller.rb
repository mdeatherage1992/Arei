module Api
  module V1
    class TypesController < Api::V1::ApiController
before_action :set_type, only: [:show,:destroy,:edit]
def index
  @types = Type.all
  render json: @types
end

def show
  @type = Type.find(params[:id])
  render json: @types
end

def edit
  @type = Type.find(params[:id])
  render json: @types
  redirect_to root_path
end

def destroy
  @type = Type.find(params[:id])
  @type.destroy
  redirect_to root_path
end

private

def set_type
    @type = Type.find(params[:id])
  end


  def type_params
    params.require(:type).permit(:email,:username,:name,:email)
  end

end


end
end
