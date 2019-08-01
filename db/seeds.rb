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
#             img_url: "https://instagram.fsan1-2.fna.fbcdn.net/vp/cb2ad05a882e57d90bb232f0fb57a580/", 
#             location: "Mt. Baldy",
#             author_id: 
#         )

# Post.create!( 
#               title: "Just my kinda thing",
#               img_url: "https://instagram.fsan1-2.fna.fbcdn.net/vp/90934944j343848d1a88323456433c/",
#               location: "Logan Heights",
#               author_id: 12
#         )
# Post.create!(
#              title: "I don't know",
#              img_url: "https://instagram.fsan1-2.fna.fbcdn.net/vp/012938098109812309182039f0298a",
#              location: "Frog Town, Los Angeles",
#              author_id: 34
#             )
# end

# ActiveRecord::Base.transaction do
#   Pokemon.destroy_all

#   pokemon = {
#     '1' => {
#       'name' => 'Bulbasaur',
#       'attack' => 49,
#       'defense' => 49,
#       'poke_type' => 'grass',
#       'moves' => [
#          'tackle',
#          'vine whip'
#       ],
#     },

# ?
#HOW DO I CREATE A DEMO-ACCOUNT?#
            