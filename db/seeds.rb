# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.destroy_all


Post.create!(id: 3,
            title: "Me n Beans on Mt. Baldy",
            imag_url: "https://instagram.fsan1-2.fna.fbcdn.net/vp/cb2ad05a882e57d90bb232f0fb57a580/", 
            location: "Mt. Baldy",
            authorId: 23
        )

Post.create!( id: 4,
              title: "Just my kinda thing",
              imag_url: "https://instagram.fsan1-2.fna.fbcdn.net/vp/90934944j343848d1a88323456433c/",
              location: "Logan Heights",
              authorId: 12
        )
Post.create!(id: 6,
             title: "I don't know",
             imag_url: "https://instagram.fsan1-2.fna.fbcdn.net/vp/012938098109812309182039f0298a",
             location: "Frog Town, Los Angeles",
             authorId: 34
            )

# User.create!(id: 23,
# username: "fotoboxbuddy",
# email: "mac@mac.com",
# bio: "I love to travel with friends, and hangout with my dog",
# ?
#HOW DO I CREATE A DEMO-ACCOUNT?#
            