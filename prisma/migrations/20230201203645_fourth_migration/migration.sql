/*
  Warnings:

  - The primary key for the `FormularioReuniaotoParticipante` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `formularioreuniaoparticipanteid` on the `FormularioReuniaotoParticipante` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FormularioReuniaotoParticipante" DROP CONSTRAINT "FormularioReuniaotoParticipante_pkey",
DROP COLUMN "formularioreuniaoparticipanteid",
ADD COLUMN     "formularioReuniaoParticipanteId" SERIAL NOT NULL,
ADD CONSTRAINT "FormularioReuniaotoParticipante_pkey" PRIMARY KEY ("formularioReuniaoParticipanteId");
