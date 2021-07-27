import React from "react";
import styled from "styled-components";

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
