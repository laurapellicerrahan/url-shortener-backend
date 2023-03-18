const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false); //evitar errores validación
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, //nueva forma de analizar las cadenas de conexión
            useUnifiedTopology: true //utilizar la nueva capa de administración de conexiones
        });

        console.log('MongoDB Connected...')
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;

