import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const buscarTodosParticipantesReuniao = async (req, res) => {
  try {
    const todosParticipantes = await prisma.participanteReuniao.findMany({
      orderBy: { participanteReuniaoId: "asc" },
    });
    res.status(200).json(todosParticipantes);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
};

export const buscarParticipantesPorReuniao = async (req, res) => {
  const { id } = req.params;
  try {
    const participantesPorReuniao = await prisma.participanteReuniao.findMany({
      where: { reuniaoId: parseInt(id) },
    });

    res.status(200).json(participantesPorReuniao);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const buscarParticipantes = async (reuniaoId) => {
  return await prisma.participanteReuniao.findMany({
    where: { reuniaoId: parseInt(reuniaoId) },
    select: { participanteId: true },
    orderBy: { participanteId: "asc" },
  });
};

export const criarParticipanteReuniao = async (req, res) => {
  try {
    await prisma.participanteReuniao.createMany({
      data: req.body,
    });
    res.status(200).json({ message: "Reunião Criada com sucesso!" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const criarParticipante = async (informacoes) => {
  var { reuniaoId, participanteId } = informacoes;
  let dados = [];

  try {
    participanteId.forEach((id) => {
      dados.push({
        reuniaoId: parseInt(reuniaoId),
        participanteId: id,
      });
    });

    await prisma.participanteReuniao.createMany({
      data: dados,
    });
  } catch (error) {
    throw new Error("Ocorreu um erro!");
  }
};

export const atualizarParticipanteReuniao = async (req, res) => {
  const { id } = req.params;
  let participantesNovos = req.body.participanteId;
  try {
    const participantes = await buscarParticipantes(id);

    let participantesAtuais = participantes.map((participante) => {
      return participante.participanteId;
    });

    const comumIds = participantesNovos.filter((x) =>
      participantesAtuais.includes(x)
    );

    if (comumIds.length > 0) {
      comumIds.map((item) => {
        participantesAtuais.splice(participantesAtuais.indexOf(item), 1);
        participantesNovos.splice(participantesNovos.indexOf(item), 1);
      });
    }

    let diferenca = participantesAtuais.length - participantesNovos.length;

    if (diferenca) {
      if (diferenca < 0) {
        const participantesAdicionaDiferenca = {
          reuniaoId: id,
          participanteId: participantesNovos.splice(0, (diferenca *= -1)),
        };
        await criarParticipante(participantesAdicionaDiferenca);
      } else {
        const participantesDeletaDiferenca = {
          reuniaoId: id,
          participanteId: participantesAtuais.splice(0, diferenca),
        };
        await deletarParticipanteReuniao(participantesDeletaDiferenca);
      }
    }

    participantesNovos.forEach(async (participanteId, index) => {
      await prisma.participanteReuniao.updateMany({
        where: {
          reuniaoId: parseInt(id),
          participanteId: participantesAtuais[index],
        },
        data: {
          participanteId,
        },
      });
    });

    res
      .status(200)
      .json({ message: "Participantes atualizados com sucesso! " });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deletarParticipanteReuniao = async (req, res) => {
  const { reuniaoId, participanteId } = req;
  try {
    participanteId.forEach(async (id) => {
      await prisma.participanteReuniao.deleteMany({
        where: {
          reuniaoId: parseInt(reuniaoId),
          participanteId: id,
        },
      });
    });
  } catch (error) {
    throw new Error("erro");
  }
};
