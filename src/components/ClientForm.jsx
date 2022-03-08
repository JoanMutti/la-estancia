import React from 'react'
import Input from './Input'

const ClientForm = ({name, setName, mail, setMail, phone, setPhone}) => {


    return (
        <div className='cf-container'>
            <div className='cf-input-container'>
                <Input type='text' label='Nombre' onChange={setName} text={name} placeholder='Ingresá tu nombre' />
                <Input type='email' label='Mail' onChange={setMail} text={mail} placeholder='Ingresá tu mail' />
                <Input type='phone' label='Telefono' onChange={setPhone} text={phone} placeholder='Ingresá tu telefono' />
            </div>
        </div>
    )
}

export default ClientForm