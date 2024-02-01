import React, { useEffect, useState } from "react";
import Table from "../atoms/table";
import getMahasiswa from "../../service/getMahasiswa.service";
import { useNavigate } from "react-router-dom";
import getUsername from "../../service/getUsername.service";

function Homepage() {
  const [username, setUsername] = useState("");
  const [mahasiswa, setMahasiswa] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = sessionStorage.getItem("token");
    if (getToken) {
      getMahasiswa(getToken, (mahasiswa) => setMahasiswa(mahasiswa));
      getUsername(getToken, (username) => setUsername(username));
    } else {
      navigate("/auth/login");
    }
  }, []);

  return (
    <section className="home">
      <div className="container min-h-screen max-w-[1040px] mx-auto pt-10 font-open-sans">
        <div className="home-wrapper">
          <h1 className="font-bold text-2xl mb-1">
            Selamat datang,{" "}
            <span className="text-blue-700 capitalize">{username}</span> 👋
          </h1>
          <p className="mb-6 text-gray-400">Data mahasiswa</p>

          <div className="table-wrapper bg-white p-6 rounded-lg shadow-md">
            {/* <button className="py-2 px-4 bg-blue-700 text-white rounded-md mb-4">
                Tambah data
              </button> */}
            {/* <Table data={mahasiswa} /> */}
            <Table data={mahasiswa} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
