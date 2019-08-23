class AddIndexToLikes < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, :post_id
  end
end
