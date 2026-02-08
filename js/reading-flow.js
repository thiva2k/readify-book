// ===== Reading Flow JavaScript =====


let audioContext = null;
let soundNodes = {};

document.addEventListener('DOMContentLoaded', () => {
    setupAmbientSounds();
    setupCompletedBooksForm();
    loadCompletedBooks();
});

// Setup ambient sounds
function setupAmbientSounds() {
    
    document.addEventListener('click', initAudioContext, { once: true });
    
   
    const soundToggleButtons = document.querySelectorAll('.sound-toggle');
    soundToggleButtons.forEach(button => {
        button.addEventListener('click', () => toggleSound(button));
    });
    
    
    const volumeSliders = document.querySelectorAll('.volume-slider');
    volumeSliders.forEach(slider => {
        slider.addEventListener('input', () => updateVolume(slider));
    });
    
    
    const stopAllBtn = document.getElementById('stopAll');
    if (stopAllBtn) {
        stopAllBtn.addEventListener('click', stopAllSounds);
    }
}

// Initialize audio context
function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Toggle sound on/off
function toggleSound(button) {
    initAudioContext();
    
    const soundType = button.getAttribute('data-sound');
    const playIcon = button.querySelector('.play-icon');
    const pauseIcon = button.querySelector('.pause-icon');
    
    if (soundNodes[soundType]) {
        // Stop sound
        stopSound(soundType);
        button.classList.remove('playing');
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
    } else {
        // Start sound
        playSound(soundType);
        button.classList.add('playing');
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    }
}

// Play ambient sound (using Web Audio API)
function playSound(soundType) {
    if (!audioContext) return;
    
    const volumeSlider = document.querySelector(`.volume-slider[data-sound="${soundType}"]`);
    const volume = volumeSlider ? volumeSlider.value / 100 : 0.5;
    
    // Create gain node for volume control
    const gainNode = audioContext.createGain();
    gainNode.gain.value = volume;
    gainNode.connect(audioContext.destination);
    
    // Create different sound patterns for each type
    switch (soundType) {
        case 'rain':
            createRainSound(gainNode);
            break;
        case 'fire':
            createFireSound(gainNode);
            break;
        case 'ocean':
            createOceanSound(gainNode);
            break;
        case 'forest':
            createForestSound(gainNode);
            break;
        case 'cafe':
            createCafeSound(gainNode);
            break;
        case 'thunder':
            createThunderSound(gainNode);
            break;
    }
    
    soundNodes[soundType] = { gainNode };
}

// Create rain sound using noise
function createRainSound(gainNode) {
    const bufferSize = 4096;
    const whiteNoise = audioContext.createScriptProcessor(bufferSize, 1, 1);
    
    whiteNoise.onaudioprocess = (e) => {
        const output = e.outputBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
    };
    
    const filter = audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1000;
    
    whiteNoise.connect(filter);
    filter.connect(gainNode);
    
    soundNodes.rain = { ...soundNodes.rain, whiteNoise, filter };
}

// Create fire crackling sound
function createFireSound(gainNode) {
    const bufferSize = 4096;
    const crackle = audioContext.createScriptProcessor(bufferSize, 1, 1);
    
    crackle.onaudioprocess = (e) => {
        const output = e.outputBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = (Math.random() * 2 - 1) * (Math.random() > 0.95 ? 1 : 0.3);
        }
    };
    
    const filter = audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 800;
    
    crackle.connect(filter);
    filter.connect(gainNode);
    
    soundNodes.fire = { ...soundNodes.fire, crackle, filter };
}

// Create ocean waves sound
function createOceanSound(gainNode) {
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = 0.5;
    
    const oscillator2 = audioContext.createOscillator();
    oscillator2.type = 'sine';
    oscillator2.frequency.value = 0.3;
    
    const filter = audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 500;
    
    oscillator.connect(filter);
    oscillator2.connect(filter);
    filter.connect(gainNode);
    
    oscillator.start();
    oscillator2.start();
    
    soundNodes.ocean = { ...soundNodes.ocean, oscillator, oscillator2, filter };
}

// Create forest/nature sounds
function createForestSound(gainNode) {
    const bufferSize = 4096;
    const nature = audioContext.createScriptProcessor(bufferSize, 1, 1);
    
    nature.onaudioprocess = (e) => {
        const output = e.outputBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            const random = Math.random();
            output[i] = random > 0.98 ? (Math.random() * 2 - 1) * 0.5 : (Math.random() * 2 - 1) * 0.1;
        }
    };
    
    const filter = audioContext.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2000;
    
    nature.connect(filter);
    filter.connect(gainNode);
    
    soundNodes.forest = { ...soundNodes.forest, nature, filter };
}

// Create cafe ambience
function createCafeSound(gainNode) {
    const bufferSize = 4096;
    const ambience = audioContext.createScriptProcessor(bufferSize, 1, 1);
    
    ambience.onaudioprocess = (e) => {
        const output = e.outputBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = (Math.random() * 2 - 1) * 0.2;
        }
    };
    
    const filter = audioContext.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1500;
    
    ambience.connect(filter);
    filter.connect(gainNode);
    
    soundNodes.cafe = { ...soundNodes.cafe, ambience, filter };
}

