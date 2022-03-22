import React from "react";
import Input from "./Input";

const ClientForm = ({
  name,
  setName,
  mail,
  setMail,
  phone,
  setPhone,
  shippingOption,
  handleRadioChange,
  domicilio,
  setDomicilio,
}) => {
  const opcion1 = "Envío a domicilio";
  const opcion2 = "Retiro por sucursal";

  return (
    <div className="cf-container">
      <div className="cf-input-container">
        <Input
          type="text"
          label="Nombre"
          onChange={setName}
          text={name}
          placeholder="Ingresá tu nombre"
        />
        <Input
          type="email"
          label="Mail"
          onChange={setMail}
          text={mail}
          placeholder="Ingresá tu mail"
        />
        <Input
          type="phone"
          label="Telefono"
          onChange={setPhone}
          text={phone}
          placeholder="Ingresá tu telefono"
        />
        {shippingOption === opcion1 && (
          <Input
            type="text"
            label="Dirección"
            onChange={setDomicilio}
            text={domicilio}
            placeholder="Ingresá la direccion de envío"
          />
        )}
        <div className="shipping-container">
          <div>
            <label htmlFor="envio">
              <input
                type="radio"
                name="envio"
                id="envio"
                value={opcion1}
                checked={shippingOption === opcion1}
                onChange={(e) => handleRadioChange(e)}
              />
              Envío a domicilio
            </label>
          </div>
          <div>
            <label htmlFor="retiro">
              <input
                type="radio"
                name="retiro"
                id="retiro"
                value={opcion2}
                checked={shippingOption === opcion2}
                onChange={(e) => handleRadioChange(e)}
              />
              Retiro por sucursal
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientForm;
