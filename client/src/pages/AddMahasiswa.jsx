import React from "react";
import Navigasi from "../component/organisms/Navigasi";
import LabeledInput from "../component/molecules/LabeledInput";
import { Link } from "react-router-dom";
import Button from "../component/atoms/Button";

function AddMahasiswa() {
  const changeUsername = () => {
    console.log("username");
  };
  return (
    <main className="bg-gray-100">
      <Navigasi />
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
                  <form action="POST" className="mt-4">
                    <LabeledInput
                      type="text"
                      name="nama_lengkap"
                      text="Nama Lengkap"
                      handle={changeUsername}
                    />
                    <LabeledInput
                      type="text"
                      name="kelas"
                      text="Kelas"
                      handle={changeUsername}
                    />
                    <LabeledInput
                      type="text"
                      name="alamat"
                      text="Alamat"
                      handle={changeUsername}
                    />
                    <LabeledInput
                      type="file"
                      name="link"
                      text="Gambar"
                      handle={changeUsername}
                    />

                    <div className="button mt-6">
                      <Button
                        color="bg-blue-700"
                        text="Submit"
                        handle={changeUsername}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AddMahasiswa;
