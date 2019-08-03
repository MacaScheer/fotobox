class Post < ApplicationRecord
    validates :title, :location, presence: true

    has_one_attached :photo
    
    
    # has_many :likes
    # has_many :comments
    # belongs_to :user
 
end