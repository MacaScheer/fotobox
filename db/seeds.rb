# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.destroy_all


Post.create!(id: 3,
            photoUrl: "https://instagram.fsan1-2.fna.fbcdn.net/vp/cb2ad05a882e57d90bb232f0fb57a580/", 
            title: "Me n Beans on Mt. Baldy",
            authorId: 23)
Post.create!( id: 4,
              photoUrl: "https://instagram.fsan1-2.fna.fbcdn.net/vp/90934944j343848d1a88323456433c/",
              title: "Just my kinda thing",
              authorId: 12)
Post.create!(id: 6,
             photoUrl: "https://instagram.fsan1-2.fna.fbcdn.net/vp/012938098109812309182039f0298a",
             title: "I don't know",
             authorId: 34)

             User.create!