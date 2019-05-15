import React from 'react';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import styles from './App.module.css';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className={styles.App}>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
