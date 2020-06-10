# Fotobox 

https://foto-box.herokuapp.com

Fotobox is a photo-sharing social network inspired by Instagram. Fotobox users can post and share photographs uploaded directly from their local files. Users can follow other users to see their posts, updated in their "feed". Users can "like" and comment on other user's posts.

The application has a Ruby on Rails backend, a PostgreSQL database, and React with a Redux framework on the frontend.

<p align="center">
  <img width="auto" height="auto" object-fit="contain" src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/fotobox_profile_client.png">
</p>

Features:

* New Account Creation, Login, and Demo Login
* User Profile
* Image Feed
* Create Post, Delete Post
* Create Comment, Delete Comment
* Like Post
* Follow Other Users

Implementation:

New account creation, login, and guest login
Passwords are secured using BCrypt to generate a passord_digest. A user session_token is stored in the database to keep track of each user session. When a user successfully logs in, a session token is generated, stored in the database, and stored on the client-side as a browser cookie.

<p align="center">
  <img object-fit="contain" width="auto" height="auto" align="center" src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/configureStore.png">
</p>
<div className="grid-readme" display="flex" >
<p align="center">
Auth Routes and Protected Routes
</p>
<img object-fit="contain" width="auto" height="auto" align="center" src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/protected_routes.png">
<p align="center">
Front End Routes
</p>
<img object-fit="contain" width="auto" height="auto" align="center" src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/App.png">
<p align="center">
Backend Schema (portion)
</p>
<img object-fit="contain" width="auto" height="auto" align="center" src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/schema_portion.png">
<p align="center">
Create Post
</p>
<img object-fit="contain" width="auto" height="auto" align="center" src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/creatPost.png">
<p align="center">
Post Index
</p>
<img object-fit="contain" width="auto" height="auto" align="center" src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/postIndex.png">
<p align="center">
Post Actions
</p>
<img object-fit="contain" width="auto" height="auto" align="center" src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/post_actions.png">
<p align="center">
Users Reducer
</p>
<img object-fit="contain" width="auto" height="auto" align="center" src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/usersReducer.png">
</div>
