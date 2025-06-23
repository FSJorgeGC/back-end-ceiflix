import mongoose from "mongoose";

const peliculaSchema = new mongoose.Schema({
  tmdbId: Number,
  titulo: String,
  poster: String,
  anio: String,
});

export default mongoose.model("PeliculaPopular", peliculaSchema, "peliculasPopulares");
