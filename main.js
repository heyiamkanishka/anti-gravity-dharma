import { religions } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentReligionId = 'buddhism'; // Default
  let currentTabId = 'history'; // Default Tab (as requested "once the icon color selected history... must have that respective religons color... since buddhism is selected as default... when history is selected use images...")
  // Interpreting "when history is selected" as the default view or just one of the views. I'll make 'history' default.

  // DOM Elements
  const root = document.documentElement;
  const iconBtns = document.querySelectorAll('.icon-btn');
  const navLinks = document.querySelectorAll('.nav-link');

  // Hero Elements
  const heroImg = document.getElementById('hero-img');
  const heroTitle = document.getElementById('hero-title');
  const heroIntro = document.getElementById('hero-intro');
  const heroStats = document.getElementById('hero-stats');

  // Content Elements
  const dynamicContent = document.getElementById('dynamic-content');

  // --- Functions ---

  const renderHero = (religion) => {
    // Update Image (If specific image exists, use it, else keep default or use placeholder logic)
    // For this MVP, we might keep the main image or try to switch if we had assets.
    // The data object has 'image' property.
    if (religion.hero.image) {
      heroImg.src = religion.hero.image;
    }

    heroTitle.textContent = religion.hero.title;
    heroIntro.textContent = religion.hero.intro;

    // Render Stats
    heroStats.innerHTML = religion.hero.stats.map(stat => `
      <div class="stat-item">
        <span class="stat-label">${stat.label}</span>
        <span class="stat-value">${stat.value}</span>
      </div>
    `).join('');
  };

  const renderContent = (religion, tabId) => {
    const tabData = religion.tabs[tabId];
    if (!tabData) return;

    let html = `<h2>${tabData.title}</h2>`;
    html += tabData.content;
    dynamicContent.innerHTML = html;
  };

  const updateTheme = (religion) => {
    // Set CSS Variable
    root.style.setProperty('--color-religion', religion.color);

    // Update Active Icon
    iconBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.religion === religion.id);
    });

    // Update Active Tab Styling
    navLinks.forEach(link => {
      // extract hash from href e.g. "#history" -> "history"
      const linkTabId = link.getAttribute('href').substring(1);
      link.classList.toggle('active-link', linkTabId === currentTabId);
    });
  };

  const updateUI = () => {
    const religion = religions[currentReligionId];
    if (!religion) return;

    updateTheme(religion);
    renderHero(religion);
    renderContent(religion, currentTabId);
  };

  // --- Event Listeners ---

  // Religion Selection
  iconBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const religionId = btn.dataset.religion;
      if (religions[religionId]) {
        currentReligionId = religionId;
        updateUI();
        // Optional: Scroll to top or specific area
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // Tab Selection
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = link.getAttribute('href').substring(1);
      // Only 'history', 'teachings', 'resources' are valid content tabs currently. 
      // 'language' is in the DOM but not in my data structure yet.
      if (['history', 'teachings', 'resources'].includes(tabId)) {
        currentTabId = tabId;
        updateUI();
        // Scroll to content section if not already visible
        const contentSection = document.querySelector('.content-display-section');
        contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Search (Placeholder)
  const searchBtn = document.querySelector('.search-btn');
  const searchInput = document.querySelector('.search-input');

  const performSearch = () => {
    const query = searchInput.value.trim();
    if (query) alert(`Search functionality for "${query}" coming soon!`);
  };

  if (searchBtn) searchBtn.addEventListener('click', performSearch);
  if (searchInput) searchInput.addEventListener('keypress', (e) => (e.key === 'Enter' ? performSearch() : null));

  // Initial Render
  updateUI();
});
