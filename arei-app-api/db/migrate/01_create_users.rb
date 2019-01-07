class CreateUsers < ActiveRecord::Migration[4.2]


  def change
    create_table :users do |t|
      t.string 'user_id'
      t.string 'user_password'
      t.string "user_coordinate", array:true
      t.string "user_email"
      t.string 'slug', array:true
    end
  end
end
