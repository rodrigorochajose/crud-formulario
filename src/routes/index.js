import express from "express";
import bodyParser from "body-parser";
import * as participante from "../controller/participanteController.js";
import * as categoria from "../controller/categoriaController.js";
import * as plano from "../controller/planoController.js";
import * as formularioReuniao from "../controller/formularioReuniaoController.js";
import * as formularioReuniaoParticipante from "../controller/formularioReuniaoParticipanteController.js";
import * as formularioCoworking from "../controller/formularioCoworkingController.js"

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
  .get("/formulariosReuniao", formularioReuniao.buscarTodasRespostas)
  .get("/formularioReuniao/:id", jsonParser, formularioReuniao.buscarResposta)
  .post("/formularioReuniao", jsonParser, formularioReuniao.criarResposta)
  .put(
    "/formularioReuniao/:id",
    jsonParser,
    formularioReuniao.atualizarResposta
  )
  .delete(
    "/formularioReuniao/:id",
    jsonParser,
    formularioReuniao.deletarResposta
  );

router
  .get(
    "/formularioReuniaoParticipantes",
    formularioReuniaoParticipante.buscarTodosParticipantesReuniao
  )
  .post(
    "/formularioReuniaoParticipante",
    jsonParser,
    formularioReuniaoParticipante.criarParticipanteReuniao
  )
  .put(
    "/formularioReuniaoParticipante/:id",
    jsonParser,
    formularioReuniaoParticipante.atualizarParticipanteReuniao
  )
  .delete(
    "/formularioReuniaoParticipante/:id",
    jsonParser,
    formularioReuniaoParticipante.deletarParticipanteReuniao
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
  )

export default router;
