class AddPostIdColumnToLikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :post_id, :integer
  end
end
