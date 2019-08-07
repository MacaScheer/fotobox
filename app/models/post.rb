class Post < ApplicationRecord
    validates :title, :location, presence: true

    has_one_attached :photo
    
    
    # has_many :likes
    # has_many :comments
    # belongs_to :user
 
    # def self.find_user_posts(user_id)
    #     posts = Post.where(user_id: user_id)
    #     posts
    # end
end