import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return(
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={style.posts}>
          <Post message={'Hello'} likecount={3} />
          <Post message={'My first post'} likecount={90}/>
        </div>
      </div>
  );
}

export default MyPosts;