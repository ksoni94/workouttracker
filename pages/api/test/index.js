import { prisma } from "../_base";

const write = async (req, res) => {
  const name = await prisma.users.create({
    data: {
      email: req.body.name,
    },
  });

  res.json({ name });
};

export default write;
