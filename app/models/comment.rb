class Comment < ApplicationRecord
    validates :body
    has_many :likes
    belongs_to :post


 
end