class CreateFollowings < ActiveRecord::Migration[5.2]
  def change
    create_table :followings do |t|
      t.references :user, foreign_key: true
      t.integer :followed_user_id, null: false
      t.timestamps
    end
    add_index :followings, :followed_user_id
    add_index :followings, [:user_id, :followed_user_id], unique: true
  end
end
