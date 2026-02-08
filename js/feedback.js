// ===== Feedback Page JavaScript =====

document.addEventListener('DOMContentLoaded', () => {
    setupFeedbackForm();
    setupFAQAccordion();
});

// Setup feedback form with validation
function setupFeedbackForm() {
    const form = document.getElementById('feedbackForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateFeedbackForm()) {
            submitFeedback();
        }
    });
    
    // Real-time validation
    const nameInput = document.getElementById('feedbackName');
    const emailInput = document.getElementById('feedbackEmail');
    const typeSelect = document.getElementById('feedbackType');
    const messageInput = document.getElementById('feedbackMessage');
    
    if (nameInput) {
        nameInput.addEventListener('blur', () => validateName());
    }
    
    if (emailInput) {
        emailInput.addEventListener('blur', () => validateFeedbackEmail());
    }
    
    if (typeSelect) {
        typeSelect.addEventListener('change', () => validateType());
    }
    
    if (messageInput) {
        messageInput.addEventListener('blur', () => validateMessage());
    }
    
    // Submit another button
    const submitAnotherBtn = document.getElementById('submitAnother');
    if (submitAnotherBtn) {
        submitAnotherBtn.addEventListener('click', resetFeedbackForm);
    }
}

// Validate name field
function validateName() {
    const nameInput = document.getElementById('feedbackName');
    const errorElement = document.getElementById('nameError');
    const name = nameInput.value.trim();
    
    if (name.length < 2) {
        showError(errorElement, 'Name must be at least 2 characters long');
        return false;
    }
    
    hideError(errorElement);
    return true;
}

// Validate email field
function validateFeedbackEmail() {
    const emailInput = document.getElementById('feedbackEmail');
    const errorElement = document.getElementById('emailError');
    const email = emailInput.value.trim();
    
    if (!validateEmail(email)) {
        showError(errorElement, 'Please enter a valid email address');
        return false;
    }
    
    hideError(errorElement);
    return true;
}

// Validate type field
function validateType() {
    const typeSelect = document.getElementById('feedbackType');
    const errorElement = document.getElementById('typeError');
    
    if (!typeSelect.value) {
        showError(errorElement, 'Please select a feedback type');
        return false;
    }
    
    hideError(errorElement);
    return true;
}

// Validate message field
function validateMessage() {
    const messageInput = document.getElementById('feedbackMessage');
    const errorElement = document.getElementById('messageError');
    const message = messageInput.value.trim();
    
    if (message.length < 10) {
        showError(errorElement, 'Message must be at least 10 characters long');
        return false;
    }
    
    hideError(errorElement);
    return true;
}

// Show error message
function showError(element, message) {
    if (element) {
        element.textContent = message;
        element.style.display = 'block';
    }
}

// Hide error message
function hideError(element) {
    if (element) {
        element.textContent = '';
        element.style.display = 'none';
    }
}

// Validate entire form
function validateFeedbackForm() {
    const nameValid = validateName();
    const emailValid = validateFeedbackEmail();
    const typeValid = validateType();
    const messageValid = validateMessage();
    
    return nameValid && emailValid && typeValid && messageValid;
}

// Submit feedback
function submitFeedback() {
    const name = document.getElementById('feedbackName').value.trim();
    const email = document.getElementById('feedbackEmail').value.trim();
    const type = document.getElementById('feedbackType').value;
    const message = document.getElementById('feedbackMessage').value.trim();
    
    // Create feedback object
    const feedback = {
        id: generateId(),
        name,
        email,
        type,
        message,
        submittedAt: new Date().toISOString()
    };
    
    // Get existing feedback from localStorage
    let allFeedback = getFromLocalStorage('user_feedback') || [];
    allFeedback.unshift(feedback);
    
    // Keep only last 50 feedback entries
    if (allFeedback.length > 50) {
        allFeedback = allFeedback.slice(0, 50);
    }
    
    // Save to localStorage
    saveToLocalStorage('user_feedback', allFeedback);
    
    // Show confirmation
    showConfirmation();
}

// Show confirmation message
function showConfirmation() {
    const form = document.getElementById('feedbackForm');
    const confirmation = document.getElementById('feedbackConfirmation');
    
    if (form) form.style.display = 'none';
    if (confirmation) {
        confirmation.style.display = 'block';
        confirmation.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Reset feedback form
function resetFeedbackForm() {
    const form = document.getElementById('feedbackForm');
    const confirmation = document.getElementById('feedbackConfirmation');
    
    if (form) {
        form.reset();
        form.style.display = 'block';
    }
    
    if (confirmation) {
        confirmation.style.display = 'none';
    }
    
    // Clear all error messages
    ['nameError', 'emailError', 'typeError', 'messageError'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = '';
            element.style.display = 'none';
        }
    });
    
    // Scroll to form
    if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Setup FAQ accordion
function setupFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            toggleFAQItem(question);
        });
    });
}

// Toggle FAQ item
function toggleFAQItem(question) {
    const faqItem = question.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const isExpanded = question.getAttribute('aria-expanded') === 'true';
    
    // Close all other FAQ items
    const allQuestions = document.querySelectorAll('.faq-question');
    allQuestions.forEach(q => {
        if (q !== question) {
            q.setAttribute('aria-expanded', 'false');
            const a = q.parentElement.querySelector('.faq-answer');
            if (a) a.style.maxHeight = '0';
        }
    });
    
    // Toggle current item
    if (isExpanded) {
        question.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = '0';
    } else {
        question.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }
}
