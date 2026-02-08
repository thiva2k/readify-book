// ===== Home Page JavaScript =====

// Book quotes for rotation
const bookQuotes = [
    {
        text: "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
        author: "George R.R. Martin"
    },
    {
        text: "Books are a uniquely portable magic.",
        author: "Stephen King"
    },
    {
        text: "There is no friend as loyal as a book.",
        author: "Ernest Hemingway"
    },
    {
        text: "Reading is essential for those who seek to rise above the ordinary.",
        author: "Jim Rohn"
    },
    {
        text: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
        author: "Dr. Seuss"
    },
    {
        text: "Think before you speak. Read before you think.",
        author: "Fran Lebowitz"
    },
    {
        text: "Reading is to the mind what exercise is to the body.",
        author: "Joseph Addison"
    }
];

// Rotating quotes functionality
let currentQuoteIndex = 0;

function displayQuote(index) {
    const quoteText = document.querySelector('.quote-text');
    const quoteAuthor = document.querySelector('.quote-author');
    
    if (quoteText && quoteAuthor) {
        // Fade out
        quoteText.style.opacity = '0';
        quoteAuthor.style.opacity = '0';
        
        setTimeout(() => {
            quoteText.textContent = bookQuotes[index].text;
            quoteAuthor.textContent = `— ${bookQuotes[index].author}`;
            
            // Fade in
            quoteText.style.opacity = '1';
            quoteAuthor.style.opacity = '1';
        }, 300);
    }
}

function rotateQuotes() {
    currentQuoteIndex = (currentQuoteIndex + 1) % bookQuotes.length;
    displayQuote(currentQuoteIndex);
}

// Author of the Day - Changes based on date
function getAuthorOfDay() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const authorIndex = dayOfYear % authorsDatabase.length;
    return authorsDatabase[authorIndex];
}

function displayAuthorOfDay() {
    const author = getAuthorOfDay();
    const authorCard = document.getElementById('authorOfDay');
    
    if (authorCard) {
        const avatar = authorCard.querySelector('.author-avatar');
        const name = authorCard.querySelector('.author-name');
        const bio = authorCard.querySelector('.author-bio');
        const booksCount = authorCard.querySelector('.books-count');
        const genre = authorCard.querySelector('.genre');
        
        if (avatar) avatar.textContent = author.emoji;
        if (name) name.textContent = author.name;
        if (bio) bio.textContent = author.bio;
        if (booksCount) booksCount.textContent = author.books;
        if (genre) genre.textContent = author.genre;
    }
}

// Newsletter form handling
function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput.value.trim();
    
    if (!validateEmail(email)) {
        showMessage('newsletterMessage', 'Please enter a valid email address.', 'error');
        return;
    }
    
    // Save email to localStorage
    let subscribers = getFromLocalStorage('newsletter_subscribers') || [];
    
    if (subscribers.includes(email)) {
        showMessage('newsletterMessage', 'You are already subscribed!', 'info');
    } else {
        subscribers.push(email);
        saveToLocalStorage('newsletter_subscribers', subscribers);
        showMessage('newsletterMessage', 'Thank you for subscribing! 🎉', 'success');
        emailInput.value = '';
    }
}

// Initialize home page
document.addEventListener('DOMContentLoaded', () => {
    // Display initial quote
    displayQuote(currentQuoteIndex);
    
    // Rotate quotes every 5 seconds
    setInterval(rotateQuotes, 5000);
    
    // Display author of the day
    displayAuthorOfDay();
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Add transition effect to quote elements
    const quoteText = document.querySelector('.quote-text');
    const quoteAuthor = document.querySelector('.quote-author');
    if (quoteText) quoteText.style.transition = 'opacity 0.3s ease';
    if (quoteAuthor) quoteAuthor.style.transition = 'opacity 0.3s ease';
});
