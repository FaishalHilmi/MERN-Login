import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Table({ data }) {
  const handleDelete = async (id) => {
    const token = sessionStorage.getItem("token");
    const URL = import.meta.env.VITE_REACT_APP_URL;
    try {
      await axios.delete(`${URL}/mahasiswa/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      document.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-start">No</th>
          <th className="text-start">Nama Lengkap</th>
          <th className="text-start">Kelas</th>
          <th className="text-start">Alamat</th>
          <th className="text-start">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan="5">Data kosong</td>
          </tr>
        ) : (
          data.map((mahasiswa, index) => (
            <tr key={index} className="capitalize">
              <td>{index + 1}</td>
              <td>{mahasiswa.nama_lengkap}</td>
              <td>{mahasiswa.kelas}</td>
              <td>{mahasiswa.alamat}</td>
              <td className="flex gap-2">
                <Link
                  to={`/mahasiswa/update-mahasiwa/${mahasiswa.id}`}
                  className="py-2 px-4 bg-green-700 text-white rounded-md"
                >
                  Edit
                </Link>
                <button
                  className="bg-red-600 py-2 px-4 text-white rounded-md"
                  onClick={() => handleDelete(mahasiswa.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default Table;
