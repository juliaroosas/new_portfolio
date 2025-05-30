const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas da API
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Rotas das páginas
app.get('/', (req, res) => res.render('index', { title: 'Início' }));
app.get('/formacao', (req, res) => res.render('formacao', { title: 'Formação & Habilidades' }));
app.get('/projetos', (req, res) => res.render('projetos', { title: 'Projetos' }));
app.get('/contato', (req, res) => res.render('contato', { title: 'Contato' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
