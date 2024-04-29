const express = require('express')
const cors = require('cors')
const app = express()
//const mysql = require('mysql')
const porta = 3500;

app.use(express.json())
app.use(cors())

app.use("/", require('./routes/usuarios'))

/*app.listen(porta, () => {
    console.log("Servidor rodando");
})*/

const PORT = process.env.PORT || porta;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});