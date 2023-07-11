import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lista from "../components/Lista";
import React from "react";

function Produtos() {
  return (
    <>
      <Navbar />
      <div className="title">
        <h1>Flores</h1>
        <p>Trazem mais alegria para o mundo</p>
      </div>
      <div className="center">
        <Lista></Lista>
      </div>
      <Footer />
    </>
  );
}

export default Produtos;
