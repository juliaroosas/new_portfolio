-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Criar tabela de categorias (tabela 1)
CREATE TABLE IF NOT EXISTS categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100)
);

-- Criar tabela de projetos (tabela 2)
CREATE TABLE IF NOT EXISTS projetos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
); 