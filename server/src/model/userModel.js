import { getConnection } from "../config/database.js";

export const getAllMahasiswa = async () => {
  const db = await getConnection();
  const SQLQuery = "SELECT * FROM mahasiswa";

  const [result] = await db.query(SQLQuery);

  return result;
};

export const getOneMahasiswa = async (id) => {
  const db = await getConnection();
  const SQLQuery = `SELECT * FROM mahasiswa WHERE id = ${id}`;

  const [result] = await db.query(SQLQuery);

  return result;
};

export const createMahasiswa = async (mahasiswa) => {
  const db = await getConnection();
  const SQLQuery = `INSERT INTO mahasiswa (nama_lengkap, kelas, alamat, link)
                      VALUES ('${mahasiswa.nama_lengkap}', '${mahasiswa.kelas}', '${mahasiswa.alamat}', '${mahasiswa.filename}')`;

  const result = await db.query(SQLQuery);

  return result;
};

export const updateMahasiswa = async (mahasiswa, filename, id) => {
  console.log(filename);
  const db = await getConnection();
  const SQLQuery = `UPDATE mahasiswa 
                    SET nama_lengkap = '${mahasiswa.nama_lengkap}', kelas = '${mahasiswa.kelas}', alamat = '${mahasiswa.alamat}', link = '${filename}' 
                    WHERE id = ${id}`;

  const result = db.query(SQLQuery);

  return result;
};

export const deleteMahasiswa = async (id) => {
  const db = await getConnection();
  const SQLQuery = `DELETE FROM mahasiswa WHERE id = ${id}`;

  const result = db.query(SQLQuery);

  return result;
};
