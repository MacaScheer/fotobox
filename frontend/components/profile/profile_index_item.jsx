import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
export default function ProfileIndexItem({ post, openModal }) {
    const { id, likers, commentIds, photoUrl } = post;
    return (
        <li key={id}>
          <div className="image-container">
            <div onClick={() => openModal({ postId: id })}>
              <img className="user-page-photos" src={photoUrl} />
              <div className="image-overlay">
                <p className="image-overlay-text">
                  <span className="overlay-heart">&#9829;</span>
                  {likers ? likers.length : 0}
                  <i className="comment" aria-hidden="true">
                    &#x1f4ac;
                  </i>
                  {commentIds ? commentIds.length : 0}
                </p>
              </div>
            </div>
          </div>
        </li>
      );
}
