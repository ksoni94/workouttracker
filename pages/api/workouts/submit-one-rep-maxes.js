import { prisma } from "../_base";
import { authenticate } from "../../../helpers";

const submitOneRepMaxes = async (req, res, next) => {
  // extract req.body
  // insert userId
  // insert one rep maxes

  const authenticated = await authenticate(req);

  if (!authenticated) {
    res.status(401).json({
      message: "You must be logged in to perform this action",
    });
  }
  try {
    const {
      squatOneRepMax,
      benchOneRepMax,
      shoulderPressOneRepMax,
      deadliftOneRepMax,
    } = req.body;

    await prisma.oneRepMax.create({
      data: {
        userId: authenticated.sub,
        squatOneRepMax,
        benchOneRepMax,
        shoulderPressOneRepMax,
        deadliftOneRepMax,
      },
    });

    res.status(201).json({ message: "Data submitted!" });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

export default submitOneRepMaxes;
