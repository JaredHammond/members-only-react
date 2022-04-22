import styled from 'styled-components';

const StyledLink = styled.a`
width: 7.5rem;
height: 100%;
color: #5e4ae3;
font-size: 2rem;
flex: 1;
background: inherit;
outline: none;
`

function NavLink({ href, children }) {
  return (
    <StyledLink href={href} >
      {children}
    </StyledLink>
  );
}

<a href="http://"></a>


export default NavLink;