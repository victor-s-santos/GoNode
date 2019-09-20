const express = require("express");
const nunjucks = require('nunjucks');

const app = express();

nunjucks.configure('minhasviews', {
    autoescape: true,
    express: app,
    watch: true,
});
//definindo extensão dos arquivos views
app.set('view engine', 'njk');

const usuarios = ['Suelen Simões Costa', 'Victor Santos Silva', 'Noob Saibot']
app.get('/', (req, res) => {
    return res.render('list', { nome: 'Victor', usuarios });
});

app.get('/new', (req, res) => {
    return res.render('new');
})

app.listen(3000);