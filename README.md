<h1 align="center">Fotobox</h1>
<div align="center">Fotobox is a photo-sharing social network inspired by Instagram. Fotobox users can post and share photographs uploaded directly from their local files. Users can follow other users to see their posts, updated in their "feed". Users can "like" and comment on other user's posts.</div>

<div align="center">
  <!-- Stability -->
<img src="https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square"
      alt="API stability" />
  <!-- NPM version -->
  <img src="https://img.shields.io/badge/node-%3E%3D%206.0.0-brightgreen"
      alt="NPM version" />
  <!-- Build Status -->
 <img src="https://img.shields.io/badge/build-passing-brightgreen"
      alt="Build Status" />
</div>

[Live Site][1]


<p align="center">
  <img width="auto" height="auto" object-fit="contain" src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/fotobox_profile_client.png">
</p>

## Table of Contents

---

- [Features](#features)
- [Technology](#technology)
- [API](#express)
- [Setup](#setup)

## Features

- Login / Registration Authentication
- AWS Storage
- React Redux Store
- Post CRUD
- Create and Delete Comments
- Follow/Unfollow Users
- Like/Unlike Posts
- Number of Followers, Likes, Comments on Posts
- Image Feed
- User Profile


### Technologies and Technical Challenges

Fotobox is a minimal viable product that tackles three challenges in application development, software engineering, and user experience. 

## Technology

### Backend

+ Postgresql
+ Rails 5
+ Active Records
+ BCrypt
+ jbuilder
+ AWS S3

### Frontend

+ Nodejs
+ React
+ Redux
+ jQuery

### Docker Services

+ db - Postgres
+ web - Rails
+ frontend - React


#### User Account Authentification

Passwords are secured using the `BCrypt` gem to generate a *password digest*. 
A user's login session is tracked by a generated *session token* stored in the database and on the client-side as a browser cookie.

```ruby
def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = new_session_token
        self.save!
        self.session_token
    end
```


### Authentication
Implements Authentication with BCrypt & JavaScript Web Token

```js
// config

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("./keys");

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      done();
    })
  );
};
```

### AWS

Setting up aws configuration for aws file storage.

```js
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const ACCESS_KEY = require("../config/keys").AWS_ACCESS_KEY;
const SECRET_ACCESS_KEY = require("../config/keys").AWS_SECRET_ACCESS_KEY;

aws.config.update({
  secretAccessKey: SECRET_ACCESS_KEY,
  accessKeyId: ACCESS_KEY,
  region: "us-east-2"
});
var s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "audio/mp3" ||
    file.mimetype === "audio/wav" ||
    file.mimetype === "audio/flac"
  ) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Invalid Mime Type, only MP3, WAV and FLAC allowed" + file.mimetype
      ),
      false
    );
  }
};

var upload = multer({
  fileFilter,
  storage: multerS3({
    s3,
    bucket: "echo-hive-dev",
    acl: "public-read",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: "TESTING_META_DATA" });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});
```

--- -->

<!-- ### MongoDB Models

Users

```js

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

```
Tracks 

```js

const TrackSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    trackname: {
        type: String,
        required: true
    },
    comment_ids: [{
        type: Schema.Types.ObjectId,
        ref: 'comments'
    }],
    src_url: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
```

Comments

```js
const CommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  username: {  //added this, still testing
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  track: {
    type: Schema.Types.ObjectId,
    ref: "tracks"
  }
});
```
### Express

API Routes

+ `/api/users/` - Register / Login users
+ `/api/tracks/` - Tracks CRUD
+ `/api/comments/` - User Comments CRUD

### React Store

Frontend React-Redux store layout.

```js
{
    entities: {
        users: {
                0: {
                    id: 0,
                    username: 'string',
                    profile_avatar_url: `path/to/image`
                }
        },
        tracks: {
            0: {
                id: 0,
                artist_id: 1,
                comment_id: [1,2,3],
                name: 'string',
            }
        },
        comments: {
            0 : {
                id: 0,
                track_id: 1,
                author_id: 0,
                body: 'string'
            }
        }
    },
    errors: {
        session: [],
        profile: []
    },
    session: {
        userId: 0
    }
}
```

# Setup

Create a new `dev_keys.js` in `config/`

```js
module.exports = {
    mongoURI: "<MONGODB_URL>",
  secretOrKey: "<KEY>",
  AWS_ACCESS_KEY: "<AWS_KEY>",
  AWS_SECRET_ACCESS_KEY: "<AWS_SECRET_KEY>"
  }
```

Running local dev

```sh
$ npm install && npm install --prefix frontend
$ npm run dev 
``` -->

[1]: https://foto-box.herokuapp.com