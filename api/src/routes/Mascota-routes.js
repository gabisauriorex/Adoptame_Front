const express = require("express");
const router = express.Router();

const {
  createMascota,
  getMascotas,
  mascotaById,
  deleteMascota,
  updateMascota,
} = require("../controllers-Pet/Mascota-controller");
const Autenticacion = require("../middleware/Autenticacion");

console.log(Autenticacion)

router.get("/", getMascotas); //trae todas las mascotas
router.get("/:id", Autenticacion, mascotaById); //trae por id
router.post("/", Autenticacion, createMascota); //crea una mascota
router.put("/:id",Autenticacion, updateMascota); //actualiza una mascota
router.delete("/:id", deleteMascota); //elimina una mascota

module.exports = router;
