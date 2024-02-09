import axios from "axios";

const handleRegister = async (event, username, password, role) => {
  event.preventDefault();
  const URL = import.meta.env.VITE_REACT_APP_URL;

  try {
    const response = await axios.post(`${URL}/auth/register`, {
      username,
      password,
      role,
    });

    document.location.href = "/auth/login";
  } catch (error) {
    console.log(error);
  }
};

export default handleRegister;
