import React from "react";

export const toTheNearestTwoPointFive = (value) => {
  return Math.round(value / 2.5) * 2.5;
};

export const getSets = (trainingMax, week) => {
  return week.map((section) => {
    return (
      <div>
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
      </div>
    );
  });
};
