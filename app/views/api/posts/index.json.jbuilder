@posts.each do |post|
    debugger
    json.set! post.id do
        json.partial! 'post', post: post
    end
end