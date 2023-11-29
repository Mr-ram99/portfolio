const body = document.body;
document.addEventListener('DOMContentLoaded', () => {
  const descriptions = document.querySelectorAll('.hero__desc');

  function showDescription(index) {
    const currentDescription = descriptions[index];
    descriptions.forEach(description => {
      if (description !== currentDescription) {
        description.style.display = 'none';
      }
    });
    currentDescription.style.display = 'block';
  }

  let index = 0;
  showDescription(index);
  setInterval(() => {
    index = (index + 1) % descriptions.length;
    showDescription(index);
  }, 4000);
  
})

function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    document.documentElement.style.setProperty('--background', '#000000');
    document.documentElement.style.setProperty('--foreground', '#e5e5e5');
  }
  else {
    document.documentElement.style.setProperty('--background', '#e5e5e5');
    document.documentElement.style.setProperty('--foreground', '#000000');
  }
}
