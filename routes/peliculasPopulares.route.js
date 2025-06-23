import express from "express";
import PeliculaPopular from "../db/models/peliculapopular.model.js";
const router = express.Router();

// GET /api/peliculas/favoritas
router.get("/", async (_req, res) => {
  try {
    const populares = await PeliculaPopular.find(); // busca todas las guardadas
    res.json(populares);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener populares" });
  }
});


export default router;