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
    const containerExperimento = document.getElementById('container-experimento');

    // Monitora o clique em cada um dos cards de experimentos
    artigos.forEach(artigo => {
        artigo.addEventListener('click', () => {
            const idExperimento = artigo.getAttribute('data-experimento');
            const dados = conteudosExperimentos[idExperimento];

            if (dados) {
                // Esconde as seções da lista principal (incluindo as ferramentas e bloco do YouTube)
                secaoApresentacao.style.display = 'none';
                conteudoPrincipal.style.display = 'none';

                // Injeta a estrutura do experimento selecionado com um botão de voltar
                containerExperimento.innerHTML = `
                    <button id="btn-voltar" class="secondary-button" style="margin-bottom: 20px;">← Voltar para a Lista</button>
                    <div class="card" style="background: var(--card-bg); padding: 30px; border-left: 3px solid var(--primary-color); border-radius: 0px;">
                        <h2 style="color: var(--primary-color); margin-top:0; font-weight:700;">${dados.titulo}</h2>
                        <div class="conteudo-dinamico">
                            ${dados.html}
                        </div>
                    </div>
                `;

                // Torna a seção do experimento visível
                containerExperimento.style.display = 'block';

                // Rola para o topo da página suavemente ao carregar o experimento
                window.scrollTo({ top: 0, behavior: 'smooth' });

                // Adiciona o evento de clique para o botão "Voltar" recém-criado
                document.getElementById('btn-voltar').addEventListener('click', voltarParaLista);
            } else {
                // Aviso temporário para os experimentos ainda não configurados no JS
                alert(`O espaço dinâmico para o experimento "${idExperimento}" foi estruturado e está pronto para receber seus arquivos posteriormente!`);
            }
        });
    });

    // Função para restaurar a interface original do site
    function voltarParaLista() {
        containerExperimento.style.display = 'none';
        containerExperimento.innerHTML = ''; 

        secaoApresentacao.style.display = 'block';
        conteudoPrincipal.style.display = 'block';
    }
});