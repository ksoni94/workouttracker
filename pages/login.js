import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";

import Button from "../components/Button";
import { DEVICE } from "../constants";

const FormContainer = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  @media ${DEVICE.mobileL} {
    width: 100%;
  }
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4px;
`;

const Header = styled.h1`
  text-align: center;
`;

const StyledLabel = styled.label`
  padding: 8px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await axios
      .post("/api/users/login", data)
      .catch((err) =>
        toast(err.response.data.error, { style: { background: "red" } })
      );
  };
  return (
    <>
      <Header>Log in</Header>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledLabel for="email">Email</StyledLabel>
          <input id="email" {...register("email")} />
          <StyledLabel for="password">Password</StyledLabel>
          <input id="password" type="password" {...register("password")} />
          <ButtonWrapper>
            <Button type="submit" text="Submit" size="small" />
          </ButtonWrapper>
        </StyledForm>
        <Toaster />
      </FormContainer>
    </>
  );
};

export default SignUp;
