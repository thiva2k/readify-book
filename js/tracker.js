// ===== Reading Progress Tracker JavaScript =====

let currentProgress = null;

document.addEventListener('DOMContentLoaded', () => {
    setupTrackerForm();
    loadSavedProgress();
});

// Setup tracker form
function setupTrackerForm() {
    const form = document.getElementById('trackerForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        calculateProgress();
    });
    
    // Reset button
    const resetBtn = document.getElementById('resetTracker');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetTracker);
    }
    
    // Save progress button
    const saveBtn = document.getElementById('saveProgress');
    if (saveBtn) {
        saveBtn.addEventListener('click', saveProgressToStorage);
    }
}

// Calculate reading progress
function calculateProgress() {
    const bookTitle = document.getElementById('bookTitle').value.trim();
    const totalPages = parseInt(document.getElementById('totalPages').value);
    const pagesRead = parseInt(document.getElementById('pagesRead').value);
    const readingSpeed = parseInt(document.getElementById('readingSpeed').value);
    
    // Validation
    if (pagesRead > totalPages) {
        alert('Pages read cannot exceed total pages!');
        return;
    }
    
    // Calculate percentage
    const percentage = Math.round((pagesRead / totalPages) * 100);
    
    // Calculate remaining pages and days
    const pagesRemaining = totalPages - pagesRead;
    const daysToComplete = Math.ceil(pagesRemaining / readingSpeed);
    
    // Calculate estimated completion date
    const today = new Date();
    const completionDate = new Date(today);
    completionDate.setDate(completionDate.getDate() + daysToComplete);
    
    // Store current progress
    currentProgress = {
        bookTitle,
        totalPages,
        pagesRead,
        readingSpeed,
        percentage,
        pagesRemaining,
        daysToComplete,
        completionDate: completionDate.toISOString()
    };
    
    // Display results
    displayResults();
}

// Display calculation results
function displayResults() {
    if (!currentProgress) return;
    
    const resultsSection = document.getElementById('trackerResults');
    const formCard = document.querySelector('.tracker-form-card');
    
    if (!resultsSection) return;
    
    // Update result elements
    document.getElementById('resultBookTitle').textContent = currentProgress.bookTitle;
    document.getElementById('statPagesRead').textContent = currentProgress.pagesRead;
    document.getElementById('statTotalPages').textContent = currentProgress.totalPages;
    document.getElementById('statPercentage').textContent = currentProgress.percentage;
    
    // Animate progress bar
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        setTimeout(() => {
            progressFill.style.width = currentProgress.percentage + '%';
            progressFill.textContent = currentProgress.percentage + '%';
        }, 100);
    }
    
    // Display completion estimate
    const estimatedDays = document.getElementById('estimatedDays');
    const estimatedDate = document.getElementById('estimatedDate');
    
    if (estimatedDays) {
        if (currentProgress.daysToComplete === 0) {
            estimatedDays.textContent = 'Book completed! 🎉';
        } else if (currentProgress.daysToComplete === 1) {
            estimatedDays.textContent = '1 day remaining';
        } else {
            estimatedDays.textContent = `${currentProgress.daysToComplete} days remaining`;
        }
    }
    
    if (estimatedDate && currentProgress.daysToComplete > 0) {
        estimatedDate.textContent = `Expected completion: ${formatDate(currentProgress.completionDate)}`;
    } else if (estimatedDate) {
        estimatedDate.textContent = 'Congratulations on finishing!';
    }
    
    // Show results, hide form (on mobile for better UX)
    resultsSection.style.display = 'block';
    if (window.innerWidth < 768 && formCard) {
        formCard.style.display = 'none';
    }
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Reset tracker
function resetTracker() {
    const form = document.getElementById('trackerForm');
    const resultsSection = document.getElementById('trackerResults');
    const formCard = document.querySelector('.tracker-form-card');
    const saveMessage = document.getElementById('saveMessage');
    
    if (form) form.reset();
    if (resultsSection) resultsSection.style.display = 'none';
    if (formCard) formCard.style.display = 'block';
    if (saveMessage) saveMessage.textContent = '';
    
    currentProgress = null;
    
    // Scroll to form
    if (formCard) {
        formCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Save progress to localStorage
function saveProgressToStorage() {
    if (!currentProgress) return;
    
    // Get existing saved books
    let savedBooks = getFromLocalStorage('saved_reading_progress') || [];
    
    // Add timestamp
    const progressWithTimestamp = {
        ...currentProgress,
        savedAt: new Date().toISOString(),
        id: generateId()
    };
    
    // Add to beginning of array
    savedBooks.unshift(progressWithTimestamp);
    
    // Keep only last 10 saved books
    if (savedBooks.length > 10) {
        savedBooks = savedBooks.slice(0, 10);
    }
    
    // Save to localStorage
    saveToLocalStorage('saved_reading_progress', savedBooks);
    
    // Show success message
    const saveMessage = document.getElementById('saveMessage');
    if (saveMessage) {
        saveMessage.textContent = '✓ Progress saved successfully!';
        saveMessage.className = 'save-message success';
        
        setTimeout(() => {
            saveMessage.textContent = '';
        }, 3000);
    }
    
    // Refresh saved progress display
    loadSavedProgress();
}

// Load and display saved progress
function loadSavedProgress() {
    const savedBooks = getFromLocalStorage('saved_reading_progress') || [];
    const savedSection = document.getElementById('savedProgressSection');
    const savedList = document.getElementById('savedBooksList');
    
    if (!savedSection || !savedList) return;
    
    if (savedBooks.length === 0) {
        savedSection.style.display = 'none';
        return;
    }
    
    savedSection.style.display = 'block';
    savedList.innerHTML = '';
    
    savedBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'saved-book-item';
        bookItem.innerHTML = `
            <div class="saved-book-info">
                <h4>${book.bookTitle}</h4>
                <div class="saved-book-meta">
                    <span>${book.percentage}% complete</span>
                    <span>${book.pagesRead} / ${book.totalPages} pages</span>
                    <span>Saved: ${new Date(book.savedAt).toLocaleDateString()}</span>
                </div>
            </div>
            <button class="btn-remove" onclick="removeSavedBook('${book.id}')">Remove</button>
        `;
        savedList.appendChild(bookItem);
    });
}

// Remove saved book
function removeSavedBook(id) {
    let savedBooks = getFromLocalStorage('saved_reading_progress') || [];
    savedBooks = savedBooks.filter(book => book.id !== id);
    saveToLocalStorage('saved_reading_progress', savedBooks);
    loadSavedProgress();
}

// Add CSS for saved book items dynamically
const style = document.createElement('style');
style.textContent = `
    .saved-progress {
        background-color: var(--bg-primary);
        padding: var(--spacing-xl);
        border-radius: 12px;
        box-shadow: var(--shadow-md);
        margin-top: var(--spacing-xl);
    }
    
    .saved-book-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--spacing-lg);
        background-color: var(--bg-secondary);
        border-radius: 8px;
        margin-bottom: var(--spacing-md);
        transition: all 0.25s ease;
    }
    
    .saved-book-item:hover {
        background-color: var(--bg-tertiary);
        transform: translateX(5px);
    }
    
    .saved-book-info h4 {
        margin-bottom: var(--spacing-xs);
        color: var(--primary-color);
    }
    
    .saved-book-meta {
        display: flex;
        gap: var(--spacing-md);
        color: var(--text-secondary);
        font-size: 0.9rem;
        flex-wrap: wrap;
    }
`;
document.head.appendChild(style);
