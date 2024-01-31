import jwt from "jsonwebtoken";

const authToken = (req, res, next) => {
  const SECRET_TOKEN = process.env.SECRET_TOKEN;

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token) {
    jwt.verify(token, SECRET_TOKEN, (error, decoded) => {
      if (error) {
        res.status(400).json({
          message: error.message,
          loggedIn: false,
        });
      } else {
        res.locals.jwt = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({
      message: "Unauthenticated",
      loggedIn: false,
    });
  }
};

export default authToken;
