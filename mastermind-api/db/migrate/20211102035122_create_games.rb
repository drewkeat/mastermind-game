class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :combo
      t.integer :score
      t.text :board
      t.references :user


      t.timestamps
    end
  end
end
