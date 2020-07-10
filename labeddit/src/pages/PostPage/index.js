import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Get } from '../../services/api';

import { Card } from 'antd';

import {
  PostDetailContent,
  PostLeft,
  PostContainer,
  PostRight
}
from './styles';


function PostDetail(){

    const PathParams = useParams();
    const history = useHistory();
    const [post, setPost] = useState([]);
    const postId = PathParams.id;

    let token = window.localStorage.getItem('token');

    const key = {
      headers: {
        Authorization: token
      }
    }

    const getEspecificPost = async() => {

      await Get(`posts/${postId}`, key)
      .then(response => {
        setPost(response.data.post)
        console.log(response)
      })
      .catch(error =>{
        console.log(error)
      })
    }

    useEffect(() => {
      getEspecificPost()
      verifyToken()
    }, []);

    const verifyToken = () => {

      if(token === null){
        history.push('/')
      }
    }

    return(
        
        <PostDetailContent>
          <PostLeft />
            <PostContainer>
              <Card title={post.username}>
                {post.text}
            </Card> 

            {post.comments && post.comments.map(comment => {
              return(
                <>
                  <hr />
                  <Card key={comment.id}
                    style={{
                      fontSize: '0.9em',
                      backgroundColor: 'lightgray'
                    }}
                  >{comment.text}</Card>
                </>
              );
            })}
            </PostContainer>
          <PostRight />
        </PostDetailContent>
      
     

    );
}
export default PostDetail;