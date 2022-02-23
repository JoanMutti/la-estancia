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
    <div className="">
      <div className=''>
        <button className='' onClick={plus}><CgMathPlus fontSize={12} color='#fafafa' /></button>
        <p className='' >{count}</p>
        <button className='' onClick={minus}><CgMathMinus fontSize={12} color='#fafafa' /></button>
      </div>
        <button className={'btnOnAdd' + (stock > 0? '' : ' disable') } onClick={()=> onAdd(count)}>
          Agregar al carrito
        </button>
    </div>
  )
  //falta darle nombre a las clases
}

export default ProductsCount