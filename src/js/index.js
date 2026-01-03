const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

const BASE_URL = 'https://api.github.com';

btnSearch.addEventListener('click', async () => {
    const username = inputSearch.value;

    if (username) {
        profileResults.innerHTML = '<p class="loading">Carregando...</p>';

        try {
            // Aqui você pode adicionar a lógica para buscar o perfil do GitHub usando a API
            const response = await fetch(`${BASE_URL}/users/${username}`);

            if (!response.ok) {
                alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
                profileResults.innerHTML = '';
                return;
            }

            const userData = await response.json();
            console.log(userData); // Apenas para verificar se os dados foram obtidos corretamente

            profileResults.innerHTML = `
            <div class="profile-card">
                <img src="${userData.avatar_url}" alt="Avatar de ${userData.login}" class="profile-avatar">
                <div class="profile-info">
                    <h2>${userData.name}</h2>
                    <p>${userData.bio || 'Não possui bio cadastrada 😢.'}</p>

                </div>
            </div>
            `;

        } catch (error) {
            console.error('Erro ao buscar o perfil do GitHub:', error);
            alert('Ocorreu um erro ao buscar o perfil. Por favor, tente novamente mais tarde.');
            profileResults.innerHTML = '';
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