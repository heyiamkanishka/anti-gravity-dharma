document.addEventListener('DOMContentLoaded', () => {
  // Icon selection logic
  const iconBtns = document.querySelectorAll('.icon-btn');
  
  iconBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      iconBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked
      btn.classList.add('active');
      
      // Optional: Scroll to or highlight the corresponding section
      const religion = btn.dataset.religion;
      const section = document.getElementById(religion);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Add a temporary highlight effect
        section.style.borderColor = 'var(--color-primary)';
        setTimeout(() => {
          section.style.borderColor = 'rgba(255, 255, 255, 0.05)';
        }, 2000);
      }
    });
  });

  // Search functionality (Visual only for now)
  const searchInput = document.querySelector('.search-input');
  const searchBtn = document.querySelector('.search-btn');

  const performSearch = () => {
    const query = searchInput.value.trim();
    if (query) {
      console.log(`Searching for: ${query}`);
      // In a real app, this would filter content or redirect
      alert(`Search feature coming soon! You searched for: ${query}`);
      searchInput.value = '';
    }
  };

  searchBtn.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
});
