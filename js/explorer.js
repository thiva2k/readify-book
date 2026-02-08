// ===== Book Explorer JavaScript =====

let allBooks = [];
let filteredBooks = [];

// Initialize explorer page
document.addEventListener('DOMContentLoaded', () => {
    allBooks = [...booksDatabase];
    filteredBooks = [...allBooks];
    
    displayBooks(filteredBooks);
    setupEventListeners();
});

// Display books in grid
function displayBooks(books) {
    const booksGrid = document.getElementById('booksGrid');
    const noResults = document.getElementById('noResults');
    
    if (!booksGrid) return;
    
    booksGrid.innerHTML = '';
    
    if (books.length === 0) {
        booksGrid.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
        return;
    }
    
    booksGrid.style.display = 'grid';
    if (noResults) noResults.style.display = 'none';
    
    books.forEach(book => {
        const bookCard = createBookCard(book);
        booksGrid.appendChild(bookCard);
    });
}

// Create book card element
function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.setAttribute('data-book-id', book.id);
    
    // Generate color based on genre
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
    
    card.innerHTML = `
        <div class="book-cover" style="background: ${gradient}">📚</div>
        <div class="book-info">
            <h3>${book.title}</h3>
            <p class="book-author">by ${book.author}</p>
            <span class="genre-badge">${book.genre}</span>
        </div>
    `;
    
    card.addEventListener('click', () => showBookModal(book));
    
    return card;
}

// Show book details modal
function showBookModal(book) {
    const modal = document.getElementById('bookModal');
    if (!modal) return;
    
    // Populate modal with book details
    const modalTitle = document.getElementById('modalTitle');
    const modalAuthor = document.getElementById('modalAuthor');
    const modalGenre = document.getElementById('modalGenre');
    const modalPages = document.getElementById('modalPages');
    const modalSynopsis = document.getElementById('modalSynopsis');
    const modalBookCover = document.getElementById('modalBookCover');
    
    if (modalTitle) modalTitle.textContent = book.title;
    if (modalAuthor) modalAuthor.textContent = `by ${book.author}`;
    if (modalGenre) modalGenre.textContent = book.genre;
    if (modalPages) modalPages.textContent = `${book.pages} pages`;
    if (modalSynopsis) modalSynopsis.textContent = book.synopsis;
    
    // Set book cover color
    if (modalBookCover) {
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
        modalBookCover.style.background = gradient;
        modalBookCover.textContent = '📚';
    }
    
    // Display series information
    const seriesSection = document.getElementById('seriesSection');
    const seriesList = document.getElementById('seriesList');
    
    if (book.series && seriesSection && seriesList) {
        seriesSection.style.display = 'block';
        let seriesHTML = '';
        
        if (book.series.prequels && book.series.prequels.length > 0) {
            seriesHTML += '<h4>Prequels:</h4><ul>';
            book.series.prequels.forEach(prequel => {
                seriesHTML += `<li>${prequel}</li>`;
            });
            seriesHTML += '</ul>';
        }
        
        if (book.series.sequels && book.series.sequels.length > 0) {
            seriesHTML += '<h4>Sequels:</h4><ul>';
            book.series.sequels.forEach(sequel => {
                seriesHTML += `<li>${sequel}</li>`;
            });
            seriesHTML += '</ul>';
        }
        
        seriesList.innerHTML = seriesHTML;
    } else if (seriesSection) {
        seriesSection.style.display = 'none';
    }
    
    // Display ratings
    const ratingsTable = document.getElementById('ratingsTable');
    if (ratingsTable && book.ratings) {
        const tbody = ratingsTable.querySelector('tbody');
        if (tbody) {
            tbody.innerHTML = '';
            book.ratings.forEach(rating => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${rating.source}</td>
                    <td><strong>${rating.rating}</strong></td>
                    <td>${rating.reviews}</td>
                `;
                tbody.appendChild(row);
            });
        }
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('bookModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Filter books
function filterBooks() {
    const searchInput = document.getElementById('searchInput');
    const genreFilter = document.getElementById('genreFilter');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const selectedGenre = genreFilter ? genreFilter.value : 'all';
    
    filteredBooks = allBooks.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm) ||
                            book.author.toLowerCase().includes(searchTerm);
        const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre;
        
        return matchesSearch && matchesGenre;
    });
    
    displayBooks(filteredBooks);
}

// Setup event listeners
function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterBooks);
    }
    
    // Genre filter
    const genreFilter = document.getElementById('genreFilter');
    if (genreFilter) {
        genreFilter.addEventListener('change', filterBooks);
    }
    
    // Modal close button
    const modalClose = document.getElementById('modalClose');
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside
    const modal = document.getElementById('bookModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}
