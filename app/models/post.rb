class Post < ApplicationRecord
    validates :title, :img_url, :location, :img_url
    has_many :likes
    has_many :comments
    belongs_to :user
 
end