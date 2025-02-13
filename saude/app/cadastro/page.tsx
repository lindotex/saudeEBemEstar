'use client'; // Marque como Client Component

import { useState } from 'react';
import Header from '../components/header';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/servicos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, endereco, telefone }),
        });

        if (res.ok) {
            alert('Serviço cadastrado com sucesso!');
            setNome('');
            setEndereco('');
            setTelefone('');
        } else {
            alert('Erro ao cadastrar serviço.');
        }
    };

    return (
        <>
        <Header/>
        <div className="p-4 flex flex-col w-2/3 justify-center m-auto">
            <h1 className="text-2xl font-bold my-10">Cadastrar Serviço</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block">Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full p-2 border rounded text-black"
                        required
                    />
                </div>
                <div>
                    <label className="block">Endereço:</label>
                    <input
                        type="text"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                        className="w-full p-2 border rounded text-black"
                        required
                    />
                </div>
                <div>
                    <label className="block">Telefone:</label>
                    <input
                        type="text"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        className="w-full p-2 border rounded text-black"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Cadastrar
                </button>
            </form>
        </div>
        </>
    );
}