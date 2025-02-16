document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;


// Product array as provided
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];
  

// Populate the Product Name select options when the form loads
window.onload = () => {
    const selectElement = document.getElementById('productName');
    if (selectElement) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            selectElement.appendChild(option);
        });
    }

    // Display the review count
    const reviewCountElement = document.getElementById('reviewCount');
    if (reviewCountElement) {
        const reviewCount = localStorage.getItem('reviewsCompleted') || 0;
        reviewCountElement.textContent = reviewCount;
    }
};

// form submission and updating the review count in localStorage
const form = document.getElementById('reviewForm');
if (form) {
    form.addEventListener('submit', (event) => {
        // Prevent default form submission.
        event.preventDefault();

        let reviewsCompleted = parseInt(localStorage.getItem('reviewsCompleted') || 0);
        reviewsCompleted += 1;
        localStorage.setItem('reviewsCompleted', reviewsCompleted);

        // Submit form after incrementing review count
        form.submit();
    });
}