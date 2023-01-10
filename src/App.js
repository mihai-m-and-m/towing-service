import { Routes, Route } from "react-router-dom";
import React from "react";

import MainPage from "./pages/MainPage";
import DesprePage from "./pages/DesprePage";
import ContactPage from "./pages/ContactPage";
import Layout from "./components/layout/Layout";
import Cookies from "universal-cookie";
const cookies = new Cookies();

cookies.set("SameSite", "None", {
  path: "/",
  secure: "1",
  sameSite: "None",
});
cookies.set("presence", "None", {
  path: "/",
  secure: "1",
  sameSite: "None",
});

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
