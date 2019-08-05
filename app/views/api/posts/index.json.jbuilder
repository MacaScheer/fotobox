@posts.each do |post|
    json.set! post.id do 
        json.extract! post, :id, :title, :location
        if post.photo.attached? 
            json.photo_url url_for(post.photo)
        end
    end
end