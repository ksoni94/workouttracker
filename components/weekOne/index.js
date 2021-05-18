import styled from "styled-components";

import { getSets } from "../../helpers";
import { WEEK_ONE } from "../../constants";
import { COLORS } from "../../styles/COLORS";

const GreyBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.lightGrey};
  border-radius: 24px;
  width: 950px;
  padding: 8px;
  box-shadow: 5px 5px 20px black;
`;

const ExercisesWrapper = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  margin: 16px;
`;

const Header = styled.h2`
  align-self: center;
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

const WeekOne = ({
  squatTrainingMax,
  benchTrainingMax,
  deadliftTrainingMax,
  shoulderPressTrainingMax,
}) => {
  return (
    <GreyBlock>
      <Header>Week One</Header>
      <ExercisesWrapper>
        <div>
          <h3>Squats</h3>
          {getSets(squatTrainingMax, WEEK_ONE)}
        </div>
        <div>
          <h3>Bench Press</h3>
          {getSets(benchTrainingMax, WEEK_ONE)}
        </div>
        <div>
          <h3>Deadlift</h3>
          {getSets(deadliftTrainingMax, WEEK_ONE)}
        </div>
        <div>
          <h3>Shoulder Press</h3>
          {getSets(shoulderPressTrainingMax, WEEK_ONE)}
        </div>
      </ExercisesWrapper>
      <Guidance />
    </GreyBlock>
  );
};

export default WeekOne;
