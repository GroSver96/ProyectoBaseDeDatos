import express from 'express';
import connectToDatabase from './db.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('¡Servidor API funcionando!');
});

app.get('/usuarios', async (req, res) => {
    try {
        const pool = await connectToDatabase(); // Conectarse a la base de datos
        const result = await pool.request().query('SELECT * FROM Usuarios'); // Realizar una consulta
        res.json(result.recordset); // Enviar los resultados como JSON
    } catch (err) {
        res.status(500).send('Error obteniendo usuarios');
    }
});

// Puerto donde el servidor escuchará
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos y luego iniciar el servidor
connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
}).catch((err) => {
    console.error('No se pudo conectar a la base de datos. El servidor no se iniciará.');
});

