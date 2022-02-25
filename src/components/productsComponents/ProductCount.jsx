import React , {useState, useEffect} from 'react'
import { CgMathPlus, CgMathMinus } from 'react-icons/cg'
const ProductsCount = ({stock, initial = 0, onAdd}) => {
  
    const [count, setCount] = useState(initial)
  
    useEffect(()=> {
      setCount(initial)
    },[])

    const plus = () =>{
      if(count < stock) {
        setCount(count + 0.25)
      }
    }
    const minus = () =>{
      if(count > initial) {
        setCount( count - 0.25)
      }
    }

    return (
    <div className="container container-fluid text-center">
      <div className='container container-fluid d-flex justify-content-center align-items-center'>
        <button className='btn btn-secondary' onClick={plus}><CgMathPlus fontSize={12} color='#fafafa' /></button>
        <p className='fs-4 p-count text-center' >{count}</p>
        <button className='btn btn-secondary' onClick={minus}><CgMathMinus fontSize={12} color='#fafafa' /></button>
      </div>
        <button className={'btnOnAdd' + (stock > 0? '' : ' disable') + ' btn btn-success rounded-pill' } onClick={()=> onAdd(count)}>
          Agregar al carrito
        </button>
    </div>
  )
  //falta darle nombre a las clases
}

export default ProductsCount