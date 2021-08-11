import omit from "lodash/omit";
import { hash } from "bcrypt";

const createUser = async (req, res) => {
  // validation to check if email exists?

  try {
    const hashed = await hash(req.body.password, 12);
    const data = await prisma.users.create({
      data: {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hashed,
      },
    });
    res.json(omit(data, ["password"]));
  } catch (err) {
    console.info("[users/create]", err);
    res.status(400).send({ message: err });
  }
};

export default createUser;
