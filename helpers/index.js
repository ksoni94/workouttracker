import React from "react";
import styled from "styled-components";
import { verify } from "jsonwebtoken";
import { parse } from "cookie";

export const toTheNearestTwoPointFive = (value) => {
  return Math.round(value / 2.5) * 2.5;
};

const StyledSet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 32px;
`;

export const getSets = (trainingMax, week) => {
  return week.map((section) => {
    return (
      <StyledSet>
        <b>{section.title}</b>
        <div>
          {section.sets.map((set) => {
            const trainingMaxForSet = trainingMax * set.percentage;
            return (
              <p>
                {set.percentage * 100}%:{" "}
                {toTheNearestTwoPointFive(trainingMaxForSet)}kg | Sets:{" "}
                {set.sets} | Reps: {set.reps}
              </p>
            );
          })}
        </div>
      </StyledSet>
    );
  });
};

export const authenticate = async (req) => {
  if (req.headers.cookie) {
    const parsedCookie = parse(req.headers.cookie);
    const token = parsedCookie.auth;

    console.log({ token });

    try {
      const verified = await verify(token, process.env.APP_SECRET);
      return verified;
    } catch (error) {
      console.error(error);
      return null;
    }
  } else {
    return null;
  }
};

export const calculateTrainingMax = (value) => {
  if (!value) return 0;

  const trainingMax = value * 0.9;
  const roundedTrainingMax = toTheNearestTwoPointFive(trainingMax);
  return roundedTrainingMax;
};
