// proj-details.js

const searchInput = document.getElementById('detailsSearchInput');
const projectBlocks = document.querySelectorAll('.project-block');
const dividers = document.querySelectorAll('.divider');
const noResultsDiv = document.getElementById('noResults');

let searchQuery = '';

function filterProjects() {
  let visibleCount = 0;

  projectBlocks.forEach(block => {
    const textContent = block.innerText.toLowerCase();
    const matchesSearch = textContent.includes(searchQuery.toLowerCase());

    if (matchesSearch) {
      block.style.display = 'block';
      visibleCount++;
    } else {
      block.style.display = 'none';
    }
  });

  // Isaayos ang mga divider sa pagitan ng mga visible blocks
  dividers.forEach((div, index) => {
    if (projectBlocks[index] && projectBlocks[index + 1]) {
      if (projectBlocks[index].style.display !== 'none' && projectBlocks[index + 1].style.display !== 'none') {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
      }
    } else {
      div.style.display = 'none';
    }
  });

  // Ipakita o itago ang "No results found"
  if (visibleCount === 0) {
    noResultsDiv.style.display = 'block';
  } else {
    noResultsDiv.style.display = 'none';
  }
}

// Live search event listener
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    filterProjects();
  });
}