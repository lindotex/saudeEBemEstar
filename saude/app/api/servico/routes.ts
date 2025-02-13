import dbConnect from '@/lib/dbConnect';
import Servico from '@/models/servico';

export async function POST(request) {
    await dbConnect();
    const { nome, endereco, telefone } = await request.json();

    const servico = new Servico({ nome, endereco, telefone });
    await servico.save();

    return Response.json({ message: 'Serviço adicionado!' });
}

export async function GET() {
    await dbConnect();
    if (!dbConnect()){
        return Response.json({"message":"Sem conexao ao banco de dados."})
    }

    const servicos = await Servico.find({});
    return Response.json(servicos);
}