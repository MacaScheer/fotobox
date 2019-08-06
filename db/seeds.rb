require 'open-uri'

photos = [ 
        "12.png", 
        "3.JPG", 
        "4.PNG", 
        "5.PNG", 
        "7.jpg", 
        "8.jpg", 
        "Ed_and_Cat.JPG", 
        "box1.jpg", 
        "box_in_snow.jpg", 
        "carlos-.jpg", 
        "carozz.jpg", 
        "carozzi.jpg", 
        "coffin_with_corpse.jpg", 
        "coldbox.jpg", 
        "felipe.jpg", 
        "hitlerwearshermes.jpg", 
        "jacky-nollie-heel-indy-jpeck.jpg", 
        "old-box-2.jpg", 
        "oldassbox.jpeg", 
        "oldbox.jpg", 
        "quintero.jpg", 
        "rf.jpeg", 
        "shoebox.jpg", 
        "somalia.png", 
        "treasurechest.jpg"
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
        "Philadelphia"
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
        "Devil Inside, The"
]

User.destroy_all
demo_user = User.create(username: "demo_user1", email: "demo@demouser.com", password: "123456")
# flygod = User.find_by(username: 'flygod')
i = 1
until photos.empty?
        photo = photos.shift
        post = Post.create!(title: titles.shift, location: locc.shift, user_id: demo_user.id)
        file = open("https://fotobox-seeds.s3-us-west-1.amazonaws.com/#{photo}")
        post.photo.attach(io: file, filename: photo)
        i+=1
end






# Aws.config.update({region:"us-west-1", credentials: Aws::Credentials.new(Rails.application.credentials.aws[:access_key_id], Rails.application.credentials.aws[:secret_access_key])})
# for bucket policy:
# arn:aws:iam::663141238029:user/fotobox-master
# userID
# 663141238029

