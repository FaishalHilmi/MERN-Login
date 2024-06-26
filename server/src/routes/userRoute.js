import express from "express";
import {
  createMahasiswaController,
  deleteMahasiswaController,
  getAllMahasiswaController,
  getOneMahasiswaController,
  updateMahasiswaController,
} from "../controller/userController.js";
import upload from "../middleware/multer.js";
import authToken from "../middleware/authToken.js";

const router = express.Router();

router.get("/", getAllMahasiswaController);
router.get("/:id", getOneMahasiswaController);

router.use(authToken);
router.post("/", upload.single("images"), createMahasiswaController);
router.patch("/:id", upload.single("images"), updateMahasiswaController);
router.delete("/:id", deleteMahasiswaController);

export default router;
