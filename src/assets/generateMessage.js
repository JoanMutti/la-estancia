const generateMessage = ({
  products,
  total,
  client: { name, mail, phone },
}) => {
  let message = `Nombre:++${name}%0AMail:++${mail}%0ATelefono:++${phone}%0A--------------------------------------------------`;

  products.map(({ name, soldFor, cant, price }) => {
    message += `%0A${name}+x+${cant}+${soldFor}+:++$+${cant * price}`;
  });

  message += `%0A--------------------------------------------------%0ATotal:++$+${total}`;

  return message;
};

export default generateMessage;
