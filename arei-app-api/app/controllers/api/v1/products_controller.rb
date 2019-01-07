module Api
  module V1
    class ProductsController < Api::V1::ApiController
before_action :set_product, only: [:show,:destroy,:edit]
def index
  @products = Product.all
  render json: @products
end

def show
  @product = Product.find(params[:id])
  render json: @product
end

def edit
  @product = Product.find(params[:id])
  render json: @product
  redirect_to root_path
end

def destroy
  @product = Product.find(params[:id])
  @product.destroy
  redirect_to root_path
end

private

def set_product
    @product = Product.find(params[:id])
  end


  def product_params
    params.require(:product).permit(:title,:tags,:price,:description,:coordinates,:rfid,:ratings)
  end
end

end
end
