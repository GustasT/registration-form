import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center;
  border: 1px solid;
  border-color: ${(props) =>
    props.backgroundColor
      ? "transparent"
      : "lightgray"}; /* Conditional border color */
  border-radius: 5px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background-color: ${(props) => props.backgroundColor || "transparent"};

  color: ${(props) => props.color || props.theme.text.onBody};

  cursor: pointer;

  img {
    margin-right: 8px;
    height: 1rem;
    width: 1rem;
  }
`;

const Button = ({ children, backgroundColor, color, logo }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} color={color}>
      {logo && <img src={logo} alt="logo" />}
      {children}
    </StyledButton>
  );
};

export default Button;
