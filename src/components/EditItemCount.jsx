import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const EditItemCount = ({product, styleClass, onClickAdd, onClickRemove}) => {
    return (
        <div className={styleClass.container} >
            <AiOutlineMinus fontSize={20} color='rgb(21, 20, 21)' onClick={() => onClickRemove(product.id)} />
            <p className={styleClass.text} style={{minWidth: '70px', textAlign: 'center'}}>{`${product.cant} ${product.soldFor}`}</p>
            <AiOutlinePlus fontSize={20} color='rgb(21, 20, 21)' onClick={() => onClickAdd(product.id)} />
        </div>
    )
}

export default EditItemCount