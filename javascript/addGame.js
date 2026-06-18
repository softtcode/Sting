function obterJogosSalvos() {
    try {
        const raw = localStorage.getItem(localStorageJogosKey);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.warn('Erro ao ler jogos salvos:', error);
        return [];
    }
}

function salvarJogos(jogos) {
    localStorage.setItem(localStorageJogosKey, JSON.stringify(jogos));
}

function criarSlugUnico(texto) {
    const slugBase = gerarSlug(texto);
    const existentes = new Set(jogos.map((jogo) => jogo.slug));
    return existentes.has(slugBase) ? `${slugBase}-${Date.now()}` : slugBase;
}

function inicializarAddGame() {
    const flyBtn = document.getElementById('fly-btn');
    const addGameForm = document.getElementById('add-game-form');
    const nvidiaCardContainer = document.getElementById('nvidia-card-container');

    if (flyBtn && nvidiaCardContainer) {
        flyBtn.addEventListener('click', () => {
            nvidiaCardContainer.classList.toggle('visible');
        });
    }

    if (addGameForm) {
        addGameForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const gameName = document.getElementById('nvidia-card-nome').value.trim();
            const gameDescription = document.getElementById('nvidia-card-descricao').value.trim();
            const gamePrice = parseFloat(document.getElementById('nvidia-card-preco').value.replace(',', '.')) || 0;
            const gameImageUrl = document.getElementById('nvidia-card-urlImagem').value.trim();
            const gameSteamUrl = document.getElementById('nvidia-card-urlSteam').value.trim();

            if (!gameName || !gameDescription || !gameImageUrl || !gameSteamUrl) {
                return;
            }

            const novoJogo = {
                nome: gameName,
                descricao: gameDescription,
                preco: gamePrice,
                urlImagem: gameImageUrl,
                urlSteam: gameSteamUrl,
                slug: criarSlugUnico(gameName),
                id: Date.now(),
            };

            jogos.push(novoJogo);

            const salvos = obterJogosSalvos();
            salvarJogos([...salvos, novoJogo]);

            if (typeof renderJogos === 'function') {
                renderJogos();
            }

            addGameForm.reset();

            if (nvidiaCardContainer) {
                nvidiaCardContainer.classList.remove('visible');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', inicializarAddGame);