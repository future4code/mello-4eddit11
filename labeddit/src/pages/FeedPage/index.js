import React, { useState, useEffect } from 'react';
import { Get } from '../../services/api';
import CreatePost from '../../components/CreatePost/index';

import { 
  FeedContainer,
  FeedLeft,
  CardContainer,
  FeedRight
}
from './styles';

import { Card } from 'antd';

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
    })
    .catch(error =>{
      console.log(error)
    })

  }

  return (
    <FeedContainer>
      <FeedLeft />
      <CardContainer>
      <CreatePost />
        {posts.map(post => {
          return(
            <Card key={post.id} hoverable  extra={<a href="#">Abrir</a>}
            title={post.username} bordered="true"
              style={{ 
                width: '48.3vw',
                marginBottom: '2.5vh' }}>
              {post.text}
            </Card>
          )
        })}

      </CardContainer>
      <FeedRight />
    </FeedContainer>
  );
}

export default FeedPage;
