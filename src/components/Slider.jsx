import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import '../slider.css'
import slider1 from '../mapa.png'
import slider2 from '../slider2.svg'
import slider3 from '../slider3.svg'
import slider4 from '../slider4.svg'


const Slider = () => {
  return (
    <Carousel
        showThumbs={false}
        className='slider'
        showStatus={false}
    >
        <div className='slider-item first'>
            <img src={slider1} alt="Mapa" />
            <div className='slider-first-container'>
                <div className='slider-first-text'>
                    <p className='slider-first-text-h1'>Estamos cerca tuyo</p>
                    <p className='slider-second-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti tortor eu nisi et suspendisse. Netus mi nulla platea eget arcu ut pharetrat quam.</p>
                    <p>Busca el local más cercano a vos</p>
                </div>
            </div>
        </div>
        <div className='slider-item'>
            <img src={slider2} alt="Comida" />
            <div className='slider-item-text-container'>
                <p className='slider-item-text'>¿Qué vas a <br />cocinar hoy?</p>
            </div>
        </div>
        <div className='slider-item'>
            <img src={slider3} alt="Comida" />
            <div className='slider-item-text-container flex-end'>
                <p className='slider-item-text'>Tenemos productos <br/>ricos y saludables</p>
            </div>
        </div>
        <div className='slider-item'>
            <img src={slider4} alt="Comida" />
            <div className='slider-item-text-container flex-end'>
                <p className='slider-item-text'>Somos la opción más <br/>deliciosa para tu mesa</p>
            </div>
        </div>
    </Carousel>
  )
}

export default Slider