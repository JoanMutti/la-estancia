import React from "react";
import './terms.css'
import Layout from "../../components/Layout";
const Terms = () => {
  let title = "TÉRMINOS Y CONDICIONES";
  let text = [
    'Para navegar el sitio granjalaestancia.com no es necesario ser usuario. Para realizar una compra a través del mismo tampoco es necesario ser usuario.',
    'Se entiende por usuario a la persona física o jurídica que se haya registrado en granjalaestancia.com',
    'La registración de un usuario es libre y gratuita. La información personal que ingresas en la registración es totalmente confidencial y se mantiene, en forma estricta entre usuario y Granja La Estancia. En ningún caso será entregada a terceros.',
    'granjalaestancia.com se reserva el derecho de modificar o interrumpir el servicio ofrecido, ya sea en forma permanente o transitoria, sin aviso previo y/o consentimiento de usuarios.',
    'La disponibilidad de los productos ofrecidos en granjalaestancia.com está sujeta al movimiento diario de stock de la sucursal que arma el pedido. Por lo tanto el producto seleccionado puede no encontrarse en stock en la sucursal al momento de llegar el pedido a la misma. A su vez es posible que no estén disponibles en tiendares.com.ar algunos artículos que si lo están en la sucursal.',
    'Los productos pesables pueden sufrir una variación en su precio final debido a su condición.',
    'Los precios de los productos elegidos en el momento de la compra son fijados en el momento en que envías el pedido. Las únicas variaciones posibles en los precios se podrán dar en los productos pesables. Las ofertas o promociones y/o promociones no son acumulables.',
    'Los precios de los productos en las sucursales pueden diferir de los precios publicados para la compra online.',
    'La facturación se realiza el mismo día del pedido.',
    'Se aceptan devoluciones de envases.',
    'El pago de la compra es únicamente en moneda nacional.',
    'Los medios de pago aceptados son todos los indicados en la plataforma de mercado pago, o en efectivo contra entrega.',
    'Los datos requeridos para el pago con tarjeta de crédito son encriptados para su seguridad.',
    'Al realizar un pedido el usuario deberá escoger el rango horario en el que pasara a retirar el pedido por el local o en el que quiere que se envíe a su domicilio.',
    'granjalaestancia.com cuenta con un Centro de Atención al cliente especializado en el cual los clientes podrán realizar consultas o reclamos a través de nuestra línea de atención 11 6651 0053 o al mail consultas@granjalaestancia.com.',
    'Las fotografías de los productos son a modo ilustrativo. Queda prohibida su reproducción.',
    'Estos términos y condiciones pueden sufrir modificaciones cuando el usuario está participando de alguna promoción u oferta.',
    'El monto mínimo de compra será de $1000 (mil pesos) y en los casos de envío a domicilio se adicionará un valor al importe de tu pedido en concepto del costo de envío. Dicho valor está claramente explicitado en el proceso de compra.',
    'Horario de entrega: El cliente debe seleccionar un rango horario para la entrega antes de finalizar su pedido.',
    'Comprar a través de granjalaestancia.com implica el conocimiento y la aceptación incondicional de las presentes condiciones. Válidas para las compras realizadas a través de la web o teléfono. Por cualquier consulta comunicarse al CENTRO DE ATENCIÓN AL CLIENTE al 11 6651 0053. De lunes a sábados de 09:00 a 20:00 hs.'
  ]

  return (
    <>
      {/* <div
        className="termImg "
        style={{ backgroundImage: `url(${imgFondo})` }}
      ></div> */}
      <Layout>
        <div className="term">
          <div className="term-card container container-fluid text-center">
            <h1 className="fs-1 term-title"> { title}</h1>
            <ol>
            {text.map((t)=>
            
            <li className="term-text text-start">{t}</li>
         
        
            )}
            </ol>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Terms;
