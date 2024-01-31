import React from "react";
import Navigasi from "../component/organisms/Navigasi";
import Homepage from "../component/organisms/Homepage";

function Home() {
  return (
    <main className="bg-gray-100">
      <Navigasi />
      <Homepage />
    </main>
  );
}

export default Home;
