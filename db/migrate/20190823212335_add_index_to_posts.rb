class AddIndexToPosts < ActiveRecord::Migration[5.2]
  def change
    add_index :posts, :user_id
  end
end
