class AddImgUrlColumnToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :img_url, :string
  end
end
