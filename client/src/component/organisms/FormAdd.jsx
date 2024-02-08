import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LabeledInput from "../molecules/LabeledInput";
import Button from "../atoms/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormAdd() {
  const [preview, setPreview] = useState("");
  const [gambar, setGambar] = useState("");
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [alamat, setAlamat] = useState("");
  const navigate = useNavigate();

  const handleLoadImage = (event) => {
    const image = event.target.files[0];
    const imagePreview = URL.createObjectURL(image);

    setGambar(image);
    setPreview(imagePreview);
  };

  const changeNama = (event) => {
    setNama(event.target.value);
  };

  const changeKelas = (event) => {
    setKelas(event.target.value);
  };

  const changeAlamat = (event) => {
    setAlamat(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const URL = import.meta.env.VITE_REACT_APP_URL;
    const token = sessionStorage.getItem("token");

    const dataMahasiswa = new FormData();
    dataMahasiswa.append("nama_lengkap", nama);
    dataMahasiswa.append("kelas", kelas);
    dataMahasiswa.append("alamat", alamat);
    dataMahasiswa.append("images", gambar);

    try {
      await axios.post(`${URL}/mahasiswa`, dataMahasiswa, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="add-mahasiswa font-open-sans">
        <div className="container-add-mahasiswa min-h-screen max-w-[1040px] mx-auto pt-10">
          <div className="wrapper-add-mahasiswa">
            <div className="form-wrapper flex justify-center">
              <div className="form bg-white p-6 rounded-lg w-2/4">
                <div className="top-section flex justify-between items-center mb-6">
                  <Link
                    to="/"
                    className="py-2 px-4 bg-green-600 text-white rounded-md"
                  >
                    Kembali
                  </Link>
                  <h1 className="mt-4 text-xl font-bold text-gray-500">
                    Tambah Data
                  </h1>
                </div>
                <hr />
                <form action="POST" className="mt-4" onSubmit={handleSubmit}>
                  <LabeledInput
                    type="text"
                    name="nama_lengkap"
                    text="Nama Lengkap"
                    handle={changeNama}
                  />
                  <LabeledInput
                    type="text"
                    name="kelas"
                    text="Kelas"
                    handle={changeKelas}
                  />
                  <LabeledInput
                    type="text"
                    name="alamat"
                    text="Alamat"
                    handle={changeAlamat}
                  />
                  <LabeledInput
                    type="file"
                    name="link"
                    text="Gambar"
                    handle={handleLoadImage}
                  />
                  <div className="preview">
                    <figure>
                      {preview ? (
                        <img src={preview} alt="preview" className="w-48" />
                      ) : null}
                    </figure>
                  </div>

                  <div className="button mt-6">
                    <Button
                      color="bg-blue-700"
                      text="Submit"
                      //   handle={changeUsername}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormAdd;
