class CreateAreas < ActiveRecord::Migration[4.2]
  def change
    create_table :areas do |t|
      t.string 'name'
      t.string 'type'
      t.integer 'coordinates', array: true
    end
  end
end
