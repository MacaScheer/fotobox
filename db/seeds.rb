# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# demo_user = {
# username: "demo_user",
# password: "123456",
# email: "demo@demo.com"
# }



require 'open-uri'

demo_user = User.create(username: "flygod", email: "westside_gunn@mac.com", password: 123456)

file = open('/Users/michaelscheer/Desktop/photos_for_fotobox/hitlerwearshermes.jpg')

demo_user.profile_picture.attach(io: file, filename: 'hitlerwearshermes.jpg')

# Post.create!(
#             title: "Hitler wears Hermes",
#             location: "Los Angeles",
#             user_id: 29
#         )
