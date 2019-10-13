json.extract! post, :id, :user_id, :title, :location
json.author post.user.username
json.authorPhotoUrl url_for(post.user.profile_picture)
json.photoUrl url_for(post.photo)
json.likers post.likers.pluck(:id)
json.comments post.comments.pluck(:id)
# @posts.each do |post|
#     json.set! post.id do 
#         json.extract! post, :id, :title, :location
#             json.photo_url url_for(post.photo)
#     end
# end