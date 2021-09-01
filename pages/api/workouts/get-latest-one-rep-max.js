import { prisma } from "../_base";

export const getServerSideProps = async (context) => {
  const authenticated = await authenticate(context.req);

  if (authenticated) {
    try {
      const maxes = await prisma.oneRepMax.findMany({
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
      console.log(maxes);
      return maxes;
    } catch (error) {
      console.log(error);
    }
  }

  const oneRepMax = {
    squat: 0,
    bench: 0,
    deadlift: 0,
    press: 0,
  };

  return oneRepMax;
};
