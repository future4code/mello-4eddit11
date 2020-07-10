import React, { useState, useEffect } from 'react';
import { Put } from '../../services/api';

import { VotePostContainer,
     ArrowStyleUP,
     ArrowStyleDown,
     ArrowContainer
     } from './styles';

import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

function VotePost( {post, getPosts} ) {

    const voteId = post.id;
    const [vote, setVote] = useState(0);
    const [votes, setVotes] = useState(post.votesCount);
    const token = window.localStorage.getItem('token');

    const key = {
        headers: {
          Authorization: token
        }
      }

    const PutVoteUP = () => {

        const body = {
            direction: 1
        }   

        Put(`posts/${voteId}/vote`, body, key )
        .then(response =>{
            setVotes(votes +1)
            console.log(response.data.success);
        })
        .catch(error =>{
            console.log(error.response)
        })

        getPosts()
    }

    const PutVoteDown = () => {

        const body = {
            direction: -1
        }   

        Put(`posts/${voteId}/vote`, body, key )
        .then(response =>{
            setVotes(votes -1)
            console.log(response.data.success);
        })
        .catch(error =>{
            console.log(error.response)
        })

        getPosts()
    }

    return(

        <VotePostContainer>
            <ArrowContainer>
                <ArrowStyleUP active={post.userVoteDirection}>
                    <ArrowUpOutlined onClick={PutVoteUP}/>
                </ArrowStyleUP>
                    {votes}
                <ArrowStyleDown active={post.userVoteDirection}>
                    <ArrowDownOutlined onClick={PutVoteDown} />
                </ArrowStyleDown>
            </ArrowContainer>
            

        </VotePostContainer>
    );
}
export default VotePost;