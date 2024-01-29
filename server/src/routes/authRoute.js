import express from "express";
import {
  loginController,
  registerController,
} from "../controller/authController.js";

const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);

export default router;
