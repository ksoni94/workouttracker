import React from "react";
import styled from "styled-components";

import { COLORS } from "../styles/COLORS";

const SIZES = {
  small: {
    width: "80px",
    height: "32px",
  },
  medium: {
    width: "120px",
    height: "40px",
  },
  large: {
    width: "160px",
    height: "64px",
  },
};

const StyledButton = styled.button`
  min-width: ${({ size }) => SIZES[size].width};
  min-height: ${({ size }) => SIZES[size].height};
  background: ${COLORS.PALE_CERULEAN};
  color: black;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
`;

const Button = ({ text, onSubmit, onClick, size = "medium" }) => {
  return (
    <StyledButton onClick={onClick} size={size}>
      {text}
    </StyledButton>
  );
};

export default Button;
