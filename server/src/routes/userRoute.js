import express from "express";
import {
  createMahasiswaController,
  deleteMahasiswaController,
  getAllMahasiswaController,
  updateMahasiswaController,
} from "../controller/userController.js";

const router = express.Router();

router.get("/", getAllMahasiswaController);
router.post("/", createMahasiswaController);
router.put("/:id", updateMahasiswaController);
router.delete("/:id", deleteMahasiswaController);

export default router;
