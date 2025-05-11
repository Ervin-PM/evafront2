import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex flex-col items-center">
        <img
          src="/images/logo.png"
          alt="Municipalidad de Cholchol"
          className="h-12 mb-2"
        />
        <h1 className="text-lg font-bold text-center">
          Municipalidad de Cholchol
        </h1>
      </div>
    </header>
  );
};

export default Header;