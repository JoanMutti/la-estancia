import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const EditItemCount = ({product, styleClass}) => {
    return (
        <div className={styleClass.container}>
            <AiOutlineMinus fontSize={20} color='rgb(21, 20, 21)' />
            <p className={styleClass.text}>0.5 kg</p>
            <AiOutlinePlus fontSize={20} color='rgb(21, 20, 21)' />
        </div>
    )
}

export default EditItemCount