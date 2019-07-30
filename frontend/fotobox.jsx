import React from 'react';
import ReactDOM from 'react-dom';
// import { signup, login, logout } from './actions/session_actions';
import configureStore from './store/store.js';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
        // window.fetchPosts = fetchPosts
        // window.dispatch = store.dispatch;
        // window.getState = store.dispatch;
    } else {
        store = configureStore();
        // window.fetchPosts = fetchPosts
        // window.dispatch = store.dispatch;
        // window.getState = store.dispatch;
    }

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);

});
