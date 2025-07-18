-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Tabela de Projetos
CREATE TABLE IF NOT EXISTS projetos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    imagem VARCHAR(255),
    link VARCHAR(255)
);

-- Tabela de Habilidades
CREATE TABLE IF NOT EXISTS habilidades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nivel VARCHAR(50) NOT NULL,
    categoria VARCHAR(50) NOT NULL
);

-- Tabela de Tecnologias
CREATE TABLE IF NOT EXISTS tecnologias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nivel VARCHAR(50) NOT NULL,
    icone VARCHAR(255)
);

-- Tabela de Formação
CREATE TABLE IF NOT EXISTS formacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    instituicao VARCHAR(255) NOT NULL,
    curso VARCHAR(255) NOT NULL,
    periodo VARCHAR(100) NOT NULL,
    descricao TEXT,
    tipo ENUM('academica', 'complementar') NOT NULL DEFAULT 'academica'
);

-- Tabela para a seção Home
CREATE TABLE IF NOT EXISTS home_sections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    conteudo TEXT NOT NULL,
    ordem INT NOT NULL,
    tipo ENUM('sobre', 'caminho', 'proximos') NOT NULL
);

DROP TABLE IF EXISTS contato_links;

-- Dados iniciais

INSERT INTO home_sections (titulo, conteudo, ordem, tipo) VALUES
('Sobre mim',
'Sou a Julia, tenho 32 anos e sou aluna do 2º período do curso de <strong>Desenvolvimento de Software Multiplataforma</strong> da Fatec de São José dos Campos. Embora hoje eu esteja na área de tecnologia, tinha planos muitos diferentes quando saí do Ensino Médio. Vou te contar um pouquinho!',
1, 'sobre'),

('Meu caminho até agora',
'Aos 17 anos, ingressei no curso de Letras a fim de me tornar editora de livros. Algum tempo depois de me formar, alcancei esse objetivo e trabalhei, por aproximadamente 6 anos, produzindo livros didáticos. Além de habilidades específicas da área, desenvolvi habilidades de <strong>gerenciamento de projetos</strong>, já que fui responsável por acompanhar a produção de diversos livros do início ao fim.<br><br>Com a chegada da pandemia, comecei a trabalhar remotamente e a usar muito mais a tecnologia, o que me aproximou dessa área e foi aos poucos despertando a minha curiosidade, já que tive que aprender a usar diferentes ferramentas para a execução do meu trabalho e também para a <strong>comunicação com as equipes</strong>.<br><br>Além de editora, também fui professora. Certamente essa experiência ampliou a minha visão de mundo e aprimorou minhas habilidades interpessoais. Nessa época, também tive contato com tecnologia educacional, o que me levou a refletir sobre a possibilidade de estudar formalmente sobre essa área que já despertava o meu interesse. Foi então que ingressei na Fatec.',
2, 'caminho'),

('Próximos passos',
'Ao longo desse processo de transição de carreira, recebi a oportunidade de trabalhar com o desenvolvimento de aplicativos numa empresa de Educação, unindo duas áreas de que gosto bastante. Sei que este é só o começo de uma longa jornada de muito trabalho e aprendizado, mas pretendo seguir empenhada em projetos que garantam a integração entre diferentes áreas do conhecimento.',
3, 'proximos');

INSERT INTO formacao (instituicao, curso, periodo, descricao, tipo) VALUES
('Fatec São José dos Campos', 'Desenvolvimento de Software Multiplataforma', 'em andamento', '', 'academica'),
('Unicamp', 'Mestrado em Linguística', '2015–2017', '', 'academica'),
('UFLA', 'Licenciatura em Letras', '2011–2014', '', 'academica');

INSERT INTO formacao (instituicao, curso, periodo, descricao, tipo) VALUES
('Coder House', 'HTML e CSS', '', '', 'complementar'),
('Centro Paula Souza', 'Escola de Inovadores', '', '', 'complementar');

DELETE FROM habilidades;

INSERT INTO habilidades (nome, categoria, nivel) VALUES
('HTML, CSS', 'Front-end', 'Avançado'),
('Bootstrap, Tailwind CSS', 'Front-end', 'Intermediário'),
('JavaScript, TypeScript', 'Front-end', 'Intermediário'),
('React', 'Front-end', 'Básico'),
('Node.js', 'Back-end', 'Básico'),
('Python, Flask', 'Back-end', 'Básico'),
('SQL', 'Back-end', 'Básico'),
('Git', 'Ferramentas', 'Intermediário'),
('Power Apps', 'Ferramentas', 'Intermediário'),
('Asana, Jira, Trello', 'Ferramentas', 'Avançado'),
('Scrum', 'Metodologias', 'Intermediário');

INSERT INTO tecnologias (nome, nivel, icone) VALUES
('HTML5', 'Avançado', 'fab fa-html5'),
('CSS3', 'Avançado', 'fab fa-css3-alt'),
('JavaScript', 'Intermediário', 'fab fa-js'),
('React', 'Básico', 'fab fa-react'),
('Node.js', 'Básico', 'fab fa-node-js'),
('Python', 'Básico', 'fab fa-python'),
('SQL', 'Básico', 'fas fa-database'),
('Git', 'Intermediário', 'fab fa-git');

INSERT INTO projetos (nome, descricao, link, imagem) VALUES
('Dashboard de Impacto - Projeto Helpnei',
'Projeto que consistiu no desenvolvimento de um sistema de visualização inteligente com Dashboard de Indicadores para a plataforma Helpnei, voltado ao monitoramento em tempo real do impacto social e comercial gerado pelas ações de patrocínio.',
'#', '/images/projetos/helpnei.jpg'),

('Restaurante "A Divisa"',
'Projeto final de um bootcamp realizado pela Coder House, que contou com o desenvolvimento de um site de um restaurante fictício com culinária de diferentes países da América Latina.',
'https://adivisa.vercel.app', '/images/projetos/adivisa.jpg'),

('Consulta de Desempenho de Vereadores',
'Projeto acadêmico que viabilizou o desenvolvimento de uma plataforma para os eleitores de São José dos Campos buscarem dados de vereadores na eleição de 2024.',
'http://api-vereadores.ddns.net', '/images/projetos/vereadores.jpg');

DROP TABLE IF EXISTS contato; 