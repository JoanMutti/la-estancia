const generateMessage = ({
  products,
  total,
  client: { name, mail, phone, domicilio, shippingOption },
}) => {
  let message = `Nombre:++${name}%0AMail:++${mail}%0ATelefono:++${phone}${
    domicilio &&
    shippingOption === "Envío a domicilio" &&
    `%0ADomicilio:++${domicilio}`
  }%0A${shippingOption}%0A--------------------------------------------------`;

  products.map(({ name, soldFor, cant, price }) => {
    message += `%0A${name}+x+${cant}+${soldFor}+:++$+${cant * price}`;
  });

  message += `%0A--------------------------------------------------%0ATotal:++$+${total}`;

  return message;
};

export default generateMessage;
