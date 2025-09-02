import mysql from 'mysql2/promise';

export default async function conectar() {
    
    if (global.poolConexoes) {
        return await global.poolConexoes.getConnection();
    }
    else{

        global.poolConexoes = mysql.createPool({

            host: 'localhost', 
            user: 'root', 
            database: 'backend',
            waitForConnections: true, 
            connectionLimit: 10,     
            queueLimit: 0
        })
    }
}