import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  return(
          <div className={style.item}>
            <img src='https://www.thewrap.com/wp-content/uploads/2019/07/2019-07-19_opt.jpg' />
            {props.message}
            <div>
            <span>like {props.likecount}</span>
            </div>
          </div>
  );
}

export default Post;