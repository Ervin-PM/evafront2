import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-96 flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold">Chol Chol Avanza</h2>
        <p className="mt-4 text-lg">Transparencia y servicio público para todos</p>
      </div>
    </section>
  );
};

export default Hero;