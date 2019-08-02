class RemovePostIdFromLikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :post_id, :integer
  end
end
