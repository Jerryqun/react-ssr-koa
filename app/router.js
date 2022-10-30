import { Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/home";
import List from "./pages/list";

export default () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/list" element={<List />} />
  </Routes>
);
