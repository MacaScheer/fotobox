import React, { useState} from 'react';
import useInfiniteScroll from "./useInfiniteScroll";
import ProfileIndexItem from "./profile_index_item";
const ProfileList = (props) => {
const [listItems, setListItems] 
    
    let userPhotos = props.userPosts.map(post => {
      return (
        <ProfileIndexItem post={post} key={post.photoUrl} openModal={props.openModal} />
      );
    });
    return (
     <div className="profile-photo-index-container">
        <ul className="profile-photo-index">
            {userPhotos}
        </ul>
        {isFetching && 'Fetching more images...'}
    </div>
)

}
export default ProfileList;