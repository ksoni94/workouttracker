import { useState } from "react";
import styled from "styled-components";
import cookie from "cookie";
import { verify } from "jsonwebtoken";

import TrainingMax from "../components/TrainingMax";
import WeekOne from "../components/weekOne";
import { DEVICE, GTR } from "../constants";
import { prisma } from "./api/_base";

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

const Home = ({ result }) => {
  const [squatTrainingMax, setSquatTrainingMax] = useState(null);
  const [benchTrainingMax, setBenchTrainingMax] = useState(null);
  const [shoulderPressTrainingMax, setShoulderPressTrainingMax] =
    useState(null);
  const [deadliftTrainingMax, setDeadliftTrainingMax] = useState(null);

  return (
    <>
      <Header>Five Three One</Header>
      <Header>Hey, {result}!</Header>
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

export const getServerSideProps = async (context) => {
  const parsedCookie = cookie.parse(context.req.headers.cookie);
  const auth = parsedCookie.auth;

  const jwtVerify = await verify(auth, process.env.APP_SECRET);

  const result = await prisma.users.findUnique({
    where: {
      id: jwtVerify.sub,
    },
    select: {
      firstName: true,
      lastName: true,
      email: true,
    },
  });
  console.log(jwtVerify);

  return {
    props: { result: result.firstName },
  };
};

export default Home;
