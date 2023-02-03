import express from "express";
import bodyParser from "body-parser";
import * as participante from "../controller/participanteController.js";
import * as categoria from "../controller/categoriaController.js";
import * as plano from "../controller/planoController.js";
import * as reuniao from "../controller/ReuniaoController.js";
import * as participanteReuniao from "../controller/participanteReuniaoController.js";

var jsonParser = bodyParser.json();
const router = express.Router();

router
  .get("/participantes", participante.buscarTodosParticipantes)
  .get("/participante/:id", jsonParser, participante.buscarParticipante)
  .post("/participante", jsonParser, participante.criarParticipante)
  .put("/participante/:id", jsonParser, participante.atualizarParticipante)
  .delete("/participante/:id", jsonParser, participante.deletarParticipante);

router
  .get("/categorias", categoria.buscarTodasCategorias)
  .get("/categoria/:id", jsonParser, categoria.buscarCategoria)
  .post("/categoria", jsonParser, categoria.criarCategoria)
  .put("/categoria/:id", jsonParser, categoria.atualizarCategoria)
  .delete("/categoria/:id", jsonParser, categoria.deletarCategoria);

router
  .get("/planos", plano.buscarTodosPlanos)
  .get("/planos/:id", jsonParser, plano.buscarPlano)
  .post("/planos", jsonParser, plano.criarPlano)
  .put("/planos/:id", jsonParser, plano.atualizarPlano)
  .delete("/planos/:id", jsonParser, plano.deletarPlano);

router
  .get("/reunioes", reuniao.buscarTodasReunioes)
  .get("/reuniao/:id", jsonParser, reuniao.buscarReuniao)
  .post("/reuniao", jsonParser, reuniao.criarReuniao)
  .put("/reuniao/:id", jsonParser, reuniao.atualizarReuniao)
  .delete("/reuniao/:id", jsonParser, reuniao.deletarReuniao);

router
  .get(
    "/participantesReuniao",
    participanteReuniao.buscarTodosParticipantesReuniao
  )
  .post(
    "/participanteReuniao",
    jsonParser,
    participanteReuniao.criarParticipanteReuniao
  )
  .put(
    "/participanteReuniao/:id",
    jsonParser,
    participanteReuniao.atualizarParticipanteReuniao
  );

router
  .get(
    "/formularioCoworking",
    formularioCoworking.buscaTodosFormulariosCoworking
  )
  .get(
    "/formularioCoworking/:id",
    jsonParser,
    formularioCoworking.buscaFormularioCoworkingId
  )
  .post(
    "/formularioCoworking",
    jsonParser,
    formularioCoworking.criarFormularioCoworking
  )
  .delete(
    "/formularioCoworking/:id",
    jsonParser,
    formularioCoworking.deletaFormularioCoworking
  );

export default router;
