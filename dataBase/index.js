const mongoose = require('mongoose');
const app = require('express')(); // Exemplo de importação do Express

const connectDatabase = async (app) => {
    try {
        console.log('Espere estamos conectando');

        await mongoose.connect("mongodb+srv://gustavo:eGKGOEPT4BOepzbQ@cluster0.1duey0r.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Banco conectado');
        // Inicialize o servidor aqui
        app.listen(3008, () => {
            console.log('Servidor rodando na porta 3008');
        });
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
};

module.exports = connectDatabase;
