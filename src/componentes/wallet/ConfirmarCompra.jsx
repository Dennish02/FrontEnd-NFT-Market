import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export default function ConfirmarCompra() {
    const dispatch= useDispatch()


    useEffect(()=>{
        dispatch()
    },[])

  return (
    <div className='contConfirmar'>
        <h3>Ya compraste CL</h3>
        
        <Link to='/home'>
        <button className='buttonPrimary'>Volver a inicio</button>
        </Link>
        
    </div>
  )
}
