document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const clearHistoryButton = document.getElementById('clearHistoryButton');
    const searchHistoryList = document.getElementById('searchHistory');

   
    const loadSearchHistory = () => {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        history.forEach(term => {
            const li = document.createElement('li');
            li.textContent = term;
            searchHistoryList.appendChild(li);
        });
    };


    const saveSearchTerm = (term) => {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        if (!history.includes(term)) {
            history.push(term);
            localStorage.setItem('searchHistory', JSON.stringify(history));
            const li = document.createElement('li');
            li.textContent = term;
            searchHistoryList.appendChild(li);
        }
    };

    const clearSearchHistory = () => {
        localStorage.removeItem('searchHistory');
        searchHistoryList.innerHTML = '';
    };


    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            saveSearchTerm(searchTerm);
            searchInput.value = '';
           
        }
    });

    clearHistoryButton.addEventListener('click', clearSearchHistory);

    
    loadSearchHistory();
});
