import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

import { prisma } from "../_base";

const login = async (req, res) => {
  const user = await prisma.user.findUnique({
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
      const claims = { sub: user.id, preferred_username: user.firstName };
      const jwt = sign(claims, process.env.APP_SECRET, { expiresIn: "1h" });

      res.setHeader(
        "Set-Cookie",
        serialize("auth", jwt, {
          httpOnly: true,
          path: "/",
          maxAge: 3600,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        })
      );
      res.status(200).json({ message: "setting cookie" });
    } else {
      res.status(400).json({
        error: "Either the email or password was incorrect",
      });
    }
  } catch (err) {
    console.info("[user/login]", err);
    res.status(400).send({ message: err });
  }
};

export default login;
