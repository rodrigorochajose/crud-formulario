/*
  Warnings:

  - The primary key for the `ParticipanteReuniao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `participanteReuniao` on the `ParticipanteReuniao` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ParticipanteReuniao" DROP CONSTRAINT "ParticipanteReuniao_pkey",
DROP COLUMN "participanteReuniao",
ADD COLUMN     "participanteReuniaoId" SERIAL NOT NULL,
ADD CONSTRAINT "ParticipanteReuniao_pkey" PRIMARY KEY ("participanteReuniaoId");
