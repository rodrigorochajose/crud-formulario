/*
  Warnings:

  - You are about to drop the `FormularioCoworking` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FormularioReuniao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FormularioReuniaotoParticipante` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FormularioCoworking" DROP CONSTRAINT "FormularioCoworking_planoId_fkey";

-- DropForeignKey
ALTER TABLE "FormularioReuniao" DROP CONSTRAINT "FormularioReuniao_categoriaId_fkey";

-- DropForeignKey
ALTER TABLE "FormularioReuniaotoParticipante" DROP CONSTRAINT "FormularioReuniaotoParticipante_formularioReuniaoId_fkey";

-- DropForeignKey
ALTER TABLE "FormularioReuniaotoParticipante" DROP CONSTRAINT "FormularioReuniaotoParticipante_participanteId_fkey";

-- DropTable
DROP TABLE "FormularioCoworking";

-- DropTable
DROP TABLE "FormularioReuniao";

-- DropTable
DROP TABLE "FormularioReuniaotoParticipante";

-- CreateTable
CREATE TABLE "Reuniao" (
    "id" SERIAL NOT NULL,
    "visita" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "local" TEXT NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "duracao" TEXT NOT NULL,
    "assunto" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reuniao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParticipanteReuniao" (
    "participanteReuniao" SERIAL NOT NULL,
    "reuniaoId" INTEGER NOT NULL,
    "participanteId" INTEGER NOT NULL,

    CONSTRAINT "ParticipanteReuniao_pkey" PRIMARY KEY ("participanteReuniao")
);

-- CreateTable
CREATE TABLE "Coworking" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "organizacao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "planoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Coworking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reuniao" ADD CONSTRAINT "Reuniao_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipanteReuniao" ADD CONSTRAINT "ParticipanteReuniao_reuniaoId_fkey" FOREIGN KEY ("reuniaoId") REFERENCES "Reuniao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipanteReuniao" ADD CONSTRAINT "ParticipanteReuniao_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "Participante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coworking" ADD CONSTRAINT "Coworking_planoId_fkey" FOREIGN KEY ("planoId") REFERENCES "Plano"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
