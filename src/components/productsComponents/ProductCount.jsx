import React , {useState, useEffect} from 'react'

const ProductsCount = ({stock, initial = 0, onAdd}) => {
  
    const [count, setCount] = useState(initial)
  
    useEffect(()=> {
      setCount(initial)
    },[])

    const plus = () =>{
      if(count < stock) {
        setCount(count + 1)
      }
    }
    const minus = () =>{
      if(count > initial) {
        setCount( count - 1)
      }
    }

    return (
    <div className="">
      <div className=''>
        <button className='' onClick={plus}>+</button>
        <p className=''></p>
        <button className='' onClick={minus}>-</button>
      </div>
        <button className={'btnOnAdd' + (stock > 0? '' : ' disable') } onClick={()=> onAdd(count)}>
          Agregar al carrito
        </button>
    </div>
  )
  //falta darle nombre a las clases
}

export default ProductsCount