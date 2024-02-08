import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import AuthRouter from "./routes/authRoute.js";
import UserRouter from "./routes/userRoute.js";
import authToken from "./middleware/authToken.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    method: ["GET", "POST", "PUT", "DELETE"],
    origin: "*",
  })
);
app.use("/assets/images", express.static("public"));

app.use("/auth", AuthRouter);
// app.use(authToken);

app.use("/mahasiswa", UserRouter);

app.use((error, req, res, next) => {
  res.json({
    message: error.message,
  });
});

app.listen(PORT, () => {
  console.log(`Listen at http://localhost:${PORT}`);
});
