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

app.use("/auth", AuthRouter);
app.use(authToken);

app.use(UserRouter);

// app.get("/", authToken, async (req, res) => {
//   const db = await getConnection();

//   const SQLquery = "SELECT * FROM mahasiswa";

//   try {
//     const [result] = await db.query(SQLquery);

//   } catch (error) {
//     res.status(401).json({
//       message: error,
//     });
//   }
// });

// const result = await db.query(SQLquery, (error, result) => {
//   if (error)
//     return res.status(400).json({
//       message: error.message,
//     });

//   return res.status(200).json({
//     message: "Berhasil mendapatkan data",
//     data: result,
//   });
// }
// );

app.use((error, req, res, next) => {
  res.json({
    message: error.message,
  });
});

app.listen(PORT, () => {
  console.log(`Listen at http://localhost:${PORT}`);
});
