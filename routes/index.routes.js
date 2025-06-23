import { Router } from "express";
import { loginUser, registerUser, getCurrentUser } from "../controllers/auth.controller.js";
const router = Router();


//CRUD
//Rutas de auth
router.post("/auth/login", loginUser);
router.post("/auth/register", registerUser);

// pruebas para traer datos usando nuestro token
router.get("/auth/me", getCurrentUser);
router.get("/protected", (req, res) => {
    res.json({ message: "Ruta protegida, acceso permitido" });
});

export default router;