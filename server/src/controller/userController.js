import {
  createMahasiswa,
  deleteMahasiswa,
  getAllMahasiswa,
  getOneMahasiswa,
  updateMahasiswa,
} from "../model/userModel.js";

export const getAllMahasiswaController = async (req, res) => {
  try {
    const result = await getAllMahasiswa();

    res.status(200).json({
      message: "Berhasil Mendapatkan Data",
      data: result,
    });
  } catch (error) {
    res.status(401).json({
      message: "Gagal Mendapatkan Data",
      serverMessage: error,
    });
  }
};

export const getOneMahasiswaController = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await getOneMahasiswa(id);

    res.status(200).json({
      message: "Berhasil Mendapatkan Satu Data",
      data: result,
    });
  } catch (error) {
    res.status(401).json({
      message: "Gagal Mendapatkan Satu Data",
      serverMessage: error,
    });
  }
};

export const createMahasiswaController = async (req, res) => {
  const { nama_lengkap, kelas, alamat } = req.body;
  const { filename } = req.file;

  const dataMahasiswa = {
    nama_lengkap,
    kelas,
    alamat,
    filename,
  };

  try {
    const result = await createMahasiswa(dataMahasiswa);

    res.json({
      message: "Menambahkan data berhasil",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal Mengupate Data",
      serverMessage: error,
    });
  }
};

export const updateMahasiswaController = async (req, res) => {
  const { id } = req.params;
  const { filename } = req.file;
  const { nama_lengkap, kelas, alamat } = req.body;

  const dataMahasiswa = {
    nama_lengkap,
    kelas,
    alamat,
    filename,
  };

  try {
    const result = await updateMahasiswa(dataMahasiswa, filename, id);

    res.status(200).json({
      message: "Berhasil Mengupdate Data",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal Mengupate Data",
      serverMessage: error,
    });
  }
};

export const deleteMahasiswaController = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteMahasiswa(id);

    res.status(200).json({
      message: "Berhasil Menghapus Data",
      data: result,
    });
  } catch (error) {
    res.json.status(500).json({
      message: "Gagal Mengapus Data",
    });
  }
};
