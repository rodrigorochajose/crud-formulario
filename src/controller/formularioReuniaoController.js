import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const buscarTodasRespostas = async (req, res) => {
  try {
    const todasRespostas = await prisma.formularioReuniao.findMany();

    res.status(200).json(todasRespostas);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const buscarResposta = async (req, res) => {
  try {
    const resposta = await prisma.formularioReuniao.findUnique({
      where: { id: parseInt(req.params.id) },
    });

    res.status(200).json(resposta);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const criarResposta = async (req, res) => {
  const { visita, data, local, categoriaId, duracao, assunto } = req.body;

  try {
    const respostaCriada = await prisma.formularioReuniao.create({
      data: {
        visita,
        data,
        local,
        categoriaId,
        duracao,
        assunto,
      },
    });

    res.status(200).json(respostaCriada);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const atualizarResposta = async (req, res) => {
  const { visita, data, local, categoriaId, duracao, assunto } = req.body;

  try {
    const respostaAtualizada = await prisma.formularioReuniao.update({
      where: {
        id: req.params.id,
      },
      data: {
        visita,
        data,
        local,
        categoriaId,
        duracao,
        assunto,
      },
    });

    res.status(200).json(respostaAtualizada);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deletarResposta = async (req, res) => {
  try {
    await prisma.formularioReuniao.delete({
      where: { id: parseInt(req.params.id) },
    });

    res.status(200).json({ message: "Resposta deletada com sucesso!" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
