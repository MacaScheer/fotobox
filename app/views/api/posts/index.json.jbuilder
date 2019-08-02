@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :title, :location
    json.image_url image_path(post.image_url)
  end
end