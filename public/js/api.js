// Funções para gerenciar Habilidades
async function getHabilidades() {
    try {
        const response = await fetch('/api/habilidades');
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar habilidades:', error);
        return [];
    }
}

async function addHabilidade(habilidade) {
    try {
        const response = await fetch('/api/habilidades', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(habilidade)
        });
        return await response.json();
    } catch (error) {
        console.error('Erro ao adicionar habilidade:', error);
        throw error;
    }
}

// Funções para gerenciar Tecnologias
async function getTecnologias() {
    try {
        const response = await fetch('/api/tecnologias');
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar tecnologias:', error);
        return [];
    }
}

async function addTecnologia(tecnologia) {
    try {
        const response = await fetch('/api/tecnologias', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tecnologia)
        });
        return await response.json();
    } catch (error) {
        console.error('Erro ao adicionar tecnologia:', error);
        throw error;
    }
}

// Funções para gerenciar Projetos
async function getProjetos() {
    try {
        const response = await fetch('/api/projetos');
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar projetos:', error);
        return [];
    }
}

async function addProjeto(projeto) {
    try {
        const response = await fetch('/api/projetos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projeto)
        });
        return await response.json();
    } catch (error) {
        console.error('Erro ao adicionar projeto:', error);
        throw error;
    }
}

// Funções para gerenciar Formação
async function getFormacao() {
    try {
        const response = await fetch('/api/formacao');
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar formação:', error);
        return [];
    }
}

async function addFormacao(formacao) {
    try {
        const response = await fetch('/api/formacao', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formacao)
        });
        return await response.json();
    } catch (error) {
        console.error('Erro ao adicionar formação:', error);
        throw error;
    }
}

// Funções para gerenciar Contato
async function enviarMensagem(mensagem) {
    try {
        const response = await fetch('/api/contato', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mensagem)
        });
        return await response.json();
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        throw error;
    }
}

// Função para carregar dados iniciais
async function carregarDadosIniciais() {
    try {
        const [habilidades, tecnologias, projetos, formacao] = await Promise.all([
            getHabilidades(),
            getTecnologias(),
            getProjetos(),
            getFormacao()
        ]);

        // Atualizar seção de habilidades
        const habilidadesContainer = document.getElementById('habilidades-container');
        if (habilidadesContainer) {
            habilidadesContainer.innerHTML = habilidades.map(h => `
                <div class="habilidade">
                    <h4>${h.nome}</h4>
                    <p>Nível: ${h.nivel}</p>
                    <p>Categoria: ${h.categoria}</p>
                </div>
            `).join('');
        }

        // Atualizar seção de tecnologias
        const tecnologiasContainer = document.getElementById('tecnologias-container');
        if (tecnologiasContainer) {
            tecnologiasContainer.innerHTML = tecnologias.map(t => `
                <div class="tecnologia">
                    <img src="${t.icone}" alt="${t.nome}">
                    <h4>${t.nome}</h4>
                    <p>Nível: ${t.nivel}</p>
                </div>
            `).join('');
        }

        // Atualizar seção de projetos
        const projetosContainer = document.getElementById('projetos-container');
        if (projetosContainer) {
            projetosContainer.innerHTML = projetos.map(p => `
                <article class="project-card">
                    <h2>
                        <a href="${p.link}" target="_blank" class="project-title">${p.nome}</a>
                        ${p.link === '#' ? '<span class="project-status">(em andamento)</span>' : ''}
                    </h2>
                    <img src="${p.imagem}" alt="${p.nome}" class="projeto-img" />
                    <p>${p.descricao}</p>
                </article>
            `).join('');
        }

        // Atualizar seção de formação
        const formacaoContainer = document.getElementById('formacao-container');
        if (formacaoContainer) {
            formacaoContainer.innerHTML = formacao.map(f => `
                <div class="formacao">
                    <h4>${f.curso}</h4>
                    <p>${f.instituicao}</p>
                    <p>${f.periodo}</p>
                    <p>${f.descricao}</p>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Erro ao carregar dados iniciais:', error);
    }
}

// Carregar dados quando a página carregar
document.addEventListener('DOMContentLoaded', carregarDadosIniciais); 