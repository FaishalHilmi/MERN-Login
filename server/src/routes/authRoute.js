import express from "express";
import {
  loggedInController,
  loginController,
  registerController,
} from "../controller/authController.js";
// import authToken from "../middleware/authToken.js";

const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
// router.get("/", authToken, loggedInController);

export default router;
