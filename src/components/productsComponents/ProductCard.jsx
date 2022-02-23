import React, {useState} from 'react'
import ProductsCount from './ProductCount'
const ProductCard = ({product}) => {
  
  const[productCount, setProductCount] = useState(0)
//falta importar el context
  const onAdd = (count) => {
      setProductCount(count)
      //falta enviarlo al context
  }

    return (
    <div className=''>
{product? (
<div className='card-container'>
<div className='card-offer-heart-icon'>
    <AiOutlineHeart fontSize={18} color='#fafafa' />
</div>
    <div className='card-offer'>
        <img src={product.img} alt={product.name} />
        <div className='card-offer-info'>
            <p className='card-offer-name'>{product.name}</p>
            <p className='card-offer-description'>{product.description}</p>
            <div className='card-offer-price'>
                <p className='card-offer-price-value'>{`$ ${product.price}`}</p>
                <p className='card-offer-price-cant'>{`Por ${product.offer}`}</p>
            </div>
        </div>
    </div>
</div>
) : (
<div className=''>
    <p className=''>Cargando . . .</p>
</div>
) }
    </div>
  )
}

export default ProductCard