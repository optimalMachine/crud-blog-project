import React, { useState } from 'react';
import './Post.css';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useNavigate } from "react-router-dom";


function Post() {
  const [title,setTitle] = useState('');
  const [postText,setPostText] = useState('');
  const postCollectionRef = collection(db,'posts');
  let navigate = useNavigate();

  const writeTitle = (event) =>{
    setTitle(event.target.value);
  };
  const writePost = (event) => {
    setPostText(event.target.value);
  };

  const createPost = async () => {
    await addDoc(postCollectionRef, {title,postText,author:{name:auth.currentUser.displayName,id:auth.currentUser.uid}
    });
    navigate('/');
  };

  return (
    <div className='createPostPage'>
      <div className="container">
        <h1>Create a post.</h1>
        <div className="container__inputs">
          <label>Title: </label>
          <input placeholder='Title...' onChange={writeTitle}></input>
        </div>
        <div className="container__inputs">
          <label>Post: </label>
          <textarea placeholder='Post...' onChange={writePost}/>
        </div>
        <button onClick={createPost}>Submit</button>
      </div>

    </div>
  )
}

export default Post;