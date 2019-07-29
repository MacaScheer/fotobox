class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :img_url, null: false
      t.array :comments
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :posts, :title
    add_index :posts, :author_id, unique: true
  end
end
