import React from "react";
import styled from "styled-components";

import { useAuthenticate } from "../react-query";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = ({ user }) => {
  const isLoggedIn = user;

  const userQuery = useAuthenticate();
  console.log("userQuery", userQuery);

  return (
    <Wrapper>
      This is my header{" "}
      {isLoggedIn ? "and i am logged in" : "and I am logged out"}
    </Wrapper>
  );
};

export default Header;
