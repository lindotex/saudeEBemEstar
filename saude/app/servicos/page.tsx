import Link from 'next/link';

async function getServicos() {
    const res = await fetch('http://localhost:3000/api/servicos');
    return res.json();
}

export default async function Servicos() {
    const servicos = await getServicos();

    return (
        <div className="p-4 m-auto flex flex-col w-2/3">
            <h1 className="text-2xl font-bold">Serviços de Saúde</h1>
            <ul>
                {servicos.map((servico) => (
                    <li key={servico._id} className="my-2">
                        <h2 className="text-xl">{servico.nome}</h2>
                        <p>{servico.endereco}</p>
                        <p>{servico.telefone}</p>
                    </li>
                ))}
            </ul>
            <Link href="/" className="text-blue-500 underline">
                Voltar
            </Link>
        </div>
    );
}