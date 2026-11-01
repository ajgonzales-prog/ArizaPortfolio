// Toggle mobile navigation menu visibility
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Structured Data for Web Development Project
const webProjectsData = [
  {
    id: 1,
    title: "ULAT CCC Portal",
    description: "A comprehensive digital web portal designed for students to securely submit school-related complaints, feedback, incident reports, and constructive suggestions to improve campus services.",
    image: "/html/images/ulat-login.gif",
    detailsPage: "proj-details.html#ulat-section"
  },
  {
    id: 2,
    title: "JL's Restobar QR Ordering System",
    description: "An advanced web-based QR code self-ordering and payment platform that allows customers to order seamlessly without waiting for a waiter. It also includes built-in table reservations, event scheduling modules, an administrative management dashboard, and a real-time Kitchen Display System (KDS).",
    image: "/html/images/JL-online.jfif",
    detailsPage: "proj-details.html#jls-section"
  },
  {
    id: 3,
    title: "Logo for Gonzales Aesthetics",
    description: "A polished and sophisticated chrome-styled brand identity design featuring a stylized metallic clothes hanger monogram (GA) alongside elegant serif typography, set against a smooth gradient background.",
    image: "/html/images/logo-stacked.png",
    detailsPage: "proj-details.html#portfolio-section"
  },
  {
    id: 4,
    title: "Alay Lakad Pubmat",
    description: "A promotional publication material (pubmat) design created for the Alay Lakad 2027 community walk event, featuring custom dynamic typography, road vector graphics, theme tagline, and event detail layouts. ",
    image: "/html/images/alay-lakad.png",
    detailsPage: "proj-details.html#alay-lakad-section"
  }
];

const webDevGrid = document.getElementById('webDevGrid');
const webSearchInput = document.getElementById('webSearchInput');

// Function for rendering web project cards
function renderWebProjects(filterText = '') {
  webDevGrid.innerHTML = '';

  const filtered = webProjectsData.filter(proj => 
    proj.title.toLowerCase().includes(filterText.toLowerCase().trim()) ||
    proj.description.toLowerCase().includes(filterText.toLowerCase().trim())
  );

  if (filtered.length === 0) {
    webDevGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #555; padding: 20px;">No web projects found matching "${filterText}".</p>`;
    return;
  }

  filtered.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'webdev-card';
    
    card.innerHTML = `
      <div>
        <img src="${proj.image}" alt="${proj.title}" class="webdev-img">
        <div class="webdev-info">
          <h3>${proj.title}</h3>
          <p class="webdev-desc">${proj.description}</p>
        </div>
      </div>
      <div class="webdev-links">
        <a href="${proj.detailsPage}" class="view-btn">View Project</a>
      </div>
    `;
    
    webDevGrid.appendChild(card);
  });
}

// Live search listener
webSearchInput.addEventListener('input', (e) => {
  renderWebProjects(e.target.value);
});

// Initial render
renderWebProjects();