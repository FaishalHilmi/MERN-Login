import React, { useEffect, useState } from "react";
import Table from "../atoms/Table";
import axios from "axios";

function Homepage() {
  const [token, setToken] = useState("");
  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    const getToken = sessionStorage.getItem("token");
    if (getToken) {
      getMahasiswa(getToken);
    }
  }, []);

  const getMahasiswa = async (token) => {
    const URL = import.meta.env.VITE_REACT_APP_URL;

    try {
      const response = await axios.get(`${URL}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMahasiswa(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="home">
      <div className="container min-h-screen max-w-[1040px] mx-auto pt-10 font-open-sans">
        <div className="home-wrapper">
          <h1 className="font-bold text-2xl mb-1">
            Selamat datang, <span className="text-blue-700">Jhon Doe</span> 👋
          </h1>
          <p className="mb-6 text-gray-400">Data mahasiswa</p>

          <div className="table-wrapper bg-white p-6 rounded-lg shadow-md">
            {/* <button className="py-2 px-4 bg-blue-700 text-white rounded-md mb-4">
                Tambah data
              </button> */}
            <Table data={mahasiswa} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
