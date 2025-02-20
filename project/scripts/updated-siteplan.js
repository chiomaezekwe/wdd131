// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Set last modified date
document.getElementById('last-modified').textContent = document.lastModified;

// Contact form dynamic behavior
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission for demo
    const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };
    // Save form data to localStorage for demo purposes
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    alert('Thank you for your message! We will get back to you soon.');
});