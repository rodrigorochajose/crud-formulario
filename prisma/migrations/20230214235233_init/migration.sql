-- AlterTable
ALTER TABLE "Categoria" ALTER COLUMN "observacao" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Locacao" ALTER COLUMN "observacao" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Plano" ALTER COLUMN "observacao" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Reuniao" ALTER COLUMN "duracao" DROP NOT NULL;
