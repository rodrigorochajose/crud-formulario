import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const buscarTodasCategorias = async (req, res) => {
  try {
    const todasCategorias = await prisma.categoria.findMany({
      select: {
        id: true,
        descricao: true,
      },
      orderBy: { id: "asc" },
    });

    res.status(200).json(todasCategorias);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const buscarCategoria = async (req, res) => {
  try {
    const categoria = await prisma.categoria.findUnique({
      where: { id: parseInt(req.params.id) },
    });

    res.status(200).json(categoria);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const criarCategoria = async (req, res) => {
  const { descricao, observacao } = req.body;
  try {
    const categoriaCriada = await prisma.categoria.create({
      data: {
        descricao,
        observacao,
      },
    });

    res.status(200).json(categoriaCriada);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const atualizarCategoria = async (req, res) => {
  const { descricao, observacao } = req.body;
  try {
    const categoriaAtualizada = await prisma.categoria.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        descricao,
        observacao,
        updatedAt: new Date(),
      },
    });

    res.status(200).json(categoriaAtualizada);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deletarCategoria = async (req, res) => {
  try {
    await prisma.categoria.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });

    res.status(200).json({ message: "Categoria deletada com sucesso!" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
