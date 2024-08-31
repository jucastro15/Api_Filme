import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Carregar variáveis de ambiente
dotenv.config();

// Configurar conexão com o banco de dados
const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,

    typeCast: function (field, next) {
        if (field.type === 'TINY' && field.length === 1) {
          return field.string() === "1"; // Converte 1 para true e 0 para false
        }
        if (field.type.includes ('DECIMAL')) {
          return Number(field.string()); // Converte valores decimais para número
        }
        return next(); // Retorna o valor original para outros tipos
      }
});

console.log('---> Conexão com BD realizada');

export default connection;