import React from "react";

function Navigasi() {
  return (
    <nav>
      <div className="navbar bg-white font-open-sans py-4 shadow-md">
        <div className="navbar-container max-w-[1040px] mx-auto">
          <div className="navbar-wrapper flex justify-between items-center">
            <div className="navbar-logo text-3xl font-bold">MERN</div>
            <div className="navbar-button-logout">
              <button className="py-2 px-4 bg-blue-700 rounded-md text-white">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigasi;
