const mysql = require("mysql")

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

module.exports = db