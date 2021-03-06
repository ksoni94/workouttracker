import omit from "lodash/omit";
import { hash } from "bcrypt";

import { prisma } from "../_base";

const createUser = async (req, res) => {
  const emailExists = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });

  if (emailExists) {
    return res.status(400).json({
      error:
        "Couldn't create a new user, if you've already signed up please log in!",
    });
  }

  try {
    const hashed = await hash(req.body.password, 12);
    const data = await prisma.user.create({
      data: {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hashed,
      },
    });
    res.status(200).json(omit(data, ["password"]));
  } catch (err) {
    console.info("[users/create]", err);
    res.status(400).send({ message: err });
  }
};

export default createUser;
