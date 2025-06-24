-- Limpar tabelas antes de inserir
DELETE FROM home_sections;
DELETE FROM formacao;
DELETE FROM habilidades;
DELETE FROM tecnologias;
DELETE FROM projetos;

-- Home
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

-- Formação Acadêmica
INSERT INTO formacao (instituicao, curso, periodo, descricao, tipo) VALUES
('Fatec São José dos Campos', 'Desenvolvimento de Software Multiplataforma', 'em andamento', '', 'academica'),
('Unicamp', 'Mestrado em Linguística', '2015–2017', '', 'academica'),
('UFLA', 'Licenciatura em Letras', '2011–2014', '', 'academica');

-- Formação Complementar
INSERT INTO formacao (instituicao, curso, periodo, descricao, tipo) VALUES
('Coder House', 'HTML e CSS', '', '', 'complementar'),
('Centro Paula Souza', 'Escola de Inovadores', '', '', 'complementar');

-- Habilidades
INSERT INTO habilidades (nome, categoria, nivel) VALUES
('HTML', 'Front-end', 'Avançado'),
('CSS', 'Front-end', 'Avançado'),
('Bootstrap', 'Front-end', 'Intermediário'),
('Tailwind CSS', 'Front-end', 'Intermediário'),
('JavaScript', 'Front-end', 'Intermediário'),
('TypeScript', 'Front-end', 'Básico'),
('React', 'Front-end', 'Básico'),
('Node.js', 'Back-end', 'Básico'),
('Python', 'Back-end', 'Básico'),
('Flask', 'Back-end', 'Básico'),
('SQL', 'Back-end', 'Básico'),
('Git', 'Ferramentas', 'Intermediário'),
('Power Apps', 'Ferramentas', 'Intermediário'),
('Asana', 'Ferramentas', 'Avançado'),
('Jira', 'Ferramentas', 'Intermediário'),
('Trello', 'Ferramentas', 'Avançado'),
('Scrum', 'Metodologias', 'Intermediário');

-- Tecnologias
INSERT INTO tecnologias (nome, nivel, icone) VALUES
('HTML5', 'Avançado', 'fab fa-html5'),
('CSS3', 'Avançado', 'fab fa-css3-alt'),
('JavaScript', 'Intermediário', 'fab fa-js'),
('React', 'Básico', 'fab fa-react'),
('Node.js', 'Básico', 'fab fa-node-js'),
('Python', 'Básico', 'fab fa-python'),
('SQL', 'Básico', 'fas fa-database'),
('Git', 'Intermediário', 'fab fa-git');

-- Projetos
INSERT INTO projetos (nome, descricao, detalhes, link, imagem, tecnologias) VALUES
('Dashboard de Impacto - Projeto Helpnei',
'Projeto que consistiu no desenvolvimento de um sistema de visualização inteligente com Dashboard de Indicadores para a plataforma Helpnei, voltado ao monitoramento em tempo real do impacto social e comercial gerado pelas ações de patrocínio.',
'', '#', '/images/projetos/helpnei.jpg', 'React, Node.js, SQL, Power BI'),

('Restaurante "A Divisa"',
'Projeto final de um bootcamp realizado pela Coder House, que contou com o desenvolvimento de um site de um restaurante fictício com culinária de diferentes países da América Latina.',
'', 'https://adivisa.vercel.app', '/images/projetos/adivisa.jpg', 'HTML, CSS, JavaScript, Bootstrap'),

('Consulta de Desempenho de Vereadores',
'Projeto acadêmico que viabilizou o desenvolvimento de uma plataforma para os eleitores de São José dos Campos buscarem dados de vereadores na eleição de 2024.',
'', 'http://api-vereadores.ddns.net', '/images/projetos/vereadores.jpg', 'Python, Flask, SQL, HTML, CSS'); 