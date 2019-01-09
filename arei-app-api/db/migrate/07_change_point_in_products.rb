class ChangePointInProducts< ActiveRecord::Migration[5.0]
  def change
    change_column :products, :coordinates, :string
  end
end
