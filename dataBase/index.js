const mongoose = require('mongoose');

const connectDatabase = async () => {
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
