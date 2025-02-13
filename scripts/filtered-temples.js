// Temple Data Resource: https://churchofjesuschristtemples.org/temples/
// Array of Temples

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/aba-nigeria-temple.webp"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/manti-utah-temple.webp"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/payson-utah-temple.webp"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/yigo-guam-temple.webp"
  },
  {
    templeName: "Washington D.C.",
    location: "Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/washington-dc-temple.webp"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/lima-peru-temple.webp"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/mexico-city-temple.webp"
  },
  // Add more temple objects here...

  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "images/accra-ghana-temple.webp"
  },

  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10-12",
    area: 41010,
    imageUrl: "images/rome-italy-temple.webp"
  },

  {
    templeName: "Kinshasa Democratic Republic Of The Congo Temple",
    location: "Kinshasa, Democratic Republic of the Congo",
    dedicated: "2019, April, 14",
    area: 12000,
    imageUrl: "images/kinshasa-democratic-republic-of-the-congo-temple.webp"
  },

  {
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27-29",
    area: 53997,
    imageUrl: "images/tokyo-japan-temple.webp"
  },

  {
    templeName: "Durban South Africa Temple",
    location: "kwazulu-Natal, South Africa",
    dedicated: "2020, February, 16",
    area: 19860,
    imageUrl: "images/durban-south-africa-temple.webp"
  }
];


// To dynamically display temple cards in HTML
function displayTemples(templeList) {
  const container = document.getElementById('temple-container');
  container.innerHTML = '';     // Clears previous content

  templeList.forEach(temple => {
    const templeCard = document.createElement('div');
    templeCard.classList.add('temple-card');

    templeCard.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}" loading="lazy">
    `;
    container.appendChild(templeCard);
  });
}

// To filter temples by age and size
document.getElementById('home').addEventListener('click', () => {
  displayTemples(temples);
});

document.getElementById('old').addEventListener('click', () => {
  const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
  displayTemples(oldTemples);
});

document.getElementById('new').addEventListener('click', () => {
  const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
  displayTemples(newTemples);
});

document.getElementById('large').addEventListener('click', () => {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
});

document.getElementById('small').addEventListener('click', () => {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
});

// Display all temples initially
displayTemples(temples);

// Footer year and last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;