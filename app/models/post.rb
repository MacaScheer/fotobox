class Post < ApplicationRecord
    validates :title, :location, :img_url, presence: true
    
    has_one_attached :photo
    
    
    has_many :likes
    has_many :comments
    belongs_to :user
 
end