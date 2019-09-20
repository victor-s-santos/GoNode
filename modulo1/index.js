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

app.get('/', (req, res) => {
    return res.render('list', { nome: 'Victor'});
});

app.listen(3000);