import { fetchGitHubUser, fetchGitHubUserRepos } from './githubApi.js';
import { renderProfile, renderLoading, clearProfile } from './profileView.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {
    const username = inputSearch.value;

    if (username) {
        renderLoading(profileResults);

        try {
            const userData = await fetchGitHubUser(username);
            const userRepos = await fetchGitHubUserRepos(username);

            if (!userData) {
                alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
                clearProfile(profileResults);
                return;
            }

            renderProfile(userData, userRepos, profileResults);

        } catch (error) {
            console.error('Erro ao buscar o perfil do GitHub:', error);
            alert('Ocorreu um erro ao buscar o perfil. Por favor, tente novamente mais tarde.');
            clearProfile(profileResults);
        }

    } else {
        alert('Por favor, insira um nome de usuário do GitHub.');
    }
});

//Funcionalidade de buscar ao pressionar Enter
const inputBusca = document.querySelector('#input-search');

inputBusca.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        btnSearch.click();
    }
});
// Fim da funcionalidade de buscar ao pressionar Enter