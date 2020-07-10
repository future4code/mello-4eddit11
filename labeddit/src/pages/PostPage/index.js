import React from 'react';
import { PostDetailContainer } from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';


function PostDetail(){

    const PathParams = useParams();
    const history = useHistory();

    let key = window.localStorage.getItem('token');

    

    return(

        <PostDetailContainer>

        </PostDetailContainer>

    );
}