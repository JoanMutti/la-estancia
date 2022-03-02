import React from 'react'
import { AiOutlineHeart, AiFillMessage } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import pechugas from '../../pechugas.png'
import alitas from '../../alitas.png'
import bastones from '../../bastones.png'
import soja from '../../soja.png'
import tapa from '../../tapa.png'
import gifEnvios from '../../envios.gif'


const offers = [
    {img: pechugas, name: 'Pechuga de Pollo', price: 600, offer: '1 Kilo', id: 'iddeprueba', description: 'Lorem ipsum dolor sit amet...'},
    {img: soja, name: 'Milanesas de soja', price: 299, offer: '1 Kilo', id: 'iddeprueba2', description: 'Lorem ipsum dolor sit amet...'},
    {img: tapa, name: 'Tapa de asado', price: 790, offer: '1 Kilo', id: 'iddeprueba3', description: 'Lorem ipsum dolor sit amet...'},
    {img: alitas, name: 'Alitas de Pollo', price: 200, offer: '2 Kilos', id: 'iddeprueba4',description: 'Lorem ipsum dolor sit amet...'},
    {img: bastones, name: 'Bastones de queso', price: 830, offer: '1 Kilo', id: 'iddeprueba5', description: 'Lorem ipsum dolor sit amet...'},
]

const CardOffer = ({img, name, price, offer, id}) => {
    return (
        <div className='card-container'>
            <div className='card-offer-heart-icon'>
                <AiOutlineHeart fontSize={18} color='#fafafa' />
            </div>
            <Link to={`/productos/${id}`}>
                <div className='card-offer'>
                    <img src={img} alt="Foto producto" />
                    <div className='card-offer-info'>
                        <p className='card-offer-name'>{name}</p>
                        <div className='card-offer-price'>
                            <p className='card-offer-price-value'>{`$ ${price}`}</p>
                            <p className='card-offer-price-cant'>{`Por ${offer}`}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

const Offers = () => {
  return (
    <div>
        <h3 className='offers-title'>Promociones para la semana</h3>
        <div className='offer-cards-container'>
            {offers.map((offer, index) => (
                //habria que sacar el index
                <CardOffer {...offer} key={offer.id} />
            ))}
        </div>
        <div className='message-delivery-container'>
            <div className='delivery-container'>
                <img src={gifEnvios} alt="Envios" />
                <h3 className='delivery-title'>Envíos gratis</h3>
                <p className='delivery-subtitle'>En pedidos superiores a $2500</p>
            </div>
            <div className='messages-container'>
                <h3 className='messages-title'>Llamanos por whatsapp</h3>
                <div className='message-icon-container'>
                    <AiFillMessage fontSize={36} color='white'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers