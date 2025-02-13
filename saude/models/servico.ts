import mongoose from 'mongoose';

const servicoSchema = new mongoose.Schema({
    nome: String,
    endereco: String,
    telefone: String,
});

export default mongoose.models.Servico || mongoose.model('servico', servicoSchema);