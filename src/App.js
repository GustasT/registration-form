import React from "react";

import { Form } from "./components/Form";
import { RegistrationForm } from "./components/RegistrationForm";
import { Container } from "./components/Container";

const App = () => {
  return (
    <>
      <div>
        App
        <Container>
          <RegistrationForm />
        </Container>
      </div>
    </>
  );
};

export default App;
