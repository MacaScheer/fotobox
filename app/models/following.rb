class Following < ApplicationRecord
validates :user_id, uniqueness: {scope: :followed_user_id}

belongs_to :following,
class_name: :User,
foreign_key: :followed_user_id

belongs_to :follower,
class_name: :User,
foreign_key: :user_id

end
