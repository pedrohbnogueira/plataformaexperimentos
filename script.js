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

    // Seleção dos elementos da interface
    const artigos = document.querySelectorAll('.features-section article');
    const secaoApresentacao = document.getElementById('secao-apresentacao');
    const conteudoPrincipal = document.getElementById('conteudo-principal');
    const secaoFerramentas = document.getElementById('secao-ferramentas-container');
    const containerExperimento = document.getElementById('container-experimento');
    const linkEquipe = document.getElementById('link-equipe');

    // Monitora o clique em cada um dos cards de experimentos
    artigos.forEach(artigo => {
        artigo.addEventListener('click', () => {
            const idExperimento = artigo.getAttribute('data-experimento');

            // Se for o Labirinto, ignora a lógica do JS e permite que o link HTML redirecione para /labirinto
            if (idExperimento === 'labirinto') {
                return;
            }

            const dados = conteudosExperimentos[idExperimento];

            if (dados) {
                // Esconde as seções da lista principal
                secaoApresentacao.style.display = 'none';
                conteudoPrincipal.style.display = 'none';
                if (secaoFerramentas) secaoFerramentas.style.display = 'none';

                // Injeta a estrutura do experimento selecionado com links padronizados com o Labirinto
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

                // Torna a seção do experimento visível
                containerExperimento.style.display = 'block';

                // Rola para o topo da página suavemente ao carregar o experimento
                window.scrollTo({ top: 0, behavior: 'smooth' });

                // Adiciona o evento de clique para os links "Voltar"
                document.getElementById('btn-voltar-topo').addEventListener('click', (e) => {
                    e.preventDefault();
                    voltarParaLista();
                });
                document.getElementById('btn-voltar-rodape').addEventListener('click', (e) => {
                    e.preventDefault();
                    voltarParaLista();
                });
            } else {
                // Mensagem amigável para experimentos ainda não disponíveis
                alert("Este conteúdo está sendo desenvolvido e estará disponível em breve! ;)");
            }
        });
    });

    // Evento dinâmico para a Equipe de Projeto
    if (linkEquipe) {
        linkEquipe.addEventListener('click', (e) => {
            e.preventDefault();

            // Oculta a visualização padrão inicial
            secaoApresentacao.style.display = 'none';
            conteudoPrincipal.style.display = 'none';
            if (secaoFerramentas) secaoFerramentas.style.display = 'none';

            // Injeta o conteúdo estruturado da equipe com links padronizados conforme o Labirinto
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
                                <p>Possui graduação em Psicologia (2003), mestrado em Linguística (2006) e doutorado em Neurociências (2015) pela Universidade Federal de Minas Gerais. Atuou como psicólogo no campo da clínica em saúde mental, em especial no atendimento à urgência psiquiátrica. Como bolsista de pós-doutorado pelo CNPq, desenvolveu pesquisa no campo da percepção da fala, na interface entre linguística, neurofisiologia e psicologia. Tem experiência na área das neurociências cognitivas, com ênfase em psicologia experimental, psicofisiologia, psicolinguística, fonética e fonologia, atuando principalmente nos seguintes temas: percepção e compreensão da linguagem, processamento auditivo, expertise humana e respostas evocadas cerebrais. Neste âmbito, adquiriu também experiência em registro e processamento de biosinais, delineamento experimental e métodos estatísticos de inferência e análise multivariada de dados. Atualmente é professor e chefe do Departamento de Psicologia da Universidade do Estado de Minas Gerais (UEMG) - Unidade Acadêmica de Divinópolis.</p>
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

                        <div class="membro-card">
                            <div class="membro-foto-wrapper">
                                <img src="Imagens/Fotos - equipe/Ana Carolina.jpeg" alt="Ana Carolina Lopes da Silva" class="membro-foto" onerror="this.src='https://placehold.co/150x150?text=Ana+Carolina'"/>
                            </div>
                            <div class="membro-info">
                                <h3>Ana Carolina Lopes da Silva</h3>
                                <span class="membro-cargo">Pesquisa</span>
                                <p>Graduanda em Psicologia pela Universidade do Estado de Minas Gerais (UEMG), Unidade Divinópolis. Bolsista de Iniciação Científica (PIBIC/FAPEMIG) no projeto “Folha Não Fala, Mas Sabe Curar: multinaturalismo e cura integral com ervas nas tradições afro-indígenas”, na área de Antropologia. Integrante voluntária do projeto de pesquisa “Replicando Clássicos da Psicologia Experimental: uma coleção digital de experimentos online para aulas práticas”. Além disso, atuou como monitora da disciplina de Processos Psicológicos Básicos I.</p>
                                <a href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do;jsessionid=ED498E509086E8F673923BBAC5F9EC9A.buscatextual_0" target="_blank" class="tool-link">Currículo Lattes ↗</a>
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

            // Eventos para acionar o retorno em ambos os links
            document.getElementById('btn-voltar-equipe-topo').addEventListener('click', (evt) => {
                evt.preventDefault();
                voltarParaLista();
            });
            document.getElementById('btn-voltar-equipe-rodape').addEventListener('click', (evt) => {
                evt.preventDefault();
                voltarParaLista();
            });
        });
    }

    // Função para restaurar a interface original do site
    function voltarParaLista() {
        containerExperimento.style.display = 'none';
        containerExperimento.innerHTML = ''; 

        secaoApresentacao.style.display = 'block';
        conteudoPrincipal.style.display = 'block';
        if (secaoFerramentas) secaoFerramentas.style.display = 'block';
    }
});