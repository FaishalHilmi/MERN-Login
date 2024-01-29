import { login, register } from "../model/authModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginController = async (req, res) => {
  const SECRET_TOKEN = process.env.SECRET_TOKEN;

  const data = {
    username: req.body.username,
    password: req.body.password,
  };

  try {
    const result = await login(data);
    const row = result[0];

    if (result.length > 0) {
      // username benar

      const match = await bcrypt.compare(data.password, row.password);

      if (match) {
        // Daftar token
        const payload = { username: row.username };
        const token = jwt.sign(payload, SECRET_TOKEN, { expiresIn: "1day" });

        return res.status(200).json({
          id: row.id,
          username: row.username,
          role: row.role,
          succes: true,
          token: token,
        });
      } else {
        return res.status(400).json({
          message: "Password salah",
          succes: false,
        });
      }
    } else {
      return res.status(400).json({
        message: "Username salah",
        succes: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

export const registerController = async (req, res) => {
  const hashPassword = bcrypt.hashSync(req.body.password, 10);

  const data = {
    username: req.body.username,
    password: hashPassword,
    role: req.body.role,
  };

  try {
    await register(data);

    return res.status(200).json({
      message: "Register Berhasil",
      succes: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
