import pechugas from "../pechugas.png";
import alitas from "../alitas.png";
import bastones from "../bastones.png";
import soja from "../soja.png";
import tapa from "../tapa.png";

let desc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias vitae, alias asperiores nam a totam animi aperiam exercitationem dicta perferendis eius sint, ullam saepe sunt quos! Esse, aperiam dolor? ";

const offersData = [
  {
    img: pechugas,
    name: "Pechuga de Pollo",
    price: 600,
    offer: "1 Kilo",
    id: "iddeprueba",
    description: desc,
    inOffer: true,
    type: ["polleria", "productos"],
  },
  {
    img: soja,
    name: "Milanesas de soja",
    price: 299,
    offer: "1 Kilo",
    id: "iddeprueba2",
    description: desc,
    inOffer: true,
    type: ["vegetariano", "congelados", "productos"],
  },
  {
    img: tapa,
    name: "Tapa de asado",
    price: 790,
    offer: "1 Kilo",
    id: "iddeprueba3",
    description: desc,
    inOffer: true,
    type: ["carniceria", "productos"],
  },
  {
    img: alitas,
    name: "Alitas de Pollo",
    price: 200,
    offer: "2 Kilos",
    id: "iddeprueba4",
    description: desc,
    inOffer: false,
    type: ["polleria", "congelados", "productos"],
  },
  {
    img: bastones,
    name: "Bastones de queso",
    price: 830,
    offer: "1 Kilo",
    id: "iddeprueba5",
    description: desc,
    inOffer: false,
    type: ["vegetariano", "congelados", "productos"],
  },
];

export default offersData;
