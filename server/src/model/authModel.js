import { getConnection } from "../config/database.js";

export const login = async (data) => {
  const db = await getConnection();
  const [result] = await db.query(
    `SELECT * FROM user WHERE username = '${data.username}'`
  );

  return result;
};

export const register = async (data) => {
  const db = await getConnection();

  await db.query(
    `INSERT INTO user (username, password, role) VALUES ('${data.username}', '${data.password}', '${data.role}')`
  );

  return true;
};
