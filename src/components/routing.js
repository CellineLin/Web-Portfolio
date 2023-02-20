import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./main";
import Navbar from "./navbar";

function routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default routing;
