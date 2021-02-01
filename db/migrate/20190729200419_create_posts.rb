class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :img_url, null: false
      t.string :location
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :posts, :title
    add_index :posts, :author_id, unique: true
    add_index :posts, :location
  end
end
