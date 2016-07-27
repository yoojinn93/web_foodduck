class CreateRegisters < ActiveRecord::Migration
  def change
    create_table :registers do |t|
      t.string :title
      t.string :additive
      t.string :name
      t.string :english
      t.text :information

      t.timestamps null: false
    end
  end
end
