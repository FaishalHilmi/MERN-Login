import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Table({ data }) {
  const handleHapus = () => {
    console.log("hapus");
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
                <Button color="bg-red-600" text="Hapus" handle={handleHapus} />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default Table;
