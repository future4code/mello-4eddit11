import React from 'react';
import { PostDetailContent } from './styles';
import { useParams, useHistory } from 'react-router-dom';


function PostDetail(){

    const PathParams = useParams();
    const history = useHistory();

    let key = window.localStorage.getItem('token');

    

    return(

      <PostDetailContent>
        olá
      </PostDetailContent>

    );
}
export default PostDetail;