class CreateAdmins < ActiveRecord::Migration[4.2]
  def change
    create_table :admins do |t|
      t.string 'admin_id'
      t.string 'admin_password'
      t.string "admin_coordinate", array:true
      t.string "admin_email"
      t.string 'slug', array:true
    end
  end
end
