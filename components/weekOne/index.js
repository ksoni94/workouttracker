import styled from "styled-components";
import Select from "react-select";
import { ChevronLeft, ChevronRight } from "react-feather";

import { getSets } from "../../helpers";
import { DEVICE, WEEK_ONE } from "../../constants";
import { COLORS } from "../../styles/COLORS";
import { useState } from "react";

const InlineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const StyledButton = styled.button`
  border: none;
  background-color: inherit;
  color: inherit;
  cursor: pointer;
`;

const GreyBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.BLACK_CORAL};
  border-radius: 24px;
  width: 950px;
  padding: 8px;
  box-shadow: 5px 5px 20px black;
`;

const ExerciseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "titleOne titleTwo"
    "setsOne setsTwo";
  margin-left: auto;
  margin-right: auto;

  @media ${DEVICE.mobileL} {
    grid-template-columns: 200px;
    grid-template-areas:
      "titleOne"
      "setsOne"
      "titleTwo"
      "setsTwo";
  }
`;

const Header = styled.h2`
  align-self: center;
  line-height: 0;
  padding: 0 0.5rem;
`;

const ExerciseName = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
`;

const GuidanceText = styled.p`
  padding: 24px;
  margin: auto;
  font-style: italic;
`;

const Guidance = () => {
  return (
    <GuidanceText>
      Day One: Sqaut + Bench, Day Two: Deadlift and Shoulder Press, Day Three:
      Bench + Squat
    </GuidanceText>
  );
};

const StyledSelect = styled(Select)`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

const options = [
  { value: "squats_bench", label: "Squats and Bench Press" },
  { value: "deadlift_shoulders", label: "Deadlift and Shoulder Press" },
];

const customStyles = {
  option: (provided) => ({
    ...provided,
    color: "black",
  }),
};

const WeekOne = ({
  squatTrainingMax,
  benchTrainingMax,
  deadliftTrainingMax,
  shoulderPressTrainingMax,
}) => {
  const [selectedExercises, setSelectedExercises] = useState(null);

  const weekOnClick = () => {
    console.log("change week");
  };

  return (
    <GreyBlock>
      <InlineWrapper>
        <StyledButton onClick={weekOnClick}>
          <ChevronLeft />
        </StyledButton>
        <Header>Week One</Header>
        <StyledButton onClick={weekOnClick}>
          <ChevronRight />
        </StyledButton>
      </InlineWrapper>
      <StyledSelect
        placeholder="Select Exercises..."
        styles={customStyles}
        options={options}
        isSearchable={false}
        onChange={(selectedOption) =>
          setSelectedExercises(selectedOption.value)
        }
      />
      {selectedExercises === "squats_bench" && (
        <ExerciseGrid>
          <ExerciseName style={{ gridArea: "titleOne" }}>Squats</ExerciseName>
          <ExerciseName style={{ gridArea: "titleTwo" }}>Bench</ExerciseName>
          <div style={{ gridArea: "setsOne" }}>
            {getSets(squatTrainingMax, WEEK_ONE)}
          </div>
          <div style={{ gridArea: "setsTwo" }}>
            {getSets(benchTrainingMax, WEEK_ONE)}
          </div>
        </ExerciseGrid>
      )}
      {selectedExercises === "deadlift_shoulders" && (
        <ExerciseGrid>
          <ExerciseName style={{ gridArea: "titleOne" }}>Deadlift</ExerciseName>
          <ExerciseName style={{ gridArea: "titleTwo" }}>
            Shoulder Press
          </ExerciseName>
          <div style={{ gridArea: "setsOne" }}>
            {getSets(deadliftTrainingMax, WEEK_ONE)}
          </div>
          <div style={{ gridArea: "setsTwo" }}>
            {getSets(shoulderPressTrainingMax, WEEK_ONE)}
          </div>
        </ExerciseGrid>
      )}

      <Guidance />
    </GreyBlock>
  );
};

export default WeekOne;
