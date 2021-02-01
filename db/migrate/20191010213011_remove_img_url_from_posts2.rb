class RemoveImgUrlFromPosts2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :img_url, :string
  end
end
