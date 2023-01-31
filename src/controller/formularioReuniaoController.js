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
  const { visita, data, local, categoriaId, duracao, assunto, participanteId } =
    req.body;

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

    participanteId.map(async (id) => {
      await prisma.FormularioReuniaotoParticipante.create({
        data: {
          formularioReuniaoId: respostaCriada.id,
          participanteId: id,
        },
      });
    });

    res.status(200).json(respostaCriada);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const atualizarResposta = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deletarResposta = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send(error.message);
  }
};
