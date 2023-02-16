/*
  Warnings:

  - Added the required column `observacao` to the `Categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `observacao` to the `Plano` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Categoria" ADD COLUMN     "observacao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Locacao" ALTER COLUMN "data" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Plano" ADD COLUMN     "observacao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reuniao" ALTER COLUMN "data" SET DATA TYPE TEXT;
