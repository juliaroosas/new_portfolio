const express = require('express');
const router = express.Router();
const db = require('../config/database');

// CREATE - Criar novo projeto
router.post('/projetos', (req, res) => {
    const { nome, descricao, link } = req.body;
    const sql = 'INSERT INTO projetos (nome, descricao, link) VALUES (?, ?, ?)';
    
    db.query(sql, [nome, descricao, link], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ 
            id: result.insertId, 
            nome,
            descricao,
            link
        });
    });
});

// READ - Listar todos os projetos
router.get('/projetos', (req, res) => {
    const sql = 'SELECT id, nome, descricao, link FROM projetos';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// READ - Buscar projeto por ID
router.get('/projetos/:id', (req, res) => {
    const sql = 'SELECT id, nome, descricao, link FROM projetos WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: 'Projeto não encontrado' });
        res.json(result[0]);
    });
});

// UPDATE - Atualizar projeto
router.put('/projetos/:id', (req, res) => {
    const { nome, descricao, link } = req.body;
    const sql = 'UPDATE projetos SET nome = ?, descricao = ?, link = ? WHERE id = ?';
    
    db.query(sql, [nome, descricao, link, req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Projeto atualizado com sucesso' });
    });
});

// DELETE - Excluir projeto
router.delete('/projetos/:id', (req, res) => {
    db.query('DELETE FROM projetos WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Projeto excluído com sucesso' });
    });
});

// CRUD PARA CATEGORIAS

// CREATE - Criar nova categoria
router.post('/categorias', (req, res) => {
    const { nome } = req.body;
    db.query('INSERT INTO categorias (nome) VALUES (?)', [nome], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, nome });
    });
});

// READ - Listar todas as categorias
router.get('/categorias', (req, res) => {
    db.query('SELECT * FROM categorias', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// READ - Buscar categoria por ID
router.get('/categorias/:id', (req, res) => {
    db.query('SELECT * FROM categorias WHERE id = ?', [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: 'Categoria não encontrada' });
        res.json(result[0]);
    });
});

// UPDATE - Atualizar categoria
router.put('/categorias/:id', (req, res) => {
    const { nome } = req.body;
    db.query('UPDATE categorias SET nome = ? WHERE id = ?', [nome, req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Categoria atualizada com sucesso' });
    });
});

// DELETE - Excluir categoria
router.delete('/categorias/:id', (req, res) => {
    db.query('DELETE FROM categorias WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Categoria excluída com sucesso' });
    });
});

// ROTAS PARA HABILIDADES
router.post('/habilidades', (req, res) => {
    const { nome, nivel, categoria } = req.body;
    const sql = 'INSERT INTO habilidades (nome, nivel, categoria) VALUES (?, ?, ?)';
    
    db.query(sql, [nome, nivel, categoria], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, nome, nivel, categoria });
    });
});

router.get('/habilidades', (req, res) => {
    db.query('SELECT * FROM habilidades', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

router.get('/habilidades/:id', (req, res) => {
    db.query('SELECT * FROM habilidades WHERE id = ?', [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: 'Habilidade não encontrada' });
        res.json(result[0]);
    });
});

router.put('/habilidades/:id', (req, res) => {
    const { nome, nivel, categoria } = req.body;
    const sql = 'UPDATE habilidades SET nome = ?, nivel = ?, categoria = ? WHERE id = ?';
    
    db.query(sql, [nome, nivel, categoria, req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Habilidade atualizada com sucesso' });
    });
});

router.delete('/habilidades/:id', (req, res) => {
    db.query('DELETE FROM habilidades WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Habilidade excluída com sucesso' });
    });
});

// ROTAS PARA TECNOLOGIAS
router.post('/tecnologias', (req, res) => {
    const { nome, nivel, icone } = req.body;
    const sql = 'INSERT INTO tecnologias (nome, nivel, icone) VALUES (?, ?, ?)';
    
    db.query(sql, [nome, nivel, icone], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, nome, nivel, icone });
    });
});

