import React from "react";

function Login() {
  return (
    <div className="login">
      <div className="login-container font-openSans">
        <div className="login-wrapper bg-slate-600 min-w-fit max-w-[400px] p-4">
          <h1 className="mb-4 text-2xl font-bold">Login</h1>
          <div className="input-item">
            <label htmlFor="username" className="mb-2 block">
              username
            </label>
            <input
              type="text"
              className="w-full rounded-sm px-2 py-1"
              id="username"
              name="username"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
