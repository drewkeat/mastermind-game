class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :combo
      t.int :score
      t.text :board

      t.timestamps
    end
  end
end
