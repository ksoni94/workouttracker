import { useState } from "react";
import styled from "styled-components";

import TrainingMax from "../components/TrainingMax";
import WeekOne from "../components/weekOne";

const Header = styled.h1`
  padding: 38px 0px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Home = () => {
  const [squatTrainingMax, setSquatTrainingMax] = useState(null);
  const [benchTrainingMax, setBenchTrainingMax] = useState(null);
  const [shoulderPressTrainingMax, setShoulderPressTrainingMax] =
    useState(null);
  const [deadliftTrainingMax, setDeadliftTrainingMax] = useState(null);

  return (
    <>
      <HeaderWrapper>
        <Header>Five Three One</Header>

        <TrainingMax
          setSquatTrainingMax={setSquatTrainingMax}
          setBenchTrainingMax={setBenchTrainingMax}
          setShoulderPressTrainingMax={setShoulderPressTrainingMax}
          setDeadliftTrainingMax={setDeadliftTrainingMax}
        />
      </HeaderWrapper>
      <MainWrapper>
        <WeekOne
          squatTrainingMax={squatTrainingMax}
          benchTrainingMax={benchTrainingMax}
          deadliftTrainingMax={deadliftTrainingMax}
          shoulderPressTrainingMax={shoulderPressTrainingMax}
        />
      </MainWrapper>
    </>
  );
};

export default Home;
