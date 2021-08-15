import { compare } from "bcrypt";

import { prisma } from "../_base";

const login = async (req, res) => {
  const user = await prisma.users.findUnique({
    where: {
      email: req.body.email,
    },
  });

  if (!user) {
    return res.status(400).json({
      error: "Either the email or password was incorrect",
    });
  }

  try {
    const validPassword = await compare(req.body.password, user.password);
    if (validPassword) {
      res.status(200).json({ message: "Valid password" });
    } else {
      res.status(400).json({
        error: "Either the email or password was incorrect",
      });
    }
  } catch (err) {
    console.info("[users/login]", err);
    res.status(400).send({ message: err });
  }
};

export default login;
