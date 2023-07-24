import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  /* font-size: 24px; */
}
body{
  font-family: 'Poppins', sans-serif;
}
`;

export default GlobalStyle;
