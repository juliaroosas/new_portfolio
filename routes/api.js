const express = require('express');
const router = express.Router();
const db = require('../config/database');

// CRUD PARA PROJETOS

// CREATE - Criar novo projeto
router.post('/projetos', (req, res) => {
    const { nome, categoria_id, descricao, data } = req.body;
    const sql = 'INSERT INTO projetos (nome, categoria_id, descricao, data) VALUES (?, ?, ?, ?)';
    
    db.query(sql, [nome, categoria_id, descricao, data], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ 
            id: result.insertId, 
            nome,
            categoria_id,
            descricao,
            data
        });
    });
});

// READ - Listar todos os projetos com suas categorias
router.get('/projetos', (req, res) => {
    const sql = `
        SELECT p.id, p.nome as projeto_nome, c.nome as categoria_nome 
        FROM projetos p 
        LEFT JOIN categorias c ON p.categoria_id = c.id
    `;
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// READ - Buscar projeto por ID
router.get('/projetos/:id', (req, res) => {
    const sql = `
        SELECT p.id, p.nome as projeto_nome, c.nome as categoria_nome 
        FROM projetos p 
        LEFT JOIN categorias c ON p.categoria_id = c.id 
        WHERE p.id = ?
    `;
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: 'Projeto não encontrado' });
        res.json(result[0]);
    });
});

// UPDATE - Atualizar projeto
router.put('/projetos/:id', (req, res) => {
    const { nome, categoria_id } = req.body;
    const sql = 'UPDATE projetos SET nome = ?, categoria_id = ? WHERE id = ?';
    
    db.query(sql, [nome, categoria_id, req.params.id], (err) => {
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

module.exports = router; 