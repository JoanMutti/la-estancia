import pechugas from '../pechugas.png'
import alitas from '../alitas.png'
import bastones from '../bastones.png'
import soja from '../soja.png'
import tapa from '../tapa.png'

const offersData = [
    {img: pechugas, name: 'Pechuga de Pollo', price: 600, offer: '1 Kilo', id: 'iddeprueba', stock: 60, description: 'Lorem ipsum dolor sit amet...', inOffer: true, type: "vegetariano"},
    {img: soja, name: 'Milanesas de soja', price: 299, offer: '1 Kilo', id: 'iddeprueba2', stock: 40, description: 'Lorem ipsum dolor sit amet...', inOffer: true, type: "vegetariano"},
    {img: tapa, name: 'Tapa de asado', price: 790, offer: '1 Kilo', id: 'iddeprueba3', stock: 20, description: 'Lorem ipsum dolor sit amet...', inOffer: true, type: "vegetariano"},
    {img: alitas, name: 'Alitas de Pollo', price: 200, offer: '2 Kilos', id: 'iddeprueba4', stock: 0, description: 'Lorem ipsum dolor sit amet...', inOffer: false, type: "vegetariano"},
    {img: bastones, name: 'Bastones de queso', price: 830, offer: '1 Kilo', id: 'iddeprueba5', stock: 25, description: 'Lorem ipsum dolor sit amet...', inOffer: false, type: "vegetariano"},
]

export default offersData