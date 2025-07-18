import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import peliculasTendenciaRoutes from "./routes/peliculasTendencia.routes.js";
import peliculasPopularesRoutes from "./routes/peliculasPopulares.route.js";
import indexRoutes from "./routes/index.routes.js"; // o "./routes/auth.routes.js" si quieres ser más específico


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/peliculasTendencia", peliculasTendenciaRoutes);
app.use("/api/peliculasPopulares", peliculasPopularesRoutes);
app.use("/api/v1", indexRoutes);



mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Mongo conectado"))
  .catch(err => console.error("❌ Error Mongo:", err));

app.listen(3000, () => console.log("🚀 Backend en http://localhost:3000"));

