import React from "react";
import "./faq.css";
import Layout from "../../components/Layout";
const Faq = () => {
  let title = "Preguntas Frecuentes";
  let text = [
    {
      q: "¿Cuál es la zona de entrega de la Tienda Online La Estancia ?",
      a: "Cubrimos las zonas de Castelar, Morón y Haedo. Si tu domicilio está fuera del área de entregas, podés elegir realizar el retiro de tu pedido por la sucursal en Miguel de Salcedo 2010, Castelar.",
    },
    {
      q: "¿Tengo que registrarme para poder realizar un pedido?",
      a: "No es necesario registrarse para realizar un pedido.",
    },
    {
      q: "¿Tengo que tener tarjeta de crédito para poder realizar un pedido?",
      a: "No. Se puede pagar en efectivo contra entrega del pedido en tu domicilio o en la sucursal dependiendo el método de entrega elegido. También podés elegir pagar con tarjeta de crédito on line antes de finalizar tu compra en nuestro sitio. Por el momento no aceptamos el pago con tarjeta de crédito cuando entregamos el producto en tu domicilio.",
    },
    {
      q: "¿Existe un monto mínimo de pedido?",
      a: "Sí, por cuestiones logísticas, el monto mínimo para los pedidos online, provisoriamente es de $1000.-",
    },
    {
      q: "¿El envío a domicilio tiene algún cargo adicional?",
      a: "Los envíos son sin cargo a partir de $3.000, luego varía dependiendo la zona.",
    },
    {
      q: "¿Hasta qué hora puedo realizar un pedido?",
      a: "Los pedidos se pueden hacer las 24hs, los 365 días del año! Si querés recibir o retirar tu pedido en el día, deberás hacerlo antes de las 19 hs si lo necesitás en el día.",
    },
    {
      q: "¿Puedo realizar un pedido para que sea entregado al otro día o cualquier otro día de la semana?",
      a: "Por el momento solo podes hacer pedidos para ser entregados en tu domicilio o en nuestras sucursales durante el mismo día o para el día siguiente.",
    },
    {
      q: "¿Con qué anticipación mínima debo hacer el pedido?",
      a: "El pedido con envío Express se entrega dentro de las 3hs siguientes a su realización, siempre y cuando el pedido ingrese de Lunes a Sábados entre las 9 y las 21hs. Para retirar en la sucursal el pedido debe realizarse con una anticipación de 3 horas.",
    },
    {
      q: "¿Puedo establecer un horario de entrega determinado?",
      a: "Para los envíos con entrega, tenes la opción de seleccionar la franja horaria en la que quieres que enviemos el pedido. Para el caso de pick up podes elegir rangos de una hora para pasar a retirarlo (siempre y cuando el pedido se realice con 2 horas de antelación).",
    },
    {
      q: "Si existe un problema con el pedido realizado, ¿qué hago?",
      a: "Por favor te pedimos que te comuniques al 11 6651 0053 o envía un e-mail al consultas@granjalaestancia.com, para poder brindarte una solución a la mayor brevedad posible.",
    },
    {
      q: "¿La sucursal está habilitada para poder pasar a retirar el pedido (pick-up)?",
      a: "Si, al hacer tu pedido definis el modo de retiro, si es con envío o take away!",
    },
  ];
  let consultas =
    "Por otras consultas, por favor, te pedimos que te comuniques al  11 6651 0053 o envía un e-mail al consultas@granjalaestancia.com";
  return (
    <>
      {/* <div
        className="faqImg "
        style={{ backgroundImage: `url(${imgFondo})` }}
      ></div> */}
      <Layout>
        <div className="faq">
          <div className="faq-card container container-fluid text-center">
            <h1 className="fs-1 faq-title">{title}</h1>
            <ol>
              {text.map((t) => (
                <li className="faq-text text-start">
                  <p className="fw-bold ">{t.q}</p>
                  <p className="fst-italic">{t.a}</p>
                </li>
              ))}
            </ol>
            <p className="faq-text fw-bold">{consultas}</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Faq;
