import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import Button from "../components/Button";

const LargeHeader = styled.h1`
  font-size: 10rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

const Home = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <LargeHeader>Welcome!</LargeHeader>
      <ButtonWrapper>
        <Button text="Sign up" onClick={() => router.push("/sign-up")} />
        <Button text="Log in" onClick={() => router.push("/login")} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Home;
