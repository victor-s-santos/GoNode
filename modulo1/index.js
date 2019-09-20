const express = require("express");
const nunjucks = require('nunjucks');

const app = express();

nunjucks.configure('minhasviews', {
    autoescape: true,
    express: app,
    watch: true,
});

app.use(express.urlencoded({ extended: false}));
//definindo extensão dos arquivos views
app.set('view engine', 'njk');

const usuarios = ['Suelen Simões Costa', 'Victor Santos Silva', 'Noob Saibot']
app.get('/', (req, res) => {
    return res.render('list', { nome: 'Victor', usuarios });
});

app.get('/new', (req, res) => {
    return res.render('new');
})

app.post('/create', (req, res) => {
    console.log(req.body);
    //res.send(`Usuário cadastrado: ${req.body.usuario}`)
    usuarios.push(req.body.usuario)
    res.redirect('/')
})


app.listen(3000);