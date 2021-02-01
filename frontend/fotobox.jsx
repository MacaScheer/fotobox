import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store.js";
import Root from "./components/root";
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
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  Modal.setAppElement(root);
  ReactDOM.render(<Root store={store} />, root);
});
