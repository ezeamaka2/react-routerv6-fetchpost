import { useContext } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"
import AppContext from "../context/app-context";

const Post = () => {
  const {posts} = useContext(AppContext)
  
  return (
    <Container>
      {posts.map(post => {
        return <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}`}>Learn More</Link>
        </article>
      })}
    </Container>
  )
}

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`

export default Post