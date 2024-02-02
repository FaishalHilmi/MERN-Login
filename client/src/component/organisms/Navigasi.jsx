import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";

function Navigasi() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/auth/login");
  };

  return (
    <nav>
      <div className="navbar bg-white font-open-sans py-4 shadow-md">
        <div className="navbar-container max-w-[1040px] mx-auto">
          <div className="navbar-wrapper flex justify-between items-center">
            <div className="navbar-logo text-3xl font-bold">MERN</div>
            <div className="navbar-button-logout">
              <Button color="bg-blue-700" text="Logout" handle={handleLogout} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigasi;
