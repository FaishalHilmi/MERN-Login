import React, { useEffect } from "react";
import { useState } from "react";
import LabeledInput from "../molecules/LabeledInput";
import Label from "../atoms/Label";
import handleRegister from "../../service/register.service";

function AuthRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeRole = (event) => {
    setRole(event.target.value);
  };

  return (
    <div className="register">
      <div className="register-container font-open-sans flex justify-center items-center h-screen w-full">
        <div className="register-wrapper rounded-lg min-w-fit w-[400px] p-6">
          <form
            method="POST"
            onSubmit={(event) =>
              handleRegister(event, username, password, role)
            }
          >
            <h1 className="mb-1 text-2xl font-bold text-blue-700">Register</h1>
            <span className="mb-6 block text-gray-500 text-sm">
              Selamat datang, silahkan register terlebih dahulu
            </span>
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
            <div className="input-item mb-3">
              <Label htmlfor="role" text="Role" />
              <select
                name="role"
                id="role"
                className="w-full rounded-md px-2 py-1 border"
                onChange={handleChangeRole}
                required
              >
                <option value=""></option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* <p
              className={`message text-red-500 text-sm font-semibold ${
                showMessage ? "visible" : "hidden"
              }`}
            >
              !cek
            </p> */}
            <button
              type="submit"
              className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-md w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthRegister;
