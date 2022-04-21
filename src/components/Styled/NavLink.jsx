import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
width: 7.5rem;
height: 100%;
color: #5e4ae3;
font-size: 2rem;
flex: 1;
`

function NavLink({ link, children }) {
  return (
    <StyledLink to={link}>
      {children}
    </StyledLink>
  );
}


export default NavLink