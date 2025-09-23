import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-xl font-bold hover:text-green-300 transition-all duration-500 ease-out drop-shadow-lg hover:drop-shadow-xl bg-green-400 bg-clip-text text-transparent hover:bg-green-300 filter hover:brightness-110 hover:scale-105 transform"
      style={{
        textShadow: "0 0 20px rgba(23,191,36, 0.5), 0 0 40px rgba(23,191,36, 0.3)",
      }}
    >
      Logistics Transfers
    </Link>
  );
};

export default Logo;
