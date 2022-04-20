import styled from "styled-components";

const Button = (props) => {
  const { onClick, text, type, big } = props;

  const StyledButton = styled.button`
    width: ${big ? "100%" : "fit-content"};
    height: ${big ? "4rem" : "2.5rem"};
    max-width: ${big ? "500px" : "fit-content"};

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

  return (
    <StyledButton onClick={onClick} type={type || "button"}>
      {text}
    </StyledButton>
  );
};

export default Button;
