class CreateTypes < ActiveRecord::Migration[4.2]
  def change
    create_table :types do |t|
      t.string 'name'
      t.string 'description'
      t.string 'tags', array: true
      t.integer 'ratings', array: true
    end
  end
end
