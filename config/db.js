const mysql = require("mysql");

// Criando um pool de conexões
const pool = mysql.createPool({
    connectionLimit: 10,  // O número máximo de conexões que o pool pode ter
    host: 'wm63be5w8m7gs25a.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'u1riz5wudye7tadb',
    port: 3306,
    password: 'b45nd8jykdkidofb',
    database: 'gvcma2x4y0dlkejd'
});

// Testando a conexão
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Erro ao conectar-se ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL');
    connection.release(); // Devolve a conexão para o pool
});

module.exports = pool;

/*const mysql = require("mysql")

const db = mysql.createConnection({
    user:'root',
    host: 'localhost',
    password: 'vssql',
    database: 'visual'
})

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar-se ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL');
});

module.exports = db*/

//mysql://u1riz5wudye7tadb:b45nd8jykdkidofb@wm63be5w8m7gs25a.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/gvcma2x4y0dlkejd