import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import AuthRouter from "./routes/authRoute.js";

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

app.use("/auth", AuthRouter);
// app.use("/mahasiswa", mahasiswaRoutes);

// app.use((error, req, res, next) => {
//   res.json({
//     message: error.message,
//   });
// });

app.listen(PORT, () => {
  console.log(`Listen at http://localhost:${PORT}`);
});
