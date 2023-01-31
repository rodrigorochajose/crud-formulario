import express from "express";
import bodyParser from "body-parser";
import * as participante from "../controller/participanteController.js";
import * as categoria from "../controller/categoriaController.js";
import * as plano from "../controller/planoController.js";
import * as formularioReuniao from "../controller/formularioReuniaoController.js";

var jsonParser = bodyParser.json();
const router = express.Router();

router.get("/participantes", participante.buscarTodosParticipantes);

router.get("/participante/:id", jsonParser, participante.buscarParticipante);

router.post("/participante", jsonParser, participante.criarParticipante);

router.put("/participante/:id", jsonParser, participante.atualizarParticipante);

router.delete(
  "/participante/:id",
  jsonParser,
  participante.deletarParticipante
);

router.get("/categorias", categoria.buscarTodasCategorias);

router.get("/categoria/:id", jsonParser, categoria.buscarCategoria);

router.post("/categoria", jsonParser, categoria.criarCategoria);

router.put("/categoria/:id", jsonParser, categoria.atualizarCategoria);

router.delete("/categoria/:id", jsonParser, categoria.deletarCategoria);

router.get("/planos", plano.buscarTodosPlanos);

router.get("/plano/:id", jsonParser, plano.buscarPlano);

router.post("/plano", jsonParser, plano.criarPlano);

router.put("/plano/:id", jsonParser, plano.atualizarPlano);

router.delete("/plano/:id", jsonParser, plano.deletarPlano);

router.get("/formulariosReuniao", formularioReuniao.buscarTodasRespostas);

router.get(
  "/formularioReuniao/:id",
  jsonParser,
  formularioReuniao.buscarResposta
);

router.post("/formularioReuniao", jsonParser, formularioReuniao.criarResposta);

router.put(
  "/formularioReuniao/:id",
  jsonParser,
  formularioReuniao.atualizarResposta
);

router.delete(
  "/formularioReuniao/:id",
  jsonParser,
  formularioReuniao.deletarResposta
);

export default router;
