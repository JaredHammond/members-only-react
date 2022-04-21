import styled from "styled-components";

const StyledButton = styled.button`
width: ${props => props.big ? "100%" : "fit-content"};
height: ${props => props.big ? "4rem" : "2.5rem"};
max-width: ${props => props.big ? "500px" : "fit-content"};

background: #5e4ae3;
border-radius: 4px;
border: 0.2rem solid #5e4ae3;
color: #fff;
font-size: 1.6rem;
font-weight: bold;


&:hover {
  background: #fff;
  color: #5e4ae3;
}
`

const Button = (props) => {
  const { onClick, text, type, big } = props;

  return (
    <StyledButton onClick={onClick} type={type || "button"}>
      {text}
    </StyledButton>
  );
};

export default Button;
