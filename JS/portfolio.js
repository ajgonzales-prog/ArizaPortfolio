// Toggle mobile navigation menu visibility
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.filter-btn');
const bannerLinksContainer = document.getElementById('bannerLinksContainer');

let currentCategory = 'All';
let searchQuery = '';

// Function para i-render ang mga banner buttons o "No results found" message
function renderBannerLinks() {
  if (!bannerLinksContainer) return;
  
  bannerLinksContainer.innerHTML = '';

  const query = searchQuery.toLowerCase().trim();

  const webDevHtml = `
    <a href="web-dev.html" class="banner-link-btn">
      <div class="banner-left">
        <i class="fa-solid fa-globe banner-icon"></i>
        <span>See Web Dev Projects</span>
      </div>
      <i class="fa-solid fa-arrow-right banner-arrow"></i>
    </a>
  `;

  const certsHtml = `
    <a href="certifications.html" class="banner-link-btn">
      <div class="banner-left">
        <i class="fa-solid fa-certificate banner-icon"></i>
        <span>See Certifications</span>
      </div>
      <i class="fa-solid fa-arrow-right banner-arrow"></i>
    </a>
  `;

  // Mga keywords na pwedeng hanapin
  const webDevKeywords = ['web', 'dev', 'development', 'project', 'projects', 'ulat', 'restobar', 'portfolio'];
  const certsKeywords = ['cert', 'certification', 'certifications', 'tesda', 'nc', 'bookkeeping', 'computer', 'systems', 'servicing'];

  // Kung walang tina-type, sundin ang active category button
  if (query === '') {
    if (currentCategory === 'Web Development') {
      bannerLinksContainer.innerHTML = webDevHtml;
    } else if (currentCategory === 'Certifications') {
      bannerLinksContainer.innerHTML = certsHtml;
    } else {
      bannerLinksContainer.innerHTML = webDevHtml + certsHtml;
    }
    return;
  }

  // Kung may tina-type, suriin kung tumutugma sa mga keywords
  let showWebDev = webDevKeywords.some(keyword => keyword.includes(query) || query.includes(keyword));
  let showCerts = certsKeywords.some(keyword => keyword.includes(query) || query.includes(keyword));

  // Kung naka-filter sa partikular na kategorya, limitahan din doon ang paghahanap
  if (currentCategory === 'Web Development') {
    showCerts = false;
  } else if (currentCategory === 'Certifications') {
    showWebDev = false;
  }

  // I-render ang natagpuan o kaya ay "No results found"
  let htmlContent = '';
  if (showWebDev) htmlContent += webDevHtml;
  if (showCerts) htmlContent += certsHtml;

  if (htmlContent === '') {
    bannerLinksContainer.innerHTML = `<p class="no-results">No results found for "${searchInput.value}".</p>`;
  } else {
    bannerLinksContainer.innerHTML = htmlContent;
  }
}

// Live search listener
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderBannerLinks();
  });
}

// Category buttons click listeners
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.getAttribute('data-category');
    
    if (searchInput) {
      searchInput.value = '';
      searchQuery = '';
    }
    
    renderBannerLinks();
  });
});

// Initial render
renderBannerLinks();