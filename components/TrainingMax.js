import styled from "styled-components";

import { toTheNearestTwoPointFive } from "../helpers";
import { DEVICE } from "../constants";

const Label = styled.label`
  padding: 4px;
  white-space: nowrap;
`;

const StyledInput = styled.input`
  border-radius: 6px;
  border: none;
`;

const Wrapper = styled.form`
  display: flex;
  gap: 40px;
  padding: 32px 0px;
  @media ${DEVICE.tablet} {
    flex-direction: column;
    gap: 20px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const calculateTrainingMax = (value) => {
  if (!value) return 0;
  console.log(value);
  const trainingMax = value * 0.9;
  const roundedTrainingMax = toTheNearestTwoPointFive(trainingMax);
  return roundedTrainingMax;
};

const TrainingMax = ({
  setSquatTrainingMax,
  setBenchTrainingMax,
  setShoulderPressTrainingMax,
  setDeadliftTrainingMax,
}) => {
  return (
    <Wrapper>
      <FormGroup>
        <Label for="S1RM">Squat One Rep Max</Label>
        <StyledInput
          id="S1RM"
          onChange={(event) => {
            return setSquatTrainingMax(
              calculateTrainingMax(parseFloat(event.target.value))
            );
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="benchOneRepMax">Bench Press One Rep Max</Label>
        <StyledInput
          id="benchOneRepMax"
          onChange={(event) => {
            return setBenchTrainingMax(
              calculateTrainingMax(parseFloat(event.target.value))
            );
          }}
        />
      </FormGroup>

      <FormGroup>
        <Label for="shoulderPressOneRepMax">Shoulder Press One Rep Max</Label>
        <StyledInput
          id="shoulderPressOneRepMax"
          onChange={(event) => {
            return setShoulderPressTrainingMax(
              calculateTrainingMax(parseFloat(event.target.value))
            );
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="deadliftOneRepMax">Deadlift One Rep Max</Label>
        <StyledInput
          id="deadliftOneRepMax"
          onChange={(event) => {
            return setDeadliftTrainingMax(
              calculateTrainingMax(parseFloat(event.target.value))
            );
          }}
        />
      </FormGroup>
    </Wrapper>
  );
};

export default TrainingMax;
