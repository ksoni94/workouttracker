/*
  Warnings:

  - You are about to drop the column `usersId` on the `one_rep_maxes` table. All the data in the column will be lost.
  - Added the required column `userId` to the `one_rep_maxes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "one_rep_maxes" DROP CONSTRAINT "one_rep_maxes_usersId_fkey";

-- AlterTable
ALTER TABLE "one_rep_maxes" DROP COLUMN "usersId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "one_rep_maxes" ADD FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
