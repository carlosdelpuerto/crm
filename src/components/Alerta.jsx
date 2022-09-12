import React from 'react'

const Alerta = ({children}) => {
  return (
    <div className='text-center my-1 bg-red-600 text-white p-1 uppercase'>
    {children}
</div>
  )
}

export default Alerta