const express = require("express");

const app = express();

app.get('/', (req, res) => {
    return res.send(`Hi ${req.query.name}`);
});

app.get('/login/:nickname', (req, res) => {
    return res.send(`Bem vindo, ${req.params.nickname}`);
});

app.listen(3000);