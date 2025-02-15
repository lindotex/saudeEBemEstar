import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="p-4 flex flex-col w-2/3 m-auto">
        <h1 className="text-2xl font-bold">Bem-vindo à Plataforma de Saúde Comunitária</h1>
        <div className='flex flex-row gap-4'>
            <Link href="/" className="text-blue-500 hover:text-purple-800">
                Inicio
            </Link>
            <Link href="/servicos" className="text-blue-500 hover:text-purple-800">
                Ver serviços
            </Link>
            <Link href="/cadastro" className="text-blue-500 hover:text-purple-800">
                Cadastrar novo serviço
            </Link>
        </div>
    </div>
  )
}

export default Header