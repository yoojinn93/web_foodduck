class CreateAdditives < ActiveRecord::Migration
  def change
    create_table :additives do |t|
      t.string :name
      t.string :english
      t.text :information
      t.integer :checklist_id
      t.timestamps null: false
    end
  end
end
