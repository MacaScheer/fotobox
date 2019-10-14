import React from "react";
import ReactDOM from "react-dom";
// import { logout } from "./actions/session_actions";
import configureStore from "./store/store.js";
import Root from "./components/root";
// import { fetchPosts } from "./actions/post_actions";
// import { fetchUser } from "./actions/user_actions";
import Modal from "react-modal";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = {
      entities: {
        users: { [id]: currentUser }
      },
      session: { id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
    //TESTING//
    // window.fetchPosts = fetchPosts;
    // window.getState = store.getState;
    //TESTING^^//
  } else {
    store = configureStore();

    //TESTING//
    // window.fetchPosts = fetchPosts;
    // window.getState = store.getState;
  }
  //   window.fetchUser = fetchUser;
  const root = document.getElementById("root");
  Modal.setAppElement(root);
  ReactDOM.render(<Root store={store} />, root);
});
