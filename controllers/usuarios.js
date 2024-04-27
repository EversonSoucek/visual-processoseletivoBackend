const db = require("../config/db")

const getUsuarios = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data)
    })
}

const postUsuarios = (req, res) => {
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const email = req.body.email;
    const numero = req.body.numero;

    const q = "INSERT INTO usuarios (nome, cpf, email, numero) VALUES (?, ?, ?, ?)";

    db.query(q, [nome, cpf, email, numero], (err, data) => {
        if (err) return res.json(err);
    
        return res.status(200).json(data);
    });
};


module.exports = {
    getUsuarios,
    postUsuarios
}