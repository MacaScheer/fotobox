require 'open-uri'

photos = [ 
        "westside_gunn.jpg",
        "tj2.jpg",
        "tj.jpg", 
        "Ed_and_Cat.JPG", 
       "2.JPG",
       "3.JPG",
       "4.png",
       "5.PNG",
       "7.jpg",
       "8.jpg",
       "10.JPG",
       "12.png",
       "14.jpg",
       "15.jpg",
       "16.jpg",
       "17.jpg",
       "18.jpg",
       "19.jpg",
       "20.jpg",
       "21.jpg",
       "22.jpg",
       "23.png",
       "24.jpg",
       "25.jpeg",
       "26.jpg",
       "27.jpg",
       "28.jpg",
       "29.jpg",
       "30.jpg",
       "31.jpeg",
       "32.png",
       "33.jpg"
]

locc = [
        "Takatsuki",
        "Sukadana",
        "Madoi",
        "Lleida",
        "Shiquan",
        "Jaguimitan",
        "Mauraro",
        "Akademija",
        "Paris",
        "Verkhnevilyuysk",
        "Horodok",
        "Champigny-sur-Marne",
        "Hörby",
        "Qumudi",
        "Kainantu",
        "Zhireken",
        "Bambous Virieux",
        "Nol",
        "Beaufort",
        "Gómez",
        "Jezzîne",
        "Banyupoh",
        "Juntas",
        "Ayotupas",
        "Kamionka",
        "Mingjing",
        "Bromma",
        "Minbu",
        "San Jose",
        "Philadelphia",
        "Montebello",
        "City Heights",
]
titles = [
        "Xtro 2: The Second Encounter",
        "My Neighbors the Yamadas (Hôhokekyo tonari no Yamada-kun)",
        "Hidden Blade, The (Kakushi ken oni no tsume)",
        "Café Metropole",
        "Indiscreet",
        "Regeneration",
        "Werner - Beinhart!",
        "Man on a Ledge",
        "Agony and the Ecstasy of Phil Spector, The",
        "Mac and Me",
        "Kiss Me, Guido",
        "North Country",
        "Tie Me Up! Tie Me Down! (¡Átame!)",
        "Prospero's Books",
        "Not Reconciled",
        "The Dependent",
        "Little Voice",
        "$5 a Day",
        "Ben-Hur: A Tale of the Christ",
        "Bloodsucking Pharaohs in Pittsburgh",
        "Fireflies in the Garden",
        "Villa Rides!",
        "Heart Condition",
        "Cass",
        "Something to Sing About",
        "Mother, The",
        "Disco and Atomic War (Disko ja tuumasõda)",
        "Devil Inside, The",
        "La Jeteé, Chris Marker",
        "Ride the Pink Horse, Robert Montgomery",
        "Fat City, John Huston",
        "Beware of a Holy Whore, Rainer Werner Fassbiner"
]
Post.destroy_all
User.destroy_all
demo_user = User.create!(username: "demo_user", email: "demo@demouser.com", password: "123456")
until photos.empty?
        photo = photos.shift
        post = Post.create!(title: titles.shift, location: locc.shift, user_id: demo_user.id)
        file = open("https://fotobox-seeds.s3-us-west-1.amazonaws.com/#{photo}")
        post.photo.attach(io: file, filename: photo)
end

prof = open("https://fotobox-seeds.s3-us-west-1.amazonaws.com/Ed_and_Cat.JPG")
demo_user.profile_picture.attach(io: prof, filename: "Ed_and_Cat.JPG")




# https://fotobox-seeds.s3-us-west-1.amazonaws.com/Ed_and_Cat.JPG

# Aws.config.update({region:"us-west-1", credentials: Aws::Credentials.new(Rails.application.credentials.aws[:access_key_id], Rails.application.credentials.aws[:secret_access_key])})
# for bucket policy:
# arn:aws:iam::663141238029:user/fotobox-master
# userID
# 663141238029

       
       
# "1.HEIC", "9.HEIC","6.HEIC",
# 