json.extract! user, :id, :username, :bio, :email
json.photo_url url_for(user.profile_picture) if user.profile_picture.attached?
json.followerIds user.followers.pluck(:id)
json.followingIds user.followings.pluck(:id)