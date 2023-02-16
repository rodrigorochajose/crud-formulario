import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const buscaTodasLocacoes = async (req, res) => {
  try {
    const locacoes = await prisma.Locacao.findMany({
      select: {
        id: true,
        nome: true,
        telefone: true,
        organizacao: true,
        data: true,
        plano: true,
        observacao: true,
      },
      orderBy: { id: "asc" },
    });

    res.status(200).json(locacoes);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const buscaLocacao = async (req, res) => {
  try {
    const locacao = await prisma.Locacao.findUnique({
      where: { id: parseInt(req.params.id) },
    });

    res.status(200).json(locacao);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const criarLocacao = async (req, res) => {
  const { nome, telefone, organizacao, data, planoId } = req.body;

  try {
    const locacaoCriada = await prisma.Locacao.create({
      data: {
        nome,
        telefone,
        organizacao,
        data,
        planoId,
      },
    });

    res.status(200).json(locacaoCriada);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const atualizarLocacao = async (req, res) => {
  const { nome, telefone, organizacao, data, planoId } = req.body;
  try {
    const locacaoAtualizada = await prisma.Locacao.update({
      where: { id: parseInt(req.params.id) },
      data: {
        nome,
        telefone,
        organizacao,
        data,
        planoId,
      },
    });

    res.status(200).json(locacaoAtualizada);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deletaLocacao = async (req, res) => {
  try {
    await prisma.Locacao.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });

    res
      .status(200)
      .send(`Formulario id: ${req.params.id} deletado com sucesso`);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
