import { useState } from "react";
import styled from "styled-components";

import TrainingMax from "../components/TrainingMax";
import WeekOne from "../components/weekOne";
import { DEVICE, GTR } from "../constants";

const Header = styled.h1`
  padding: 38px 0px;
  text-align: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: scroll;
  padding-left: 10px;
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${GTR.M};

  @media ${DEVICE.mobileM} {
    overflow: hidden;
  }
`;

const Home = () => {
  const [squatTrainingMax, setSquatTrainingMax] = useState(null);
  const [benchTrainingMax, setBenchTrainingMax] = useState(null);
  const [shoulderPressTrainingMax, setShoulderPressTrainingMax] =
    useState(null);
  const [deadliftTrainingMax, setDeadliftTrainingMax] = useState(null);

  return (
    <>
      <Header>Five Three One</Header>
      <HeaderWrapper>
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
