class AddIndexToComments < ActiveRecord::Migration[5.2]
  def change
    add_index :comments, :post_id
    add_index :comments, :user_id
  end
end
