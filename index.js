document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.dropbtn');
    const content = dropdown.querySelector('.dropdown-content');

    if (!button) return; // skip dropdowns without buttons
    if (!content) return; // skip if no content

    button.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();

      // Close other dropdowns
      dropdowns.forEach(d => {
        if (d !== dropdown) d.classList.remove('active');
      });

      dropdown.classList.toggle('active');
    });

    // Prevent clicks inside dropdown content from closing
    content.addEventListener('click', e => e.stopPropagation());
  });

  // Close all dropdowns if clicking outside
  document.addEventListener('click', () => {
    dropdowns.forEach(d => d.classList.remove('active'));
  });
});