// Create thunder sound
function createThunderSound(gainNode) {
    // Combine rain with occasional rumbles
    createRainSound(gainNode);
    
    // Add periodic thunder rumbles
    const rumbleInterval = setInterval(() => {
        if (soundNodes.thunder) {
            const oscillator = audioContext.createOscillator();
            oscillator.type = 'sine';
            oscillator.frequency.value = 60;
            
            const rumbleGain = audioContext.createGain();
            rumbleGain.gain.setValueAtTime(0, audioContext.currentTime);
            rumbleGain.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.1);
            rumbleGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2);
            
            oscillator.connect(rumbleGain);
            rumbleGain.connect(gainNode);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 2);
        }
    }, 8000 + Math.random() * 7000); // Random interval between 8-15 seconds
    
    soundNodes.thunder = { ...soundNodes.thunder, rumbleInterval };
}

// Stop sound
function stopSound(soundType) {
    if (soundNodes[soundType]) {
        const node = soundNodes[soundType];
        
        // Stop all oscillators and processors
        Object.values(node).forEach(n => {
            if (n && typeof n.stop === 'function') {
                n.stop();
            }
            if (n && typeof n.disconnect === 'function') {
                n.disconnect();
            }
        });
        
        // Clear intervals
        if (node.rumbleInterval) {
            clearInterval(node.rumbleInterval);
        }
        
        delete soundNodes[soundType];
    }
}

// Update volume
function updateVolume(slider) {
    const soundType = slider.getAttribute('data-sound');
    const volume = slider.value / 100;
    
    if (soundNodes[soundType] && soundNodes[soundType].gainNode) {
        soundNodes[soundType].gainNode.gain.value = volume;
    }
}

// Stop all sounds
function stopAllSounds() {
    Object.keys(soundNodes).forEach(soundType => {
        stopSound(soundType);
        const button = document.querySelector(`.sound-toggle[data-sound="${soundType}"]`);
        if (button) {
            button.classList.remove('playing');
            const playIcon = button.querySelector('.play-icon');
            const pauseIcon = button.querySelector('.pause-icon');
            if (playIcon) playIcon.style.display = 'inline';
            if (pauseIcon) pauseIcon.style.display = 'none';
        }
    });
}

// Setup completed books form
function setupCompletedBooksForm() {
    const form = document.getElementById('completeBookForm');
    if (!form) return;
    
    // Set today's date as default
    const dateInput = document.getElementById('completedDate');
    if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addCompletedBook();
    });
}

// Add completed book
function addCompletedBook() {
    const title = document.getElementById('completedTitle').value.trim();
    const author = document.getElementById('completedAuthor').value.trim();
    const date = document.getElementById('completedDate').value;
    const rating = document.getElementById('bookRating').value;
    
    if (!title || !author || !date || !rating) {
        alert('Please fill in all fields');
        return;
    }
    
    // Get existing completed books
    let completedBooks = getFromLocalStorage('completed_books') || [];
    
    // Add new book
    const newBook = {
        id: generateId(),
        title,
        author,
        completedDate: date,
        rating: parseInt(rating),
        addedAt: new Date().toISOString()
    };
    
    completedBooks.unshift(newBook);
    
    // Save to localStorage
    saveToLocalStorage('completed_books', completedBooks);
    
    // Reset form
    document.getElementById('completeBookForm').reset();
    document.getElementById('completedDate').value = new Date().toISOString().split('T')[0];
    
    // Show success message
    showMessage('completedMessage', `"${title}" added to completed books! 🎉`, 'success');
    
    // Reload display
    loadCompletedBooks();
}

// Load and display completed books
function loadCompletedBooks() {
    const completedBooks = getFromLocalStorage('completed_books') || [];
    const booksGrid = document.getElementById('booksGrid');
    const emptyState = document.getElementById('emptyState');
    const countElement = document.getElementById('completedCount');
    
    if (!booksGrid) return;
    
    // Update count
    if (countElement) {
        countElement.textContent = completedBooks.length;
    }
    
    if (completedBooks.length === 0) {
        booksGrid.style.display = 'none';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }
    
    booksGrid.style.display = 'grid';
    if (emptyState) emptyState.style.display = 'none';
    
    booksGrid.innerHTML = '';
    
    completedBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'completed-book-item';
        
        const stars = '⭐'.repeat(book.rating);
        
        bookItem.innerHTML = `
            <div class="completed-book-info">
                <h4>${book.title}</h4>
                <div class="completed-book-meta">
                    <span>by ${book.author}</span>
                    <span>${stars}</span>
                    <span>Completed: ${formatDate(book.completedDate)}</span>
                </div>
            </div>
            <button class="btn-remove" onclick="removeCompletedBook('${book.id}')">Remove</button>
        `;
        
        booksGrid.appendChild(bookItem);
    });
}

// Remove completed book
function removeCompletedBook(id) {
    let completedBooks = getFromLocalStorage('completed_books') || [];
    completedBooks = completedBooks.filter(book => book.id !== id);
    saveToLocalStorage('completed_books', completedBooks);
    loadCompletedBooks();
}
