// Toggle mobile navigation menu visibility
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Handle hamburger menu click event
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Array containing 8 Certificate Boxes
// Edit the 'title' and 'image' values below with your actual certificate titles and file paths
const certsData = [
  { id: 1, title: "TESDA NC II Computer Systems Servicing", image: "/html/images/css.jfif" },
  { id: 2, title: "TESDA NC III Bookkeeping", image: "/html/images/bookkeeping.jfif" },
  { id: 3, title: "Wadhani Effective Speaking and Listening Skills (US English)", image: "/html/images/effective-speaking.jfif" },
  { id: 4, title: "Wadhani Interpersonal Skills (US English)", image: "/html/images/interpersonal.jfif" },
  { id: 5, title: "Wadhani Self Presentation (US English)", image: "/html/images/self-presentation.jfif" },
  { id: 6, title: "Java Sololearn", image: "/html/images/js-solo-learn.jfif" },
];

const certsGrid = document.getElementById('certsGrid');
const certSearchInput = document.getElementById('certSearchInput');

// Function to render certification cards dynamically based on title matching
function renderCerts(filterText = '') {
  certsGrid.innerHTML = '';

  // Filter items matching the search input title
  const filtered = certsData.filter(cert => 
    cert.title.toLowerCase().includes(filterText.toLowerCase().trim())
  );

  if (filtered.length === 0) {
    certsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #555; padding: 20px;">No certifications found matching "${filterText}".</p>`;
    return;
  }

  // Render cards
  filtered.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    
    card.innerHTML = `
      <img src="${cert.image}" alt="${cert.title}" class="cert-img">
      <h3 class="cert-title">${cert.title}</h3>
    `;
    
    certsGrid.appendChild(card);
  });
}

// Live search event listener
certSearchInput.addEventListener('input', (e) => {
  renderCerts(e.target.value);
});

// Initial rendering of all 8 boxes on page load
renderCerts();