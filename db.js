// Configuração da conexão
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'jlm_equipamentos'
  });
  
  export { connection };