import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddMahasiswa from "./pages/AddMahasiswa";
import UpdateMahasiswa from "./pages/UpdateMahasiswa";

function RouteLink() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/mahasiswa/add-mahasiswa" element={<AddMahasiswa />} />
        <Route
          path="/mahasiswa/update-mahasiswa/:id"
          element={<UpdateMahasiswa />}
        />
      </Routes>
    </Router>
  );
}

export default RouteLink;
