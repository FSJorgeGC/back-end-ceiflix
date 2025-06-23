import { Router } from "express";
import PeliculaTendencia from "../db/models/peliculatendencia.model.js";

const router = Router();

// GET /api/peliculas/favoritas
router.get("/", async (_req, res) => {
  try {
    const favoritas = await PeliculaTendencia.find(); // busca todas las guardadas
    res.json(favoritas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener favoritas" });
  }
});




export default router;
