import React, { useState, useEffect } from 'react';
import { Get } from '../../services/api';

function FeedPage() {

  const token = window.localStorage.getItem('token');
  const [posts, setPosts] = useState([]);

  const key = {
    headers: {
      Authorization: token
    }
  }

  useEffect(() =>{
    getPosts()
  }, [setPosts])

  const getPosts = async() => {

    await Get('/posts', key)
    .then(response =>{
      setPosts(response.data.posts)
      console.log(response)
    })
    .catch(error =>{
      console.log(error)
    })

  }

  console.log(posts)
  console.log(key)

  return (
    <>
      <p>Fedd Page</p>
    </>
  );
}

export default FeedPage;
