class RemovePostIdFromComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :post_id, :integer
  end
end
