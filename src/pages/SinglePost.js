import { useContext } from 'react';
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import AppContext from '../context/app-context';

const SinglePost = () => {
  const {posts} = useContext(AppContext);
  const {postId} = useParams();
  const singlePost = posts.find((post) => {return post.id === Number(postId)});
  const {title, body} = singlePost
    
  return (
    <SinglePostDiv>
        <h4>{title}</h4>
        <p>{body}</p>
        <Link to='/posts'>Back to All Posts</Link>
    </SinglePostDiv>
  )
}

const SinglePostDiv = styled.div`
    width: 80%;
    margin: 0 auto;
    border: 2px solid red;
    border-radius: 5px;
    padding: 10px;

    a{
      text-decoration: none;
    }
`;

export default SinglePost