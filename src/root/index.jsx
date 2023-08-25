import React from "react";
import Navbar from "../components/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../components/Home";

const Root = () => {
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          <Route element={<Home />} path="/home" />
        </Route>
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </div>
  );
};

export default Root;
