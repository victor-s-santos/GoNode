const express = require("express");

const app = express();

app.get('/', (req, res) => {
    return res.send(`Hello ${req.query.name}`);
});

app.get('/login/:nickname', (req, res) => {
    return res.send(`Bem vindo, ${req.params.nickname}`);
});

app.get('/conta/:nome', (req, res) => {
    return res.json({
        message: `Bem vindo ${req.params.nome}, como vai você?`
    });
})
app.listen(3000);