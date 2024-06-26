const db = require("../config/db")

/*const getUsuarios = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data)
    })
}*/

const pool = require("../config/db");

const getUsuarios = (_, res) => {
    pool.query("SELECT * FROM usuarios", (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(data);
    });
};


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

const deleteUsuario = (req, res) => {
    const id = req.params.id;

    const q = `DELETE FROM usuarios WHERE id = ?`;

    db.query(q, [id], (err, data) => {
        if (err) {
            console.error("Erro ao deletar usuário:", err);
            return res.status(500).json({ error: "Erro interno do servidor" });
        }

        return res.status(200).json({ message: "Usuário deletado com sucesso" });
    });
};

const putUsuario = (req, res) => {
    const { nome, cpf, email, numero } = req.body;
    const id = req.params.id;

    const q = "UPDATE usuarios SET nome = ?, cpf = ?, email = ?, numero = ? WHERE id = ?";

    db.query(q, [nome, cpf, email, numero, id], (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

const getUsuarioPorId = (req, res) => {
    const id = req.params.id;

    const q = "SELECT * FROM usuarios WHERE id = ?";

    db.query(q, [id], (err, data) => {
        if (err) return res.json(err);

        if (data.length === 0) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        return res.status(200).json(data[0]);
    });
};


module.exports = {
    getUsuarios,
    postUsuarios,
    deleteUsuario,
    putUsuario,
    getUsuarioPorId
}