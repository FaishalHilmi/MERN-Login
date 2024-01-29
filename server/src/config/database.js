import { createPool } from "mysql2/promise";

export const getConnection = async () => {
  try {
    const pool = createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    return pool;
  } catch (error) {
    console.log(error);
  }
};
