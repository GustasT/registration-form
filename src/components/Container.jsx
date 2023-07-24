import React from "react";
import { styled } from "styled-components";

const StyledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
`;

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
