class AddDescriptionToArea< ActiveRecord::Migration[5.0]
  def change
    add_column :areas, :description, :string
  end
end
