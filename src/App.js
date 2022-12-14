import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./Compoment/Home";
import Login from "./Compoment/Login";
import Register from "./Compoment/Register";
import Users from "./Compoment/Users";
import Dashbord from "./Compoment/Dashbord";
import Sidebar from "./Compoment/Sidbar";
import axios from "axios";
import Navbar from "./Compoment/Navbar";
import Livreur from "./Compoment/Livreur";
import Manger from "./Compoment/Manger";
import Client from "./Compoment/Client";
import PrivatRoutes from "./Compoment/PrivatRoute";
import PrivatRouteManager from "./Compoment/PrivatRouteManager";
let RoleUser = localStorage.getItem("RoleUser");

const myStyle = {
  background: "black",
  height: "100vh",
  overflow: "hidden",
};

function App() {
  return (
    <div style={myStyle} className="main">
      <Routes>
        <Route element={<PrivatRoutes />}>
          <Route element={<PrivatRouteManager />}>
            <Route path="/Dashbord" element={<Dashbord />} />
            <Route path="/Livreur" element={<Livreur />} />
            <Route path="/Client" element={<Client />} />
          </Route>
        </Route>

        <Route path="/home" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
