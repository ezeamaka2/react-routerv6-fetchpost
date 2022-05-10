import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Navbar = () => {
  return (
    <>
        <Container>
        <Header>
            <Logo>
                <NavLink to="/">ReactPost</NavLink>
            </Logo>
            <Nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </Nav>
        </Header>
        </Container>
    </>
  )
}

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    height: 60px;

    a{
        text-decoration: none;
    }
`;

const Logo = styled.span`
    font-weight: bold;
    font-size: 40px;
`;

const Nav = styled.nav`
    padding: 10px;

    a{
        margin-left: 10px;
    }

    a:hover{
        text-decoration: underline;
    }
`

export default Navbar