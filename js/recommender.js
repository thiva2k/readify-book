// ===== Random Book Recommender JavaScript =====

let currentRecommendation = null;
let readingList = [];

document.addEventListener('DOMContentLoaded', () => {
    loadReadingList();
    setupRecommenderForm();
});

// Setup recommender form
function setupRecommenderForm() {
    const form = document.getElementById('recommenderForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        getRecommendation();
    });
    
    // Pick again button
    const pickAgainBtn = document.getElementById('pickAgain');
    if (pickAgainBtn) {
        pickAgainBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Animate button rotation
            pickAgainBtn.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                pickAgainBtn.style.transform = 'rotate(0deg)';
            }, 300);
            getRecommendation();
        });
    }
    
    // Add to list button
    const addToListBtn = document.getElementById('addToList');
    if (addToListBtn) {
        addToListBtn.addEventListener('click', addToReadingList);
    }
    
    // Clear list button
    const clearListBtn = document.getElementById('clearList');
    if (clearListBtn) {
        clearListBtn.addEventListener('click', clearReadingList);
    }
}

// Get random book recommendation
function getRecommendation() {
    const genre = document.getElementById('genreSelect').value;
    const length = document.getElementById('lengthSelect').value;
    
    if (!genre || !length) {
        alert('Please select both genre and length');
        return;
    }
    
    // Filter books based on criteria
    const matchingBooks = booksDatabase.filter(book => {
        const matchesGenre = book.genre === genre;
        const matchesLength = book.length === length;
        return matchesGenre && matchesLength;
    });
    
    if (matchingBooks.length === 0) {
        alert('No books found matching your criteria. Try different options!');
        return;
    }
    
    // Get random book
    const randomIndex = Math.floor(Math.random() * matchingBooks.length);
    currentRecommendation = matchingBooks[randomIndex];
    
    displayRecommendation();
}

// Display recommendation
function displayRecommendation() {
    if (!currentRecommendation) return;
    
    const recommendationCard = document.getElementById('recommendationCard');
    const selectionCard = document.querySelector('.selection-card');
    
    if (!recommendationCard) return;
    
    const book = currentRecommendation;
    
    // Update recommendation display
    document.getElementById('recTitle').textContent = book.title;
    document.getElementById('recAuthor').textContent = `by ${book.author}`;
    document.getElementById('recGenre').textContent = book.genre;
    document.getElementById('recPages').textContent = `${book.pages} pages`;
    document.getElementById('recSynopsis').textContent = book.synopsis;
    
    // Set book cover color
    const bookCover = document.getElementById('recBookCover');
    if (bookCover) {
        const genreColors = {
            'fiction': 'linear-gradient(135deg, #667eea, #764ba2)',
            'fantasy': 'linear-gradient(135deg, #f093fb, #f5576c)',
            'sci-fi': 'linear-gradient(135deg, #4facfe, #00f2fe)',
            'mystery': 'linear-gradient(135deg, #43e97b, #38f9d7)',
            'romance': 'linear-gradient(135deg, #fa709a, #fee140)',
            'thriller': 'linear-gradient(135deg, #30cfd0, #330867)',
            'historical': 'linear-gradient(135deg, #a8edea, #fed6e3)',
            'non-fiction': 'linear-gradient(135deg, #ff9a9e, #fecfef)'
        };
        const gradient = genreColors[book.genre] || genreColors['fiction'];
        bookCover.style.background = gradient;
        bookCover.textContent = '📚';
    }
    
    // Show recommendation card
    recommendationCard.style.display = 'block';
    
    // Hide selection card on mobile for better UX
    if (window.innerWidth < 768 && selectionCard) {
        selectionCard.style.display = 'none';
    }
    
    // Scroll to recommendation
    recommendationCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Clear any previous messages
    const addMessage = document.getElementById('addMessage');
    if (addMessage) {
        addMessage.textContent = '';
    }
}

// Add to reading list
function addToReadingList() {
    if (!currentRecommendation) return;
    
    // Check if already in list
    const alreadyInList = readingList.some(book => book.id === currentRecommendation.id);
    
    if (alreadyInList) {
        showAddMessage('This book is already in your reading list!', 'info');
        return;
    }
    
    // Add to list
    readingList.unshift({
        ...currentRecommendation,
        addedAt: new Date().toISOString()
    });
    
    // Save to localStorage
    saveToLocalStorage('reading_list', readingList);
    
    // Update display
    displayReadingList();
    
    showAddMessage('Added to your reading list! 📚', 'success');
}

// Show add message
function showAddMessage(message, type) {
    const addMessage = document.getElementById('addMessage');
    if (addMessage) {
        addMessage.textContent = message;
        addMessage.className = `add-message ${type}`;
        
        setTimeout(() => {
            addMessage.textContent = '';
        }, 3000);
    }
}

// Load reading list from localStorage
function loadReadingList() {
    readingList = getFromLocalStorage('reading_list') || [];
    displayReadingList();
}

// Display reading list
function displayReadingList() {
    const listCard = document.getElementById('readingListCard');
    const listContainer = document.getElementById('readingList');
    
    if (!listCard || !listContainer) return;
    
    if (readingList.length === 0) {
        listCard.style.display = 'none';
        return;
    }
    
    listCard.style.display = 'block';
    listContainer.innerHTML = '';
    
    readingList.forEach(book => {
        const listItem = document.createElement('div');
        listItem.className = 'reading-list-item';
        listItem.innerHTML = `
            <div class="reading-list-item-info">
                <h4>${book.title}</h4>
                <p>by ${book.author} • ${book.genre} • ${book.pages} pages</p>
            </div>
            <button class="btn-remove" onclick="removeFromReadingList(${book.id})">Remove</button>
        `;
        listContainer.appendChild(listItem);
    });
}

// Remove from reading list
function removeFromReadingList(bookId) {
    readingList = readingList.filter(book => book.id !== bookId);
    saveToLocalStorage('reading_list', readingList);
    displayReadingList();
}

// Clear entire reading list
function clearReadingList() {
    if (readingList.length === 0) return;
    
    const confirm = window.confirm('Are you sure you want to clear your entire reading list?');
    
    if (confirm) {
        readingList = [];
        saveToLocalStorage('reading_list', readingList);
        displayReadingList();
    }
}
