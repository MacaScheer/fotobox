# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demo_user = {
username: "demo_user",
password: "123456",
email: "demo@demo.com"
}

user1 = {
        username: "dangatangg",
        password: "sanrafae1",
        email: "mac@mac.com"
}

ActiveRecord::Base.transaction do
        User.destroy_all
        User.create!(demo_user)

end
# Post.destroy_all
# Post.create!(
#             title: "Me n Beans on Mt. Baldy",
#             img_url: "", 
#             location: "Mt. Baldy",
#             author_id: demo_user.id
#         )

# Post.create!( 
#               title: "Just my kinda thing",
#               img_url: "",
#               location: "Logan Heights",
#               author_id: demo_user.id
#         )
# Post.create!(
#              title: "I don't know",
#              img_url: "",
#              location: "Frog Town, Los Angeles",
#              author_id: demo_user.id
#             )
# end
