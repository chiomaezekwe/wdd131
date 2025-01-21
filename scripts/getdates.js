// Get the current year dynamically
const currentYear = new Date().getFullYear();

// Set the copyright year in the footer's first paragraph
const copyrightElement = document.querySelector('footer p:first-child');
if (copyrightElement) {
    copyrightElement.innerHTML = `©️${currentYear} 😍 Ezekwe Chioma Francisca 💕 Imo State, Nigeria`;
}
// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Set the last modified date in the footer's second paragraph
const lastModifiedElement = document.querySelector('footer p:last-child');
if (lastModifiedElement) {
    lastModifiedElement.innerHTML = `Last modification: ${lastModifiedDate}`;
}