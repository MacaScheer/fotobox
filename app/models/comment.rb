class Comment < ApplicationRecord
    validates :body, presence: true
    has_many :likes
    belongs_to :post
    belongs_to :user


 
end