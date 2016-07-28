class CreateRegisters < ActiveRecord::Migration
  def change
    create_table :registers do |t|
      t.string :title
      t.integer :additive_id
      t.string :name
      t.string :english
      t.text :information
      t.integer :checklist_id

      t.timestamps null: false
    end
  end
end
