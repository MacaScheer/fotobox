class Post < ApplicationRecord
    validates :title, :location, presence: true

    has_one_attached :photo
    belongs_to :user
    
    has_many :likes,
    dependent: :destroy


    has_many :likers,
    through: :likes,
    source: :user

    has_many :comments,
    dependent: :destroy
 
    # def self.find_user_posts(user_id)
    #     posts = Post.where(user_id: user_id)
    #     posts
    # end
end