import React from "react";
import Layout from "../../components/Layout";
import "./AboutUs.css";
import imgFondo from "../../Fondo_about.png";
const AboutUs = () => {
  let title = "Nuestra Historia";
  let text =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi cum iste, impedit quas placeat nihil quam sequi reiciendis molestiae assumenda provident voluptatem recusandae temporibus, fugit fugiat quibusdam praesentium veritatis!";

  return (
    <>
      <div
        className="aboutImg "
        style={{ backgroundImage: `url(${imgFondo})` }}
      ></div>
      <Layout>
        <div className="aboutUs">
          <div className="aboutUs-card container container-fluid text-center">
            <h1 className="fs-1 aboutUs-title">{title}</h1>
            <p className="aboutUs-text">{text}</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutUs;
