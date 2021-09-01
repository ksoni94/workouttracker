import { useState } from "react";
import styled from "styled-components";

import TrainingMax from "../components/TrainingMax";
import WeekOne from "../components/weekOne";
import { DEVICE, GTR } from "../constants";
import { prisma } from "./api/_base";
import { authenticate } from "../helpers";

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

const Home = ({ user, maxes }) => {
  const [squatTrainingMax, setSquatTrainingMax] = useState(null);
  const [benchTrainingMax, setBenchTrainingMax] = useState(null);
  const [shoulderPressTrainingMax, setShoulderPressTrainingMax] =
    useState(null);
  const [deadliftTrainingMax, setDeadliftTrainingMax] = useState(null);

  return (
    <>
      <Header>Five Three One</Header>
      {user && <Header>Hey, {user.firstName}!</Header>}
      <HeaderWrapper>
        <TrainingMax
          setSquatTrainingMax={setSquatTrainingMax}
          setBenchTrainingMax={setBenchTrainingMax}
          setShoulderPressTrainingMax={setShoulderPressTrainingMax}
          setDeadliftTrainingMax={setDeadliftTrainingMax}
          maxes={maxes}
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

export const getServerSideProps = async (context) => {
  const authenticated = await authenticate(context.req);

  if (authenticated) {
    const user = await prisma.user.findUnique({
      where: {
        id: authenticated.sub,
      },
      select: {
        firstName: true,
        lastName: true,
        email: true,
      },
    });

    const maxesArray = await prisma.oneRepMax.findMany({
      where: {
        userId: authenticated.sub,
      },
      select: {
        squatOneRepMax: true,
        deadliftOneRepMax: true,
        benchOneRepMax: true,
        shoulderPressOneRepMax: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 1,
    });

    const maxes = maxesArray[0];

    return {
      props: { user, maxes },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default Home;
