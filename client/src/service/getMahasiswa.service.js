import axios from "axios";

const getMahasiswa = async (token, callback) => {
  const URL = import.meta.env.VITE_REACT_APP_URL;

  try {
    const response = await axios.get(`${URL}/mahasiswa`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    callback(response.data.data);
  } catch (error) {
    console.log(error);
  }
};

export default getMahasiswa;
