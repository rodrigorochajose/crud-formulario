import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const buscarTodosParticipantesReuniao = async (req, res) => {
  try {
    const todosParticipantes =
      await prisma.formularioReuniaotoParticipante.findMany();

    res.status(200).json(todosParticipantes);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const criarParticipanteReuniao = async (req, res) => {
  //id da reunião será passada pela req -- const reuniaoId

  try {
    participanteId.map(async (id) => {
      await prisma.FormularioReuniaotoParticipante.create({
        data: {
          formularioReuniaoId: reuniaoId,
          participanteId: id,
        },
      });
    });

    res.status(200).json({ message: "Participante(s) inseridos com sucesso!" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const atualizarParticipanteReuniao = async (req, res) => {
  //será recebido pelo req o id da reunião
  const id = 4;
  try {
    /* 
      chamar buscarTodosParticipantesReuniao();
      
    */
    console.log(teste);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deletarParticipanteReuniao = async (req, res) => {
  const participanteId = parseInt(req.params.id);
  try {
    await prisma.FormularioReuniaotoParticipante.delete({
      where: { participanteId },
    });

    res.status(200).json({ message: "Participante Deletado com sucesso!" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
