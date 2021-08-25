import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";

import { toTheNearestTwoPointFive } from "../helpers";
import { DEVICE } from "../constants";
import Button from "../components/Button";

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
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    axios.post("/api/workouts/submit-one-rep-maxes", values);
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for="squatOneRepMax">Squat One Rep Max</Label>
        <StyledInput
          type="number"
          step="0.25"
          id="squatOneRepMax"
          {...register("squatOneRepMax")}
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
          type="number"
          step="0.25"
          id="benchOneRepMax"
          {...register("benchOneRepMax")}
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
          type="number"
          step="0.25"
          id="shoulderPressOneRepMax"
          {...register("shoulderPressOneRepMax")}
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
          type="number"
          step="0.25"
          id="deadliftOneRepMax"
          {...register("deadliftOneRepMax")}
          onChange={(event) => {
            return setDeadliftTrainingMax(
              calculateTrainingMax(parseFloat(event.target.value))
            );
          }}
        />
      </FormGroup>
      <Button type="submit" text="Submit" size="small" />
    </Wrapper>
  );
};

export default TrainingMax;
