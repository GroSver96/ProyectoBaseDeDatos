import sql from 'mssql';

const dbConfig = {
    user: 'sa',           // Cambia esto por tu usuario de SQL Server
    password: 'Grover6988376*!',     // Cambia esto por tu contraseña
    server: 'localhost',           // Cambia esto por tu servidor SQL
    database: 'Prueba',  // Cambia esto por el nombre de tu base de datos
    options: {
        encrypt: true,            // Usar en conexiones a Azure
        trustServerCertificate: true // Usar si estás en un servidor local o no tienes un certificado
    }
};

async function connectToDatabase() {
    try {
        const pool = await sql.connect(dbConfig);
        console.log('Conectado a la base de datos de SQL Server');
        return pool;
    } catch (err) {
        console.error('Error conectando a la base de datos', err);
        throw err;
    }
}

export default connectToDatabase;
