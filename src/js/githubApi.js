const BASE_URL = 'https://api.github.com';

export async function fetchGitHubUser(username) {
    const response = await fetch(`${BASE_URL}/users/${username}`);

    if (!response.ok) {
        return null;
    }

    return await response.json();
}
