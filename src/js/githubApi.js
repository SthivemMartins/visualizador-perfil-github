const BASE_URL = 'https://api.github.com';

export async function fetchGitHubUser(username) {
    const response = await fetch(`${BASE_URL}/users/${username}`);

    if (!response.ok) {
        throw new Error('Usuário não encontrado');
    }

    return await response.json();
}

export async function fetchGitHubUserRepos(username) {
    const response = await fetch(`${BASE_URL}/users/${username}/repos?per_page=10&sort=created`);
    if (!response.ok) {
        throw new Error('Repositórios não encontrados');
    }
    return await response.json();
}