photos / posts



{
    entities: {
        photoPosts: {
            1: {
                id: 3,
                photoUrl: "https://instagram.fsan1-2.fna.fbcdn.net/vp/cb2ad05a882e57d90bb232f0fb57a580/",
                title: "Me n Beans on Mt. Baldy",
                authorId: 23,    
            },
            2: {
                id: 4,
                photoUrl: "https://instagram.fsan1-2.fna.fbcdn.net/vp/90934944j343848d1a88323456433c/",
                title: "Just my kinda thing",
                authorId: 12,
                comments: "!",
            },
            3: {
                id: 6,
                photoUrl: "https://instagram.fsan1-2.fna.fbcdn.net/vp/012938098109812309182039f0298a",
                title: "I don't know",
                authorId: 34,
                comments: "?",
            }
        }
        users: {
            1: {
                id: 9,
                username: "dangatangg",
                bio: "🦠🛹",
                authoredPostIds: [12, 45, 9, 53],
                followerIds: [66, 89, 345],
                followingIds: [45, 90, 677]
            },
            2: {
                id: 9,
                username: "stinkyonthebeatsoitsnotnice",
                bio: "Justin ✍🏻🤳🏼😎😅😝🥳😔😐🐸🦞💐☄️🌪🧠🦍💅🏼🕷💆🏻‍♂️🚶🏻‍♂️🚶🏻‍♂️🚶🏻‍♂️🚶🏻‍♂️🍓🥑🦕🗿🎨🎈🗣S🚰🥊vimeo.com / 338769274",
                authoredPostIds: [92, 43, 19, 53],
                followerIds: [63, 889, 50],
                followingIds: [45, 57, 7]
            }
        },
        photoLikes: {
            11: {
                likerId: 34,
                postId: 12,
            },
            12: {
                likerId: 9,
                postId: 3,
            },
            13: {
                likerId: 8,
                postId: 109,
            }
        },
        messages: {
            12:  {
                fromUser: "dangatangg",
                toUser: "stinkyonthebeatsoitsnotnice",
                body: "🐸",
            }
        }
    },
        ui: {
            loading: true/false
        },
        errors: {
            login: ["Incorrect username/password combination"],
            postForm: ["photoPost cannot be empty"],
        },
        session: { currentUserId: 45 }
    }

       
