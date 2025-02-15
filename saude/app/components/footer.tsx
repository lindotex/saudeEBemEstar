import React from 'react'

const anoAtual = new Date().getFullYear()


const Footer = ({className}) => {
  return (
    <div className={`${className} flex justify-center w-full py-4 text-white`}>
        <div>
            <h1 className='px-10 flex justify-center'>Created by Alisson Lindote Novais</h1>
            <p className='px-10 justify-center flex'>2025-{anoAtual} Todos os direitos reservados &reg;</p>
        </div>
    </div>
  )
}

export default Footer