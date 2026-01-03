export function renderProfile(userData, userRepos, container) {

    const repositoriesHTML = userRepos && userRepos.length > 0 ? userRepos.map(repo => `
        <div class="repository-card">
            <a href="${repo.html_url}" target="_blank">
            <h3>${repo.name}</h3>
            <div class="repository-stats">
                <span>⭐Stars: ${repo.stargazers_count}</span>
                <span>🍴Forks: ${repo.forks_count}</span>
                <span>👀Watchers: ${repo.watchers_count}</span>
                <span>📝Language: ${repo.language || 'N/A'}</span>
            </div>
            </a>
        </div>
        `).join('') : '<p>Nenhum repositório encontrado.</p>';

    container.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.login}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name}</h2>
                <p>${userData.bio || 'Não possui bio cadastrada 😢.'}</p>
            </div>
        </div>

        <div class="profile-counters">
            <div class="followers">
                <h4>👥 Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👥 Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>

        <div class="profile-repositories">
            <h2>Repositórios Recentes</h2>
            <div class="repositories">
                ${repositoriesHTML}
            </div>
        </div>

    `;
}

export function renderLoading(container) {
    container.innerHTML = '<p class="loading">Carregando...</p>';
}

export function clearProfile(container) {
    container.innerHTML = '';
}
