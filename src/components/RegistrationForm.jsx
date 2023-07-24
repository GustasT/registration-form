import React from "react";
import { Form } from "./Form";
import { styled } from "styled-components";
import loginImage from "../assets/pictures/illustration.svg";
import brandLogo from "../assets/icons/logo.svg";

const RegistrationFormComponentContainer = styled.div`
  border: 2px solid red;
  border-radius: 5px;
  display: flex;

  .image-container {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end; /* Align items to the bottom of the container */
    align-items: center; /* Center items horizontally within the container */

    background-color: #f2877d;
    padding: 7rem 3rem 7rem 3rem;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }

    .image-text {
      position: absolute;
      color: white;
      padding-top: 1rem;
      font-size: 26px;
      text-align: center;
      margin: 0 auto;
      bottom: 3rem;
    }

    .image-brand {
      /* Add styles for the top left text */
      position: absolute;
      top: 20px; /* Adjust the top value to position it vertically */
      left: 20px; /* Adjust the left value to position it horizontally */
      color: white;
      font-size: 18px;
      background-color: #f2877d;
      padding: 8px;
    }
  }

  .form-container {
    flex: 1;
    padding: 3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RegistrationForm = () => {
  return (
    <RegistrationFormComponentContainer>
      <div className="image-container">
        <img src={loginImage} alt="." />
        <div className="image-brand">
          <img src={brandLogo} alt="." />
        </div>
        <p className="image-text">
          Start for free & Get Attractive offers Today!
        </p>
      </div>
      <div className="form-container">
        <Form />
      </div>
    </RegistrationFormComponentContainer>
  );
};
