import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const buscarTodosParticipantesReuniao = async (req, res) => {
  try {
    if (!req.body) {
      return await prisma.formularioReuniaotoParticipante.findMany({
        where: { formularioReuniaoId: parseInt(req) },
        select: { participanteId: true },
      });
    }
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

  // variaveis de teste
  const id = 4;
  const participantesNovos = [1, 2, 3];
  try {
    //const participantesAtuais = await buscarTodosParticipantesReuniao(id); //verificar por onde id será passado

    console.log(await buscarTodosParticipantesReuniao(id));

    let intersection = participantesAtuais.filter((x) =>
      participantesNovos.includes(x)
    );

    console.log(intersection);

    res.status(200).json({ message: "Sucesso!" });
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
