import React, { useState } from "react";
import axios from "axios";
import LabeledInput from "../molecules/LabeledInput";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    const URL = import.meta.env.VITE_REACT_APP_URL;
    console.log(URL);

    try {
      const response = await axios.post(`${URL}/auth/login`, {
        username: username,
        password: password,
      });
    } catch (error) {
      setMessage(error.response.data.message);
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login">
      <div className="login-container font-open-sans flex justify-center items-center h-screen w-full">
        <div className="login-wrapper border rounded-lg min-w-fit w-[450px] p-6">
          <form method="POST" onSubmit={handleLogin}>
            <h1 className="mb-6 text-2xl font-bold text-blue-700">Login</h1>
            <LabeledInput
              type="text"
              name="username"
              text="Username"
              handle={handleChangeUsername}
            />
            <LabeledInput
              type="password"
              name="password"
              text="Password"
              handle={handleChangePassword}
            />
            <p
              className={`message text-red-500 text-sm ${
                showMessage ? "visible" : "hidden"
              }`}
            >
              {message}
            </p>
            <button
              type="submit"
              className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-md "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
