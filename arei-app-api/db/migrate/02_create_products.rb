class CreateProducts < ActiveRecord::Migration[4.2]


  def change
    create_table :products do |t|
      t.string 'title'
      t.string 'tags', array: true
      t.integer 'price'
      t.string 'description'
      t.point 'coordinates', array:true
      t.string "rfid"
      t.integer 'ratings', array: true
    end
  end
end
