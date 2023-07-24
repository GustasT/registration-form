import React, { useContext } from "react";
import Button from "./Button";
import googleLogo from "../assets/icons/google-icon.png";
import facebookLogo from "../assets/icons/facebook-icon-negative.png";
import styled from "styled-components";
import { Container } from "./Container";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 300;
    padding-bottom: 0.25rem;
  }

  input {
    width: 100%;
    padding: 10px;
    padding-left: 40px;
    margin-bottom: 1rem;
    border: 2px solid lightgray; /* Default border color */
    border-radius: 5px;
    transition: border-color 0.2s; /* Add a smooth transition effect */

    &:focus {
      outline: none; /* Remove the default focus outline */
      border-color: #f2877d; /* Change the border color on focus */
    }
  }

  i {
    padding: 10px;
    min-width: 40px;
    position: absolute;
  }
`;

const FormComponentContainer = styled.div`
  padding: 20px;

  .title {
    font-size: 32px;
    font-weight: 500;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 14px;
  }

  .login-link {
    color: #f2877d;
    cursor: pointer;
    font-size: 14px;
  }

  .buttons-container {
    display: flex;
    justify-content: space-between;

    button {
      width: 47%;
    }
  }

  .seperator-container {
    font-size: 28px;
    font-weight: 300;
    text-align: center;
    margin: 0 auto;
    margin: 1rem 0 1rem 0;
  }
`;

export const Form = () => {
  return (
    <FormComponentContainer>
      <h2 className="title">Get Started</h2>
      <p className="subtitle">Already have an account?</p>
      <span className="login-link">Log In</span>

      <div className="buttons-container">
        <Button logo={googleLogo}>sign up</Button>
        <Button backgroundColor={"#4F70B5"} logo={facebookLogo} color={"#fff"}>
          sign up
        </Button>
      </div>

      <div className="seperator-container">
        <span className="seperator">Or</span>
      </div>

      <StyledForm>
        <label for="name">Name</label>
        <div>
          <i class="fa fa-user icon"></i>
          <input id="name" name="name" type="text" placeholder="Joy Shaheb" />
        </div>

        <label for="email">Email</label>
        <div>
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="abc@gmail.com"
          />
        </div>

        <label for="password">Password</label>
        <div>
          <i class="fa fa-lock" aria-hidden="true"></i>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
          />
        </div>

        <Button backgroundColor={"#F2877D"} color={"#fff"}>
          Submit
        </Button>
      </StyledForm>
    </FormComponentContainer>
  );
};
