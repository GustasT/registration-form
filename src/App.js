import React, { useState } from "react";
import Button from "./components/Button";
import { ThemeProvider } from "styled-components";
import LightTheme from "./global-styles/themes/LightTheme";
import googleIcon from "./assets/icons/google-icon.png";
import { GlobalStyle } from "./global-styles/GlobalStyle";

const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      <div>
        App
        <Button
          backgroundColor={LightTheme.colors.primary}
          color={LightTheme.text.onPrimary}
        >
          Button
        </Button>
        <Button logo={googleIcon}>Button</Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
