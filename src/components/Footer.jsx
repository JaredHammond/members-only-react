import styled from 'styled-components';

const StyledFooter = styled.footer`
text-align: center;
font-size: 1.6rem;
padding-bottom: 2rem;
`

function Footer() {
  return (
    <StyledFooter>
      <p>Check out this project on <a href="http://github.com/JaredHammond/members-only-react">Github</a>.</p>
    </StyledFooter>
  )
}

export default Footer