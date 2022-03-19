import React from "react";
import Layout from "../../components/Layout";
import "./AboutUs.css";
import imgFondo from "../../Fondo_about.png";

const AboutUs = () => {
  return (
    <>
      {/* <div
        className="aboutImg "
        style={{ backgroundImage: `url(${imgFondo})` }}
      ></div> */}
      <Layout>
        <div className="aboutUs">
          <div className="aboutUs-card container container-fluid text-center">
            <h1 className="fs-1 aboutUs-title">Sobre Nosotros</h1>
            <p className="aboutUs-text fs-4">MISIÓN</p>
            <p className="aboutUs-text">
              Ofrecer servicios y productos con certificación de estándares de
              calidad, revalorizando y priorizando la empatía, el buen trato y
              el respeto para con los clientes.
            </p>
            <p className="aboutUs-text fs-4">VISIÓN</p>
            <p className="aboutUs-text">
              Reconstruir, desde nuestra actividad y a través del contacto con
              el cliente, aquellos valores de antaño centrados en el respeto al
              prójimo, el don de la gente y una cultura del trabajo que
              dignifica a la persona.
            </p>
            <p className="aboutUs-text fs-4">VALORES</p>
            <p className="aboutUs-text">
              La vocación de servicio, la empatía, el respeto, la consideración
              de la importancia de los detalles, la atención, la simpatía son
              algunos de los valores que la empresa quiere rescatar y acentuar.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutUs;
