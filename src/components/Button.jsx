import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: ${(props) =>
    props.backgroundColor ? "transparent" : "lightgray"};
  border-radius: 5px;
  padding: 10px 1rem 10px 1rem;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  margin: 1rem 0 1rem 0;

  color: ${(props) => props.color};

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
