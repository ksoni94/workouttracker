-- CreateTable
CREATE TABLE "one_rep_maxes" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usersId" INTEGER NOT NULL,
    "squat_one_rep_max" INTEGER NOT NULL,
    "bench_one_rep_max" INTEGER NOT NULL,
    "deadlift_one_rep_max" INTEGER NOT NULL,
    "shoulder_press_one_rep_max" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "one_rep_maxes" ADD FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