router.get('/tecnologias', (req, res) => {
    db.query('SELECT * FROM tecnologias', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

router.get('/tecnologias/:id', (req, res) => {
    db.query('SELECT * FROM tecnologias WHERE id = ?', [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: 'Tecnologia não encontrada' });
        res.json(result[0]);
    });
});

router.put('/tecnologias/:id', (req, res) => {
    const { nome, nivel, icone } = req.body;
    const sql = 'UPDATE tecnologias SET nome = ?, nivel = ?, icone = ? WHERE id = ?';
    
    db.query(sql, [nome, nivel, icone, req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Tecnologia atualizada com sucesso' });
    });
});

router.delete('/tecnologias/:id', (req, res) => {
    db.query('DELETE FROM tecnologias WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Tecnologia excluída com sucesso' });
    });
});

// ROTAS PARA FORMAÇÃO
router.post('/formacao', (req, res) => {
    const { instituicao, curso, periodo, descricao } = req.body;
    const sql = 'INSERT INTO formacao (instituicao, curso, periodo, descricao) VALUES (?, ?, ?, ?)';
    
    db.query(sql, [instituicao, curso, periodo, descricao], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, instituicao, curso, periodo, descricao });
    });
});

router.get('/formacao', (req, res) => {
    db.query('SELECT * FROM formacao', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

router.get('/formacao/:id', (req, res) => {
    db.query('SELECT * FROM formacao WHERE id = ?', [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: 'Formação não encontrada' });
        res.json(result[0]);
    });
});

router.put('/formacao/:id', (req, res) => {
    const { instituicao, curso, periodo, descricao } = req.body;
    const sql = 'UPDATE formacao SET instituicao = ?, curso = ?, periodo = ?, descricao = ? WHERE id = ?';
    
    db.query(sql, [instituicao, curso, periodo, descricao, req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Formação atualizada com sucesso' });
    });
});

router.delete('/formacao/:id', (req, res) => {
    db.query('DELETE FROM formacao WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Formação excluída com sucesso' });
    });
});

// ROTAS PARA CONTATO
router.post('/contato', (req, res) => {
    const { nome, email, mensagem } = req.body;
    const sql = 'INSERT INTO contato (nome, email, mensagem) VALUES (?, ?, ?)';
    
    db.query(sql, [nome, email, mensagem], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, nome, email, mensagem });
    });
});

router.get('/contato', (req, res) => {
    db.query('SELECT * FROM contato', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

router.get('/contato/:id', (req, res) => {
    db.query('SELECT * FROM contato WHERE id = ?', [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: 'Mensagem não encontrada' });
        res.json(result[0]);
    });
});

router.delete('/contato/:id', (req, res) => {
    db.query('DELETE FROM contato WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Mensagem excluída com sucesso' });
    });
});

// ROTAS PARA HOME
router.get('/home', (req, res) => {
    const sql = 'SELECT * FROM home_sections ORDER BY ordem';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

router.get('/home/:id', (req, res) => {
    const sql = 'SELECT * FROM home_sections WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: 'Seção não encontrada' });
        res.json(result[0]);
    });
});

router.post('/home', (req, res) => {
    const { titulo, conteudo, ordem, tipo } = req.body;
    const sql = 'INSERT INTO home_sections (titulo, conteudo, ordem, tipo) VALUES (?, ?, ?, ?)';
    
    db.query(sql, [titulo, conteudo, ordem, tipo], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ 
            id: result.insertId, 
            titulo,
            conteudo,
            ordem,
            tipo
        });
    });
});

router.put('/home/:id', (req, res) => {
    const { titulo, conteudo, ordem, tipo } = req.body;
    const sql = 'UPDATE home_sections SET titulo = ?, conteudo = ?, ordem = ?, tipo = ? WHERE id = ?';
    
    db.query(sql, [titulo, conteudo, ordem, tipo, req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Seção atualizada com sucesso' });
    });
});

router.delete('/home/:id', (req, res) => {
    db.query('DELETE FROM home_sections WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Seção excluída com sucesso' });
    });
});

module.exports = router;
