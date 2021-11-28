import { useState } from "react";
import styled from "styled-components";

import TrainingMax from "../components/TrainingMax";
import WeekOne from "../components/weekOne";
import Header from "../components/Header";
import { DEVICE, GTR } from "../constants";
import { prisma } from "./api/_base";
import { authenticate, calculateTrainingMax } from "../helpers";

const Heading = styled.h1`
  padding: 38px 0px;
  text-align: center;
`;

const HeadingWrapper = styled.div`
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

const Home = ({ user, maxes, trainingMaxes }) => {
  const [squatTrainingMax, setSquatTrainingMax] = useState(
    trainingMaxes?.squatTrainingMax || null
  );
  const [benchTrainingMax, setBenchTrainingMax] = useState(
    trainingMaxes?.benchTrainingMax || null
  );
  const [shoulderPressTrainingMax, setShoulderPressTrainingMax] = useState(
    trainingMaxes?.shoulderPressTrainingMax || null
  );
  const [deadliftTrainingMax, setDeadliftTrainingMax] = useState(
    trainingMaxes?.deadliftTrainingMax || null
  );

  return (
    <>
      <Header user={user} />
      <Heading>Five Three One</Heading>
      {user && <Heading>Hey, {user.firstName}!</Heading>}
      <HeadingWrapper>
        <TrainingMax
          setSquatTrainingMax={setSquatTrainingMax}
          setBenchTrainingMax={setBenchTrainingMax}
          setShoulderPressTrainingMax={setShoulderPressTrainingMax}
          setDeadliftTrainingMax={setDeadliftTrainingMax}
          maxes={maxes}
        />
      </HeadingWrapper>
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

    const trainingMaxes = {
      squatTrainingMax: calculateTrainingMax(maxes.squatOneRepMax),
      deadliftTrainingMax: calculateTrainingMax(maxes.deadliftOneRepMax),
      benchTrainingMax: calculateTrainingMax(maxes.benchOneRepMax),
      shoulderPressTrainingMax: calculateTrainingMax(
        maxes.shoulderPressOneRepMax
      ),
    };

    return {
      props: { user, maxes, trainingMaxes },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default Home;
