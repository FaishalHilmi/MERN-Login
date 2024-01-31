import React from "react";

function Table({ data }) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-start">No</th>
          <th className="text-start">Nama Lengkap</th>
          <th className="text-start">Kelas</th>
          <th className="text-start">Alamat</th>
        </tr>
      </thead>
      <tbody>
        {data.map((mahasiswa, index) => (
          <tr key={index} className="capitalize">
            <td>{index + 1}</td>
            <td>{mahasiswa.nama_lengkap}</td>
            <td>{mahasiswa.kelas}</td>
            <td>{mahasiswa.alamat}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
