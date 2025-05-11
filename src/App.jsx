import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import SectionCard from "./components/SectionCard";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Popup from "./components/Popup"; // Importar el componente Popup

const App = () => {
  const [currentPopup, setCurrentPopup] = useState(1); // Estado para controlar el popup visible

  const handleClosePopup = () => {
    if (currentPopup === 1) {
      setCurrentPopup(2); // Muestra el segundo popup al cerrar el primero
    } else {
      setCurrentPopup(0); // Cierra todos los popups
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#1E3A5F", // Azul mate
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {/* Primer popup */}
      {currentPopup === 1 && (
        <Popup
          imageSrc="/images/popuppermiso.jpg" // Ruta de la primera imagen
          altText="Recordatorio de la Municipalidad de Cholchol"
          onClose={handleClosePopup} // Maneja el cierre del popup
        />
      )}

      {/* Segundo popup */}
      {currentPopup === 2 && (
        <Popup
          imageSrc="/images/popup.jpg" // Ruta de la segunda imagen
          altText="Información importante de la Municipalidad de Cholchol"
          onClose={handleClosePopup} // Maneja el cierre del popup
        />
      )}

      <Navbar />
      <Slider />
      <SectionCard
        id="home"
        title="Bienvenido a la Municipalidad de Cholchol"
        content="Aquí encontrarás información sobre nuestra historia, cultura y los servicios que ofrecemos a la comunidad."
        image="/images/slider1.jpg"
        width={600}
        height={300}
      />
      <SectionCard
        id="municipio"
        title="Municipio"
        content="Información sobre el municipio y sus actividades."
        image="/images/Municipalidad.png"
        width={600}
        height={300}
      />
      <SectionCard
        id="unidades"
        title="Unidades Municipales"
        content="Conoce las diferentes unidades municipales y sus servicios."
        image="/images/slider2.jpg"
        width={600}
        height={300}
      />
      <ContactForm />
      <Map />
      <Footer />
    </div>
  );
};

export default App;