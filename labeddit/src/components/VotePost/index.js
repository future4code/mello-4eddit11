import React, { useState, useEffect } from 'react';
import { Put } from '../../services/api';
import { useHistory } from 'react-router-dom';
import CreatePost from '../../components/CreatePost/index';

import { VotePostContainer, ArrowStyle } from './styles';

import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

function VotePost( {post} ) {

    const voteId = post.id;
    const userVoteDirection = post.userVoteDirection

    const [vote, setVote] = useState(0);

    const PutVote = (userChoice) => {

        const body = {
            direction: userVoteDirection
        }

        if(userVoteDirection === 0){

        }
        

        Put(`posts/:postId/vote`)
        .then(response =>{
            console.log(response.data);
        })
        .catch(error =>{
            console.log(error.response)
        })
    }

    return(

        <VotePostContainer>
            <ArrowStyle>
            <ArrowUpOutlined onClick={PutVote}/>
                {post.votesCount}
            <ArrowDownOutlined onClick={PutVote} />
            </ArrowStyle>

        </VotePostContainer>
    );
}
export default VotePost;