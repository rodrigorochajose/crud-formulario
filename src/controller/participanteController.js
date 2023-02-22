import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const buscarTodosParticipantes = async (req, res) => {
  try {
    const todosParticipantes = await prisma.participante.findMany({
      select: {
        id: true,
        nome: true,
        email: true,
        cargo: true,
      },
      orderBy: { id: "asc" },
    });

    res.status(200).json(todosParticipantes);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const buscarParticipante = async (req, res) => {
  try {
    const participante = await prisma.participante.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });

    res.status(200).json(participante);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const criarParticipante = async (req, res) => {
  const { nome, email, cargo } = req.body;

  try {
    const participanteCriado = await prisma.participante.create({
      data: {
        nome,
        email,
        cargo,
      },
    });

    res.status(200).json(participanteCriado);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const atualizarParticipante = async (req, res) => {
  const { nome, email, cargo } = req.body;

  try {
    const participanteAtualizado = await prisma.participante.update({
      where: { id: parseInt(req.params.id) },
      data: {
        nome,
        email,
        cargo,
        updatedAt: new Date(),
      },
    });

    res.status(200).json(participanteAtualizado);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deletarParticipante = async (req, res) => {
  try {
    await prisma.participante.delete({
      where: { id: parseInt(req.params.id) },
    });

    res.status(200).json({ message: "Participante deletado com sucesso!" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
