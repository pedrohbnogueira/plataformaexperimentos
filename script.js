document.addEventListener('DOMContentLoaded', () => {
    
    // Banco de dados dinâmico para os experimentos ativos
    const conteudosExperimentos = {
        "posner": {
            titulo: "Paradigma das Pistas de Posner",
            html: "<p>Aqui entrará o código interativo, instruções, scripts e coleta de dados do experimento de Posner.</p>"
        },
        "stroop": {
            titulo: "Efeito Stroop",
            html: "<p>Aqui entrará o código interativo do Efeito Stroop clássico (conflito entre Cores e Palavras).</p>"
        }
    };

    // Seleção de todos os blocos principais do HTML
    const secaoApresentacao = document.getElementById('sobre');
    const painelInstitucional = document.querySelector('.painel-institucional');
    const destaqueYoutube = document.getElementById('destaque-youtube');
    const secaoSelecao = document.querySelector('.secao-selecao-principal');
    const conteudoColecao = document.querySelector('.conteudo-colecao-retratil');
    const secaoFerramentas = document.getElementById('ferramentas');
    const containerExperimento = document.getElementById('container-experimento');
    
    const linkEquipe = document.getElementById('link-equipe');
    const linkContato = document.getElementById('link-contato');
    const linkGuiaTecnico = document.getElementById('link-guia-tecnico');
    const artigos = document.querySelectorAll('.features-section article');

    // Elementos do Menu Superior
    const navEquipe = document.getElementById('nav-equipe');
    const navContato = document.getElementById('nav-contato');
    const navGuiaTecnico = document.getElementById('nav-guia-tecnico');
    const navColecao = document.getElementById('nav-colecao');
    const navFerramentas = document.getElementById('nav-ferramentas');

    // Oculta a página principal inteira para dar lugar à tela dinâmica
    function ocultarInicio() {
        if (conteudoColecao) conteudoColecao.classList.remove('ativa');
        if (secaoApresentacao) secaoApresentacao.style.display = 'none';
        if (painelInstitucional) painelInstitucional.style.display = 'none';
        if (destaqueYoutube) destaqueYoutube.style.display = 'none';
        if (secaoSelecao) secaoSelecao.style.display = 'none';
        if (secaoFerramentas) secaoFerramentas.style.display = 'none';
    }

    // Restaura todas as seções originais da página inicial
    function voltarParaLista() {
        if (containerExperimento) {
            containerExperimento.style.display = 'none';
            containerExperimento.innerHTML = ''; 
        }

        if (secaoApresentacao) secaoApresentacao.style.display = 'block';
        if (painelInstitucional) painelInstitucional.style.display = 'grid';
        if (destaqueYoutube) destaqueYoutube.style.display = 'block';
        if (secaoSelecao) secaoSelecao.style.display = 'block';
        if (secaoFerramentas) secaoFerramentas.style.display = 'block';

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Função auxiliar para exibir a Equipe de Projeto
    function abrirEquipe() {
        ocultarInicio();

        containerExperimento.innerHTML = `
            <p style="margin-bottom: 20px;">
                <a href="#" id="btn-voltar-equipe-topo" class="tool-link">← Voltar para a página principal</a>
            </p>
            
            <div class="card" style="background: var(--card-bg); padding: 35px 30px; border-left: 3px solid var(--primary-color); border-radius: 0px;">
                <h2 class="section-title">Equipe de Projeto</h2>
                
                <div class="membros-grid">
                    <div class="membro-card">
                        <div class="membro-foto-wrapper">
                            <img src="Imagens/Fotos - equipe/Daniel.jpg" alt="Daniel Márcio Rodrigues Silva" class="membro-foto" onerror="this.src='https://placehold.co/150x150?text=Daniel'"/>
                        </div>
                        <div class="membro-info">
                            <h3>Daniel Márcio Rodrigues Silva</h3>
                            <span class="membro-cargo">Professor coordenador</span>
                            <p>Possui graduação em Psicologia (2003), mestrado em Linguística (2006) e doutorado em Neurociências (2015) pela Universidade Federal de Minas Gerais. Atuou como psicólogo no campo da clínica em saúde mental, em especial no atendimento à urgência psiquiátrica. Como bolsista de pós-doutorado pelo CNPq, desenvolveu pesquisa no campo da percepção da fala, na interface entre linguística, neurofisiologia e psicologia. Tem experiência na área das neurociências cognitivas, com ênfase em psicologia experimental, psicofisiologia, psicolinguística, fonética e fonologia, atuando principalmente nos seguintes temas: percepção e compreensão da linguagem, processamento auditivo, expertise humana e respostas evocadas cerebrais. Neste âmbito, adquiriu também experiência em registro e processamento de biosinais, delineamento experimental e métodos estatísticos de inferência e análise multivariada de dados. Atualmente é professor e chefe do Departamento de Psicologia da Universidade do Estado de Minas Gerais (UEMG) - Unidade Académica de Divinópolis.</p>
                            <a href="http://lattes.cnpq.br/5495222737934260" target="_blank" class="tool-link">Currículo Lattes ↗</a>
                        </div>
                    </div>

                    <div class="membro-card">
                        <div class="membro-foto-wrapper">
                            <img src="Imagens/Fotos - equipe/Leonardo.jpg" alt="Leonardo Duval Rodrigues" class="membro-foto" onerror="this.src='https://placehold.co/150x150?text=Leonardo'"/>
                        </div>
                        <div class="membro-info">
                            <h3>Leonardo Duval Rodrigues</h3>
                            <span class="membro-cargo">Pesquisa</span>
                            <p>Cursa psicologia na Universidade Estadual de Minas Gerais (UEMG), Unidade Divinópolis. Bolsista do projeto de pesquisa: Replicando clássicos da psicologia experimental: uma coleção digital de experimentos online para aulas práticas. Integrante do Laboratório de Psicometria e Intervenções Cognitivas - LAPICOG-UEMG. Extensionista voluntário do projeto de extensão: Jogos de Interpretação de Papéis (RPG) na UEMG/DIVINÓPOLIS e o favorecimento de habilidades cognitivas e psicossociais em adultos.</p>
                            <a href="http://lattes.cnpq.br/6855760588402019" target="_blank" class="tool-link">Currículo Lattes ↗</a>
                        </div>
                    </div>

                    <div class="membro-card">
                        <div class="membro-foto-wrapper">
                            <img src="Imagens/Fotos - equipe/Amanda.jpeg" alt="Amanda Amaro Ribeiro Silva" class="membro-foto" onerror="this.src='https://placehold.co/150x150?text=Amanda'"/>
                        </div>
                        <div class="membro-info">
                            <h3>Amanda Amaro Ribeiro Silva</h3>
                            <span class="membro-cargo">Pesquisa</span>
                            <p>Graduanda em Psicologia pela Universidade Estadual de Minas Gerais (UEMG), Unidade Divinópolis. Integrante do Laboratório de Psicometria e Intervenções Cognitivas - LAPICOG-UEMG, bolsista de Iniciação Científica no projeto "Ensino de Psicologia Experimental: efeitos do uso de simulações digitais de experimentos clássicos" e integrante do projeto de pesquisa "Replicando clássicos da psicologia experimental: uma coleção digital de experimentos online para aulas práticas". Além disso, atuou como monitora da disciplina de Introdução à Psicometria.</p>
                            <a href="http://lattes.cnpq.br/0833615019835590" target="_blank" class="tool-link">Currículo Lattes ↗</a>
                        </div>
                    </div>

                    <div class="membro-card">
                        <div class="membro-foto-wrapper">
                            <img src="Imagens/Fotos - equipe/Pedro.jpeg" alt="Pedro Henrique Barros Nogueira" class="membro-foto" onerror="this.src='https://placehold.co/150x150?text=Pedro'"/>
                        </div>
                        <div class="membro-info">
                            <h3>Pedro Henrique Barros Nogueira</h3>
                            <span class="membro-cargo">Extensão</span>
                            <p>Graduado em Direito pelas Faculdades Milton Campos (1/2013). Pós-graduado em Direito Tributário pelo Instituto Brasileiro de Estudos Tributários - IBET. Graduado em Ciências Contábeis pela Pontifícia Universidade Católica de Minas Gerais - PUC/MG. Graduando em Psicologia pela Universidade Estadual de Minas Gerais (UEMG) - 2/2026. Pós-graduado em psicanálise pelo Instituto ESPE/UNIFIL (2/2025). Monitor voluntário da disciplina Processos Psicológicos Básicos I (UEMG-Divinópolis). Extensionista bolsista do projeto "Experimentação em Psicologia: uma plataforma digital de experimentos". Integrante do Laboratório de Psicometria e Intervenções Cognitivas - LAPICOG-UEMG. Pesquisador voluntário do Grupo de pesquisa Treliça (UEMG-Divinópolis).</p>
                            <a href="http://lattes.cnpq.br/5865146069512086" target="_blank" class="tool-link">Currículo Lattes ↗</a>
                        </div>
                    </div>

                    <div class="membro-card">
                        <div class="membro-foto-wrapper">
                            <img src="Imagens/Fotos - equipe/Ana Lívia.jpg" alt="Ana Lívia Faria Martins" class="membro-foto" onerror="this.src='https://placehold.co/150x150?text=Ana+Lívia'"/>
                        </div>
                        <div class="membro-info">
                            <h3>Ana Lívia Faria Martins</h3>
                            <span class="membro-cargo">Pesquisa</span>
                            <p>Graduanda em Psicologia pela Universidade do Estado de Minas Gerais, Unidade Divinópolis. Integrante do projeto de pesquisa "Replicando clássicos da psicologia experimental: uma coleção digital de experimentos online para aulas práticas". Integrante do Laboratório de Psicometria e Intervenções Cognitivas - LAPICOG-UEMG.</p>
                            <a href="http://lattes.cnpq.br/3711959574961791" target="_blank" class="tool-link">Currículo Lattes ↗</a>
                        </div>
                    </div>
                </div>
            </div>

            <p style="margin-top: 25px; margin-bottom: 40px;">
                <a href="#" id="btn-voltar-equipe-rodape" class="tool-link">← Voltar para a página principal</a>
            </p>
        `;

        containerExperimento.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });

        document.getElementById('btn-voltar-equipe-topo').addEventListener('click', (evt) => {
            evt.preventDefault();
            voltarParaLista();
        });
        document.getElementById('btn-voltar-equipe-rodape').addEventListener('click', (evt) => {
            evt.preventDefault();
            voltarParaLista();
        });
    }

    // Função auxiliar para exibir Contato e Suporte
    function abrirContato() {
        ocultarInicio();

        containerExperimento.innerHTML = `
            <p style="margin-bottom: 20px;">
                <a href="#" id="btn-voltar-contato-topo" class="tool-link">← Voltar para a página principal</a>
            </p>
            
            <div class="card" style="background: var(--card-bg); padding: 35px 30px; border-left: 3px solid var(--primary-color); border-radius: 0px;">
                <h2 class="section-title">Contato e Suporte</h2>
                
                <p style="font-size: 1.1rem; color: var(--dark-color); font-weight: 400; margin: 20px 0 35px 0; text-align: justify;">
                    Entre em contato para esclarecer dúvidas, apresentar sugestões ou para suporte técnico. Basta preencher o formulário abaixo.
                </p>

                <form id="form-contato-suporte" style="display: flex; flex-direction: column; gap: 20px; max-width: 700px;">
                    <input type="hidden" name="access_key" value="fc84b1e8-9a63-4288-a999-3f6d732a1834">
                    <input type="hidden" name="from_name" value="Plataforma de Experimentos UEMG">

                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <label for="nome" style="font-weight: 600;">Nome Completo *</label>
                        <input type="text" id="nome" name="name" required placeholder="Digite seu nome completo" 
                            style="padding: 12px 15px; border: 1px solid #ccc; font-family: inherit; font-size: 1rem; border-radius: 0px; outline-color: var(--primary-color);">
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <label for="email" style="font-weight: 600;">E-mail *</label>
                        <input type="email" id="email" name="email" required placeholder="seuemail@exemplo.com" 
                            style="padding: 12px 15px; border: 1px solid #ccc; font-family: inherit; font-size: 1rem; border-radius: 0px; outline-color: var(--primary-color);">
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <label for="assunto" style="font-weight: 600;">Assunto *</label>
                        <select id="assunto" name="subject" required 
                            style="padding: 12px 15px; border: 1px solid #ccc; font-family: inherit; font-size: 1rem; border-radius: 0px; outline-color: var(--primary-color); background: #fff;">
                            <option value="" disabled selected>Selecione um assunto</option>
                            <option value="Dúvidas sobre Experimentos">Dúvidas sobre Experimentos</option>
                            <option value="Suporte Técnico / Erro na Plataforma">Suporte Técnico / Erro na Plataforma</option>
                            <option value="Sugestões e Elogios">Sugestões e Elogios</option>
                            <option value="Outros Motivos">Outros Motivos</option>
                        </select>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <label for="mensagem" style="font-weight: 600;">Mensagem *</label>
                        <textarea id="mensagem" name="message" rows="6" required placeholder="Escreva aqui a sua mensagem detalhadamente..." 
                            style="padding: 12px 15px; border: 1px solid #ccc; font-family: inherit; font-size: 1rem; border-radius: 0px; outline-color: var(--primary-color); resize: vertical;"></textarea>
                    </div>

                    <div>
                        <button type="submit" id="btn-enviar-contato" class="tool-link" style="background: var(--primary-color); color: #fff; border: none; padding: 12px 28px; cursor: pointer; font-size: 1rem; font-weight: 600;">
                            Enviar Mensagem
                        </button>
                    </div>

                    <div id="mensagem-status" style="margin-top: 10px; display: none;"></div>
                </form>
            </div>

            <p style="margin-top: 25px; margin-bottom: 40px;">
                <a href="#" id="btn-voltar-contato-rodape" class="tool-link">← Voltar para a página principal</a>
            </p>
        `;

        containerExperimento.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const formContato = document.getElementById('form-contato-suporte');
        const statusDiv = document.getElementById('mensagem-status');
        const btnEnviar = document.getElementById('btn-enviar-contato');

        formContato.addEventListener('submit', (formEvt) => {
            formEvt.preventDefault();

            btnEnviar.disabled = true;
            btnEnviar.innerText = 'Enviando...';

            statusDiv.style.display = 'block';
            statusDiv.style.color = '#856404';
            statusDiv.style.backgroundColor = '#fff3cd';
            statusDiv.style.border = '1px solid #ffeeba';
            statusDiv.style.padding = '12px 15px';
            statusDiv.innerText = 'Processando envio da mensagem...';

            const formData = new FormData(formContato);

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status === 200) {
                    statusDiv.style.color = '#155724';
                    statusDiv.style.backgroundColor = '#d4edda';
                    statusDiv.style.border = '1px solid #c3e6cb';
                    statusDiv.innerText = 'Obrigado! Sua mensagem foi enviada com sucesso.';
                    formContato.reset();
                } else {
                    throw new Error(json.message || 'Erro no envio.');
                }
            })
            .catch(() => {
                statusDiv.style.color = '#721c24';
                statusDiv.style.backgroundColor = '#f8d7da';
                statusDiv.style.border = '1px solid #f5c6cb';
                statusDiv.innerText = 'Ocorreu um erro ao enviar. Verifique sua conexão e tente novamente.';
            })
            .finally(() => {
                btnEnviar.disabled = false;
                btnEnviar.innerText = 'Enviar Mensagem';
            });
        });

        document.getElementById('btn-voltar-contato-topo').addEventListener('click', (evt) => {
            evt.preventDefault();
            voltarParaLista();
        });
        document.getElementById('btn-voltar-contato-rodape').addEventListener('click', (evt) => {
            evt.preventDefault();
            voltarParaLista();
        });
    }

    // Função auxiliar para exibir o Guia Técnico
    function abrirGuiaTecnico() {
        ocultarInicio();

        containerExperimento.innerHTML = `
            <p style="margin-bottom: 20px;">
                <a href="#" id="btn-voltar-guia-topo" class="tool-link">← Voltar para a página principal</a>
            </p>
            
            <div class="card" style="background: var(--card-bg); padding: 35px 30px; border-left: 3px solid var(--primary-color); border-radius: 0px;">
                <h2 class="section-title">Guia Técnico de Utilização</h2>
                
                <p style="font-size: 1.1rem; color: var(--dark-color); font-weight: 400; margin: 20px 0 25px 0; text-align: justify;">
                    Abaixo você pode visualizar o manual de utilização da plataforma de forma interativa. Caso prefira guardar uma cópia no seu dispositivo, utilize a opção de download abaixo.
                </p>
                
                <p style="margin-bottom: 25px;">
                    <a href="Documentos/Guia_Tecnico_Roteiro.pdf" download="Guia_Tecnico_Roteiro.pdf" class="secondary-button" style="text-decoration: none; display: inline-block;">
                        📥 Baixar Guia Técnico (PDF)
                    </a>
                </p>

                <div class="pdf-container-wrapper" style="position: relative; width: 100%; height: 75vh; border: 1px solid var(--border-color); background-color: var(--light-bg);">
                    <iframe src="Documentos/Guia_Tecnico_Roteiro.pdf" class="pdf-iframe" style="width: 100%; height: 100%; border: none;" title="Visualizador do Guia Técnico">
                        <p style="padding: 20px; text-align: center;">Seu navegador não suporta a exibição direta de PDFs. <a href="Documentos/Guia_Tecnico_Roteiro.pdf" download>Clique aqui para baixar o arquivo.</a></p>
                    </iframe>
                </div>
            </div>

            <p style="margin-top: 25px; margin-bottom: 40px;">
                <a href="#" id="btn-voltar-guia-rodape" class="tool-link">← Voltar para a página principal</a>
            </p>
        `;

        containerExperimento.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });

        document.getElementById('btn-voltar-guia-topo').addEventListener('click', (evt) => {
            evt.preventDefault();
            voltarParaLista();
        });
        document.getElementById('btn-voltar-guia-rodape').addEventListener('click', (evt) => {
            evt.preventDefault();
            voltarParaLista();
        });
    }

    // 1. EVENTOS DE CLIQUE NA PÁGINA E NO MENU
    if (linkEquipe) linkEquipe.addEventListener('click', (e) => { e.preventDefault(); abrirEquipe(); });
    if (navEquipe) navEquipe.addEventListener('click', (e) => { e.preventDefault(); abrirEquipe(); });

    if (linkContato) linkContato.addEventListener('click', (e) => { e.preventDefault(); abrirContato(); });
    if (navContato) navContato.addEventListener('click', (e) => { e.preventDefault(); abrirContato(); });

    if (linkGuiaTecnico) linkGuiaTecnico.addEventListener('click', (e) => { e.preventDefault(); abrirGuiaTecnico(); });
    if (navGuiaTecnico) navGuiaTecnico.addEventListener('click', (e) => { e.preventDefault(); abrirGuiaTecnico(); });

    // Navegação suave do Menu: Coleção de Experimentos
    if (navColecao) {
        navColecao.addEventListener('click', (e) => {
            e.preventDefault();
            voltarParaLista();
            if (conteudoColecao) conteudoColecao.classList.add('ativa');
            const gatilho = document.getElementById('gatilho-colecao');
            if (gatilho) {
                gatilho.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // Navegação suave do Menu: Ferramentas de Análise & Pesquisa
    if (navFerramentas) {
        navFerramentas.addEventListener('click', (e) => {
            e.preventDefault();
            voltarParaLista();
            if (secaoFerramentas) {
                secaoFerramentas.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // 4. EVENTO: Cards de Experimentos
    artigos.forEach(artigo => {
        artigo.addEventListener('click', (e) => {
            const idExperimento = artigo.getAttribute('data-experimento');

            if (idExperimento === 'labirinto') return;

            const dados = conteudosExperimentos[idExperimento];

            if (dados) {
                ocultarInicio();

                containerExperimento.innerHTML = `
                    <p style="margin-bottom: 20px;">
                        <a href="#" id="btn-voltar-topo" class="tool-link">← Voltar para a página principal</a>
                    </p>
                    <div class="card" style="background: var(--card-bg); padding: 30px; border-left: 3px solid var(--primary-color); border-radius: 0px;">
                        <h2 style="color: var(--primary-color); margin-top:0; font-weight:700;">${dados.titulo}</h2>
                        <div class="conteudo-dinamico">
                            ${dados.html}
                        </div>
                    </div>
                    <p style="margin-top: 25px; margin-bottom: 40px;">
                        <a href="#" id="btn-voltar-rodape" class="tool-link">← Voltar para a página principal</a>
                    </p>
                `;

                containerExperimento.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });

                document.getElementById('btn-voltar-topo').addEventListener('click', (evt) => {
                    evt.preventDefault();
                    voltarParaLista();
                });
                document.getElementById('btn-voltar-rodape').addEventListener('click', (evt) => {
                    evt.preventDefault();
                    voltarParaLista();
                });
            } else {
                alert("Este conteúdo está sendo desenvolvido e estará disponível em breve! ;)");
            }
        });
    });

    // 5. EVENTO: Expandir/Recolher a Coleção de Experimentos
    const gatilhoColecao = document.getElementById('gatilho-colecao');

    if (gatilhoColecao && conteudoColecao) {
        gatilhoColecao.addEventListener('click', (e) => {
            e.preventDefault();
            conteudoColecao.classList.toggle('ativa');
        });

        gatilhoColecao.addEventListener('mouseenter', () => {
            conteudoColecao.classList.add('ativa');
        });
    }
});